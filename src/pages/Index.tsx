import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertiesSection";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import EMICalculator from "@/components/EMICalculator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <PropertiesSection />
        <HowItWorks />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <EMICalculator />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
