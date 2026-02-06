import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "جریمه عدم تمدید",
      subtitle: "بیمه ثالث صفر شد",
      cta: "خرید قسطی",
      bgColor: "from-amber-100 to-amber-50",
    },
    {
      title: "ثبت‌نام در اَپ",
      subtitle: "۲۰۰ هزار تومان جایزه داره",
      cta: "نصب ازکی",
      bgColor: "from-sky-100 to-sky-50",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-l from-accent/10 to-primary/10 mb-8">
      <div className="flex items-center min-h-[160px] md:min-h-[200px] px-6 md:px-12">
        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/80 flex items-center justify-center hover:bg-card transition-colors shadow-sm z-10"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex-1">
            {/* Car Illustration Placeholder */}
            <div className="w-32 h-24 md:w-48 md:h-32 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center animate-float">
              <div className="text-4xl">🚗</div>
            </div>
          </div>

          <div className="flex-1 text-right">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg md:text-xl text-primary font-bold mb-4">
              {slides[currentSlide].subtitle}
            </p>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              {slides[currentSlide].cta}
            </Button>
          </div>
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/80 flex items-center justify-center hover:bg-card transition-colors shadow-sm z-10"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-primary w-5" : "bg-primary/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
