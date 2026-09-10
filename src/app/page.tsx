import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TechSection } from "@/components/sections/TechSection";
import { EthicsSection } from "@/components/sections/EthicsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-[#ededed] selection:bg-emerald-500/30">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 bg-noise z-[9999]" />
      
      <Navbar />
      
      <HeroSection />
      
      <ServicesSection />
      <AboutSection />
      
      <ProcessSection />
      <TechSection />
      <EthicsSection />
      <StatsSection />
      <ContactSection />
      
      <Footer />
    </main>
  );
}
