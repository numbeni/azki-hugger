import { Monitor, MousePointer, AlertCircle, Calendar, ChevronLeft } from "lucide-react";

const WhyOnline = () => {
  const questions = [
    {
      icon: Monitor,
      question: "چرا بیمه رو آنلاین بخرم؟",
      answer: "«خدمات آنلاین» متنوع، سریع و امن هستن. برای خرید بهترین بیمه از «ازکی» می‌تونی در یک نگاه تمام شرکت‌های بیمه رو با هم مقایسه کنی.",
    },
    {
      icon: MousePointer,
      question: "خرید آنلاین بیمه، سخته یا آسون؟",
      answer: "استفاده از وب‌سایت «ازکی» آسونه! چون هدفمون ساده کردن مراحل سنتی و پیچیده‌ی بیمه‌ست.",
    },
    {
      icon: AlertCircle,
      question: "اگه اطلاعاتم رو اشتباه وارد کنم چی میشه؟",
      answer: "کارشناسان «ازکی» قبل از صدور بیمه‌نامه، اطلاعات موردنیاز رو استعلام می‌گیرند تا از صحت اون‌ها مطمئن بشن.",
    },
    {
      icon: Calendar,
      question: "ممکنه تاریخ سررسید بیمه‌ام یادم بره؟",
      answer: "یکی از فواید خرید از ازکی، یادآوری زمان تمدید بیمه‌ست. اینطوری هم از ضرر مالی پیشگیری می‌کنی و هم جریمه نمیشی.",
    },
  ];

  return (
    <section className="azki-section bg-card">
      <div className="azki-container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          خرید آنلاین بیمه بدون نگرانی
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {questions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-background rounded-2xl p-6 hover:shadow-azki transition-all group cursor-pointer"
              >
                <div className="azki-icon-wrapper mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-3">{item.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {item.answer}
                </p>
                <div className="mt-4 flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>بیشتر بخوانید</span>
                  <ChevronLeft className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyOnline;
