import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CountryCarousel from "@/components/CountryCarousel";
import PaySafelySection from "@/components/PaySafelySection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CountryCarousel />
        <PaySafelySection />
        <FeaturesSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
