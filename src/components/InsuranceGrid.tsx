import { Car, Bike, Home, Heart, User, Smartphone, Plane, Shield } from "lucide-react";
import InsuranceCard from "./InsuranceCard";
import { Button } from "@/components/ui/button";

const InsuranceGrid = () => {
  const insurances = [
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "بیمه شخص ثالث خودرو",
      subtitle: "سواری، وانت، کامیون و ...",
      badge: "اعتباری، بدون پیش‌پرداخت",
      badgeColor: "orange" as const,
      highlight: "اگه تا ساعت ۲۱ سفارش بدی، بیمه‌نامه امروز صادر میشه!",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "بیمه بدنه خودرو",
      subtitle: "سواری و وانت",
      badge: "اعتباری، بدون پیش‌پرداخت",
      badgeColor: "orange" as const,
      highlight: "بازدید توسط مشتری در سراسر ایران",
    },
    {
      icon: <Bike className="w-8 h-8 text-primary" />,
      title: "بیمه موتور",
      subtitle: "تک سیلندر، دو سیلندر و ...",
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "بیمه خانه",
      subtitle: "آتش‌سوزی، زلزله و آسانسور",
      badge: "اقساطی",
      badgeColor: "blue" as const,
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "بیمه تکمیلی",
      subtitle: "انفرادی، خانوادگی و شرکتی",
    },
    {
      icon: <User className="w-8 h-8 text-primary" />,
      title: "بیمه عمر",
      subtitle: "عمر و سرمایه‌گذاری و...",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "بیمه موبایل",
      subtitle: "سرقت، آسیب‌دیدگی و ...",
      badge: "٪۸۰ تخفیف",
      badgeColor: "green" as const,
    },
    {
      icon: <Plane className="w-8 h-8 text-primary" />,
      title: "بیمه مسافرتی",
      subtitle: "داخلی، خارجی، زائرین و ...",
      badge: "صدور آنی",
      badgeColor: "blue" as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {insurances.slice(0, 2).map((insurance, index) => (
          <div key={index} className="lg:col-span-2">
            <InsuranceCard {...insurance} featured />
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {insurances.slice(2).map((insurance, index) => (
          <InsuranceCard key={index} {...insurance} />
        ))}
      </div>

      <div className="flex justify-center pt-4">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-xl shadow-azki-button">
          نمایش همه بیمه‌ها
        </Button>
      </div>
    </div>
  );
};

export default InsuranceGrid;
