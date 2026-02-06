import { ArrowLeft, CreditCard, Scale, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const AzkiVam = () => {
  const features = [
    { icon: Scale, label: "مقایسه طرح‌های اعتباری" },
    { icon: ShoppingBag, label: "خرید از فروشگاه‌های معتبر" },
    { icon: CreditCard, label: "پرداخت اقساطی" },
  ];

  return (
    <section className="azki-section bg-card">
      <div className="azki-container">
        <div className="bg-gradient-to-br from-azki-purple/10 to-azki-purple/5 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Content */}
            <div className="flex-1 text-center lg:text-right">
              <div className="inline-flex items-center gap-2 bg-azki-purple/10 rounded-full px-4 py-2 mb-4">
                <div className="w-8 h-8 bg-azki-purple rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">V</span>
                </div>
                <span className="font-bold text-azki-purple">ازکی وام</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                پلتفرم مقایسه و انتخاب طرح‌های اعتباری مختلف
              </h2>
              
              <p className="text-muted-foreground mb-6 max-w-xl">
                در ازکی وام می‌تونی تا سقف ۱۰۰ میلیون تومان اعتبار بگیری و هزینه‌ی محصول موردنظرت رو در بازه‌های زمانی متعدد پرداخت کنی.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-2 bg-card rounded-xl px-4 py-3 shadow-sm"
                    >
                      <Icon className="w-5 h-5 text-azki-purple" />
                      <span className="text-sm font-medium">{feature.label}</span>
                    </div>
                  );
                })}
              </div>

              <Button 
                className="bg-azki-purple hover:bg-azki-purple/90 text-primary-foreground gap-2"
              >
                <span>ورود به ازکی وام</span>
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>

            {/* Illustration */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-azki-purple/20 rounded-full blur-3xl" />
                <div className="relative w-full h-full bg-gradient-to-br from-azki-purple to-azki-purple/70 rounded-3xl flex items-center justify-center">
                  <CreditCard className="w-24 h-24 text-primary-foreground/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AzkiVam;
