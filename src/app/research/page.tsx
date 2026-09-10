import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ResearchSection } from "@/components/sections/ResearchSection";

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-[#ededed] selection:bg-emerald-500/30">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 bg-noise z-[9999]" pointer-events-none="true" aria-hidden="true" />
      
      <Navbar />

      <div className="pt-32 pb-12 relative z-10">
        <ResearchSection />
      </div>
      
      <Footer />
    </main>
  );
}
