import { CheckCircle, CreditCard, TrendingUp } from "lucide-react";

interface HeroTabsProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

const HeroTabs = ({ activeTab, onTabChange }: HeroTabsProps) => {
  const tabs = [
    {
      icon: CheckCircle,
      label: "بیمه",
      subtitle: "مقایسه و خرید آنلاین",
      color: "primary",
    },
    {
      icon: CreditCard,
      label: "کالا و خدمات",
      subtitle: "اقساطی، بدون ضامن",
      color: "azki-purple",
    },
    {
      icon: TrendingUp,
      label: "سرمایه‌گذاری",
      subtitle: "آسان و سریع",
      color: "azki-green",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        const isActive = activeTab === index;
        
        return (
          <button
            key={index}
            onClick={() => onTabChange(index)}
            className={`
              flex flex-col items-center gap-2 p-4 md:p-6 rounded-2xl transition-all duration-300
              ${isActive 
                ? "bg-card shadow-azki border-2 border-primary/20" 
                : "bg-card/50 hover:bg-card hover:shadow-sm border-2 border-transparent"
              }
            `}
          >
            <div className={`
              w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center
              ${isActive ? "bg-primary" : "bg-primary/10"}
            `}>
              <Icon className={`w-6 h-6 md:w-7 md:h-7 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
            </div>
            <div className="text-center">
              <p className={`font-bold text-sm md:text-base ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                {tab.label}
              </p>
              <p className="text-xs text-muted-foreground hidden md:block">
                {tab.subtitle}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default HeroTabs;
