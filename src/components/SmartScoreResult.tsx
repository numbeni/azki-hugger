import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  ArrowLeft,
  Percent,
  Car,
  Wallet
} from "lucide-react";
import { SmartScoreResult as SmartScoreResultType } from "@/hooks/useSmartScore";

interface SmartScoreResultProps {
  result: SmartScoreResultType;
  onReset: () => void;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
};

const formatCoverage = (amount: number) => {
  if (amount >= 1000000000) {
    return (amount / 1000000000).toFixed(1) + " میلیارد تومان";
  }
  return (amount / 1000000).toFixed(0) + " میلیون تومان";
};

const SmartScoreResultComponent = ({ result, onReset }: SmartScoreResultProps) => {
  const getScoreColor = () => {
    if (result.smartScore >= 80) return "text-green-500";
    if (result.smartScore >= 50) return "text-amber-500";
    return "text-red-500";
  };

  const getScoreBg = () => {
    if (result.smartScore >= 80) return "bg-green-500/10";
    if (result.smartScore >= 50) return "bg-amber-500/10";
    return "bg-red-500/10";
  };

  const getRecommendationInfo = () => {
    switch (result.recommendationType) {
      case "discount":
        return {
          icon: CheckCircle,
          title: "مشتری خوش‌حساب",
          description: "شما به دلیل نداشتن تصادف، واجد شرایط تخفیف ویژه هستید!",
          color: "text-green-500",
          bg: "bg-green-500/10",
        };
      case "high_risk":
        return {
          icon: AlertTriangle,
          title: "ریسک بالاتر",
          description: "با توجه به سابقه تصادف، بیمه‌های با پوشش بالاتر برای شما پیشنهاد می‌شود.",
          color: "text-amber-500",
          bg: "bg-amber-500/10",
        };
      default:
        return {
          icon: Shield,
          title: "پیشنهاد استاندارد",
          description: "بیمه‌های مناسب با وضعیت شما پیشنهاد شده است.",
          color: "text-primary",
          bg: "bg-primary/10",
        };
    }
  };

  const recInfo = getRecommendationInfo();
  const RecIcon = recInfo.icon;

  return (
    <div className="space-y-6">
      {/* Smart Score Card */}
      <Card>
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-lg">امتیاز هوشمند شما</CardTitle>
          <CardDescription>
            {result.fullName} | {result.nationalId}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center mb-6">
            <div className={`w-32 h-32 rounded-full ${getScoreBg()} flex items-center justify-center`}>
              <div className="text-center">
                <span className={`text-4xl font-bold ${getScoreColor()}`}>
                  {result.smartScore}
                </span>
                <p className="text-sm text-muted-foreground">از ۱۰۰</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <Car className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-lg font-bold">{result.accidentCount}</p>
              <p className="text-xs text-muted-foreground">تصادف</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <Wallet className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-lg font-bold">{result.incomeDecile}</p>
              <p className="text-xs text-muted-foreground">دهک درآمدی</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <Percent className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
              <p className="text-lg font-bold text-green-500">{result.discountPercent}%</p>
              <p className="text-xs text-muted-foreground">تخفیف</p>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${recInfo.bg} flex items-start gap-3`}>
            <RecIcon className={`w-6 h-6 ${recInfo.color} shrink-0 mt-0.5`} />
            <div>
              <p className={`font-medium ${recInfo.color}`}>{recInfo.title}</p>
              <p className="text-sm text-muted-foreground">{recInfo.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <div>
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary" />
          پیشنهادات بیمه‌ای شخصی‌سازی شده
        </h3>
        <div className="space-y-3">
          {result.recommendations.map((rec) => (
            <Card key={rec.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{rec.name}</h4>
                      {rec.isPrivate && (
                        <Badge variant="secondary" className="text-xs">خصوصی</Badge>
                      )}
                      {rec.isHighCoverage && (
                        <Badge className="text-xs bg-amber-500">پوشش بالا</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      شرکت بیمه {rec.company}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      سقف پوشش: {formatCoverage(rec.coverageLimit)}
                    </p>
                  </div>
                  <div className="text-left">
                    {result.discountPercent > 0 && (
                      <p className="text-sm text-muted-foreground line-through">
                        {formatPrice(rec.basePrice)}
                      </p>
                    )}
                    <p className="text-lg font-bold text-primary">
                      {formatPrice(rec.finalPrice)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button onClick={onReset} variant="outline" className="w-full gap-2">
        <ArrowLeft className="w-4 h-4" />
        محاسبه مجدد
      </Button>
    </div>
  );
};

export default SmartScoreResultComponent;
