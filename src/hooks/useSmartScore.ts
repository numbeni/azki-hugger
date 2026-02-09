import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface SmartScoreResult {
  nationalId: string;
  fullName: string;
  phone: string;
  accidentCount: number;
  incomeDecile: number;
  smartScore: number;
  discountPercent: number;
  recommendationType: "discount" | "high_risk" | "standard";
  recommendations: InsuranceRecommendation[];
}

export interface InsuranceRecommendation {
  id: string;
  name: string;
  company: string;
  type: string;
  basePrice: number;
  coverageLimit: number;
  isPrivate: boolean;
  isHighCoverage: boolean;
  finalPrice: number;
}

export const useSmartScore = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<SmartScoreResult | null>(null);

  const calculateSmartScore = async (
    nationalId: string,
    fullName: string,
    phone: string
  ) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // بررسی اعتبار کد ملی
      if (!/^\d{10}$/.test(nationalId)) {
        throw new Error("کد ملی باید ۱۰ رقم باشد");
      }

      // محاسبه تاریخ یک سال گذشته
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

      // استعلام تعداد تصادفات سال گذشته
      const { data: accidents, error: accidentError } = await supabase
        .from("accident_records")
        .select("*")
        .eq("national_id", nationalId)
        .gte("accident_date", oneYearAgo.toISOString().split("T")[0]);

      if (accidentError) throw accidentError;

      const accidentCount = accidents?.length || 0;

      // استعلام دهک درآمدی
      const { data: incomeData, error: incomeError } = await supabase
        .from("income_deciles")
        .select("decile")
        .eq("national_id", nationalId)
        .maybeSingle();

      if (incomeError) throw incomeError;

      // اگر کاربر در سیستم نیست، دهک ۵ (متوسط) در نظر گرفته می‌شود
      const incomeDecile = incomeData?.decile || 5;

      // محاسبه Smart Score و تخفیف
      let smartScore = 100;
      let discountPercent = 0;
      let recommendationType: "discount" | "high_risk" | "standard" = "standard";

      // قاعده اول: بر اساس سابقه تصادف
      if (accidentCount === 0) {
        smartScore = 100;
        discountPercent = 15; // ۱۵٪ تخفیف برای بدون تصادف
        recommendationType = "discount";
      } else if (accidentCount === 1) {
        smartScore = 70;
        discountPercent = 0;
        recommendationType = "high_risk";
      } else {
        smartScore = Math.max(30, 70 - (accidentCount - 1) * 15);
        discountPercent = 0;
        recommendationType = "high_risk";
      }

      // قاعده دوم: بر اساس دهک درآمدی
      const isLowIncome = incomeDecile <= 5;

      // دریافت بیمه‌های پیشنهادی
      let query = supabase.from("insurance_recommendations").select("*");

      if (recommendationType === "high_risk") {
        // برای ریسک بالا: بیمه‌های با پوشش بالا
        query = query.eq("is_high_coverage", true);
      } else if (isLowIncome) {
        // برای دهک پایین: بیمه‌های خصوصی
        query = query.eq("is_private", true);
      } else {
        // برای دهک بالا: بیمه‌های دولتی
        query = query.eq("is_private", false).eq("is_high_coverage", false);
      }

      const { data: insurances, error: insuranceError } = await query;

      if (insuranceError) throw insuranceError;

      // محاسبه قیمت نهایی با تخفیف
      const recommendations: InsuranceRecommendation[] = (insurances || []).map(
        (ins) => ({
          id: ins.id,
          name: ins.name,
          company: ins.company,
          type: ins.type,
          basePrice: Number(ins.base_price),
          coverageLimit: Number(ins.coverage_limit),
          isPrivate: ins.is_private,
          isHighCoverage: ins.is_high_coverage,
          finalPrice: Math.round(
            Number(ins.base_price) * (1 - discountPercent / 100)
          ),
        })
      );

      const scoreResult: SmartScoreResult = {
        nationalId,
        fullName,
        phone,
        accidentCount,
        incomeDecile,
        smartScore,
        discountPercent,
        recommendationType,
        recommendations,
      };

      setResult(scoreResult);

      // ذخیره نتیجه در دیتابیس
      await supabase.from("smart_scores").insert({
        national_id: nationalId,
        full_name: fullName,
        phone,
        accident_count: accidentCount,
        income_decile: incomeDecile,
        smart_score: smartScore,
        discount_percent: discountPercent,
        recommendation_type: recommendationType,
      });

      return scoreResult;
    } catch (err) {
      const message = err instanceof Error ? err.message : "خطای ناشناخته";
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setError(null);
  };

  return {
    calculateSmartScore,
    loading,
    error,
    result,
    reset,
  };
};
