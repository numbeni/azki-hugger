import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AppBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "با اپلیکیشن ازکی",
      subtitle: "نصب آسان، خرید آسان",
      cta: "دانلود اپلیکیشن",
    },
    {
      title: "ثبت‌نام در اَپ",
      subtitle: "۲۰۰ هزار تومان جایزه داره",
      cta: "نصب ازکی",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative bg-gradient-to-r from-primary to-primary/80 rounded-3xl overflow-hidden mx-4 md:mx-0">
      <div className="flex items-center justify-between p-8 md:p-12">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-primary-foreground" />
        </button>

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          {/* Mobile Phones Illustration */}
          <div className="flex gap-4 md:order-1">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-24 h-44 md:w-28 md:h-52 bg-primary-foreground/10 rounded-3xl border-4 border-primary-foreground/20 shadow-lg transform hover:-translate-y-2 transition-transform"
                style={{ 
                  transform: `rotate(${(i - 2) * 5}deg)`,
                }}
              >
                <div className="w-8 h-1 bg-primary-foreground/30 rounded-full mx-auto mt-2" />
                <div className="p-2 mt-4 space-y-2">
                  <div className="w-full h-2 bg-primary-foreground/20 rounded" />
                  <div className="w-3/4 h-2 bg-primary-foreground/20 rounded" />
                  <div className="w-1/2 h-2 bg-primary-foreground/20 rounded" />
                </div>
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div className="text-center md:text-right md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              {slides[currentSlide].title}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-6">
              {slides[currentSlide].subtitle}
            </p>
            <Button 
              variant="secondary" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2 px-6 py-5 rounded-xl font-bold"
            >
              <Download className="w-5 h-5" />
              {slides[currentSlide].cta}
            </Button>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-primary-foreground" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 pb-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index 
                ? "bg-primary-foreground w-6" 
                : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AppBanner;
