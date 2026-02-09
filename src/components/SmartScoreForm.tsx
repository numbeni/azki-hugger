import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Loader2 } from "lucide-react";

interface SmartScoreFormProps {
  onSubmit: (nationalId: string, fullName: string, phone: string) => void;
  loading: boolean;
}

const SmartScoreForm = ({ onSubmit, loading }: SmartScoreFormProps) => {
  const [nationalId, setNationalId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!nationalId) {
      newErrors.nationalId = "کد ملی الزامی است";
    } else if (!/^\d{10}$/.test(nationalId)) {
      newErrors.nationalId = "کد ملی باید ۱۰ رقم باشد";
    }

    if (!fullName.trim()) {
      newErrors.fullName = "نام و نام خانوادگی الزامی است";
    }

    if (!phone) {
      newErrors.phone = "شماره موبایل الزامی است";
    } else if (!/^09\d{9}$/.test(phone)) {
      newErrors.phone = "شماره موبایل معتبر نیست";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(nationalId, fullName, phone);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Brain className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-xl">امتیاز هوشمند</CardTitle>
        <CardDescription>
          اطلاعات خود را وارد کنید تا بهترین پیشنهادات بیمه‌ای را دریافت کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">نام و نام خانوادگی</Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="مثال: علی محمدی"
              className={errors.fullName ? "border-destructive" : ""}
            />
            {errors.fullName && (
              <p className="text-sm text-destructive">{errors.fullName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="nationalId">کد ملی</Label>
            <Input
              id="nationalId"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value.replace(/\D/g, "").slice(0, 10))}
              placeholder="مثال: 0012345678"
              className={errors.nationalId ? "border-destructive" : ""}
              dir="ltr"
            />
            {errors.nationalId && (
              <p className="text-sm text-destructive">{errors.nationalId}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">شماره موبایل</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))}
              placeholder="مثال: 09123456789"
              className={errors.phone ? "border-destructive" : ""}
              dir="ltr"
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin ml-2" />
                در حال محاسبه...
              </>
            ) : (
              "محاسبه امتیاز هوشمند"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            برای تست می‌توانید از کدهای ملی نمونه استفاده کنید:
            <br />
            <span className="font-mono">0012345678</span> (با تصادف - دهک ۳)
            <br />
            <span className="font-mono">0034567890</span> (بدون تصادف - دهک ۵)
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default SmartScoreForm;
