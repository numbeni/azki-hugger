import { CreditCard, Scale, Headphones, Truck } from "lucide-react";

const FeaturesStrip = () => {
  const features = [
    {
      icon: CreditCard,
      label: "امکان خرید اقساطی",
    },
    {
      icon: Scale,
      label: "امکان مقایسه بیمه‌ها",
    },
    {
      icon: Headphones,
      label: "پشتیبانی ۲۴ ساعته",
    },
    {
      icon: Truck,
      label: "ارسال رایگان به سراسر ایران",
    },
  ];

  return (
    <section className="bg-card py-8 border-y border-border">
      <div className="azki-container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <Icon className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesStrip;
