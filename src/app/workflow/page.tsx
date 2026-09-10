import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WorkflowAnimation } from "@/components/WorkflowAnimation";

export default function WorkflowPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-[#ededed]">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 bg-noise z-[9999]" />
      
      <Navbar />
      
      <div className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Workflow Animation</h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              A representation of the intelligence pipeline.
            </p>
          </div>
          
          <WorkflowAnimation />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
