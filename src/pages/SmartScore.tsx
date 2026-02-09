import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmartScoreForm from "@/components/SmartScoreForm";
import SmartScoreResult from "@/components/SmartScoreResult";
import { useSmartScore } from "@/hooks/useSmartScore";
import { Brain, Shield, Zap, Target } from "lucide-react";

const SmartScorePage = () => {
  const { calculateSmartScore, loading, error, result, reset } = useSmartScore();

  const handleSubmit = async (nationalId: string, fullName: string, phone: string) => {
    await calculateSmartScore(nationalId, fullName, phone);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="azki-gradient-bg py-12 md:py-16">
        <div className="azki-container">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              سیستم امتیاز هوشمند (Smart Score)
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              با استفاده از هوش مصنوعی، بهترین پیشنهادات بیمه‌ای را بر اساس سابقه رانندگی و وضعیت اقتصادی خود دریافت کنید
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-card">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="font-medium text-sm">تخفیف ویژه</p>
                <p className="text-xs text-muted-foreground">برای رانندگان بدون تصادف</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">پیشنهاد شخصی</p>
                <p className="text-xs text-muted-foreground">متناسب با دهک درآمدی</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-card">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="font-medium text-sm">محاسبه آنی</p>
                <p className="text-xs text-muted-foreground">نتیجه در کمتر از ۳ ثانیه</p>
              </div>
            </div>
          </div>

          {/* Form or Result */}
          <div className="max-w-xl mx-auto">
            {error && (
              <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm mb-6 text-center">
                {error}
              </div>
            )}

            {result ? (
              <SmartScoreResult result={result} onReset={reset} />
            ) : (
              <SmartScoreForm onSubmit={handleSubmit} loading={loading} />
            )}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="azki-section">
        <div className="azki-container">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
            نحوه عملکرد سیستم امتیاز هوشمند
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: "۱",
                title: "ورود اطلاعات",
                description: "کد ملی و اطلاعات تماس خود را وارد کنید",
              },
              {
                step: "۲",
                title: "استعلام سوابق",
                description: "سابقه تصادفات و دهک درآمدی بررسی می‌شود",
              },
              {
                step: "۳",
                title: "محاسبه امتیاز",
                description: "امتیاز هوشمند شما محاسبه می‌شود",
              },
              {
                step: "۴",
                title: "پیشنهادات ویژه",
                description: "بهترین بیمه‌ها با تخفیف به شما پیشنهاد می‌شود",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartScorePage;
