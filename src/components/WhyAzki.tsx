import { Scale, Clock, CreditCard, Shield, Zap } from "lucide-react";

const WhyAzki = () => {
  const advantages = [
    {
      icon: Scale,
      title: "مقایسه قیمت و خدمات بیمه‌ها",
      description: "با بررسی‌‌ فهرست قیمت و خدمات تمام شرکت‌ها، ‌بیمه‌‌‌ت رو زیرکانه انتخاب کن.",
    },
    {
      icon: Clock,
      title: "خرید بیمه؛ هر زمان و هر کجا",
      description: "بیمه‌‌ موردنیازت رو در ۲۴ ساعت شبانه‌روز و از هر کجا که هستی خریداری کن.",
    },
    {
      icon: CreditCard,
      title: "امکان خرید قسطی بیمه",
      description: "بدون چک، ضامن یا سفته با اقساط ۳ تا ۱۱ ماهه (بسته به شرکت بیمه).",
    },
    {
      icon: Shield,
      title: "تحت نظارت بیمه مرکزی",
      description: "تمامی فعالیت‌های ما در «ازکی» تحت کنترل و نظارت بیمه مرکزی انجام میشه.",
    },
    {
      icon: Zap,
      title: "صدور سریع بیمه‌نامه",
      description: "بیمه‌ای که احتیاج به بازدید نداره، همون روز صادر میشه و قابل استفاده‌ست.",
    },
  ];

  return (
    <section className="azki-section azki-gradient-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="azki-container relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
            <span className="text-3xl">❓</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            چرا از «ازکی» بخرم؟
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            چون ما در ازکی بهت کمک می‌کنیم، مناسب‌ترین بیمه رو انتخاب کنی.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={`bg-card rounded-2xl p-6 shadow-azki hover:shadow-azki-hover transition-all ${
                  index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="azki-icon-wrapper shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyAzki;
