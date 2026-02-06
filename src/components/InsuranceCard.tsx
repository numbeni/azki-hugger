import { ReactNode } from "react";

interface InsuranceCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  badge?: string;
  badgeColor?: "orange" | "green" | "blue";
  featured?: boolean;
  highlight?: string;
}

const InsuranceCard = ({ 
  icon, 
  title, 
  subtitle, 
  badge, 
  badgeColor = "orange",
  featured = false,
  highlight
}: InsuranceCardProps) => {
  const badgeClasses = {
    orange: "azki-badge-orange",
    green: "azki-badge-green",
    blue: "azki-badge-blue",
  };

  return (
    <div className={`
      azki-card relative
      ${featured ? "md:col-span-2 lg:col-span-1" : ""}
    `}>
      {badge && (
        <div className={`azki-badge ${badgeClasses[badgeColor]} absolute -top-2 right-4`}>
          {badge}
        </div>
      )}
      
      <div className="flex items-start gap-4">
        <div className="azki-icon-wrapper shrink-0">
          {icon}
        </div>
        
        <div className="flex-1 pt-1">
          <h3 className="font-bold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
          
          {highlight && (
            <p className="text-xs text-primary mt-2 font-medium">{highlight}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;
