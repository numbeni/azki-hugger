import { useState } from "react";
import Header from "@/components/Header";
import HeroTabs from "@/components/HeroTabs";
import HeroBanner from "@/components/HeroBanner";
import SearchBar from "@/components/SearchBar";
import InsuranceGrid from "@/components/InsuranceGrid";
import AppBanner from "@/components/AppBanner";
import WhyOnline from "@/components/WhyOnline";
import WhyAzki from "@/components/WhyAzki";
import FeaturesStrip from "@/components/FeaturesStrip";
import AzkiVam from "@/components/AzkiVam";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="azki-gradient-bg py-8 md:py-12">
        <div className="azki-container">
          <HeroTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <HeroBanner />
          
          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
              ازکی؛ مقایسه و خرید آنلاین بیمه
            </h1>
            <p className="text-muted-foreground">
              بیمه‌ مورد نظرت رو انتخاب کن!
            </p>
          </div>

          <SearchBar />
          <InsuranceGrid />
        </div>
      </section>

      {/* App Banner */}
      <section className="azki-section">
        <div className="azki-container">
          <AppBanner />
        </div>
      </section>

      {/* Why Online Section */}
      <WhyOnline />

      {/* Why Azki Section */}
      <WhyAzki />

      {/* Features Strip */}
      <FeaturesStrip />

      {/* Azki Vam Section */}
      <AzkiVam />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
