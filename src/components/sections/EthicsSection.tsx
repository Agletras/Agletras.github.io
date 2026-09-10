"use client";

import { CheckCircle2 } from "lucide-react";

const principles = [
  "Public Information",
  "Responsible Research",
  "Privacy Awareness",
  "Legal Compliance",
  "Security",
  "Transparency"
];

export function EthicsSection() {
  return (
    <section className="py-32 relative bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16 items-center">
        
        <div className="md:w-1/3">
          <span className="font-mono text-emerald-500 mb-4 block">[ 05 ]</span>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Responsible<br/>Intelligence</h2>
          
          <div className="w-12 h-12 mt-8 rounded-sm border border-white/10 flex items-center justify-center text-emerald-500">
            <CheckCircle2 size={24} strokeWidth={1.5} />
          </div>
        </div>
        
        <div className="md:w-2/3">
          <p className="text-2xl md:text-3xl text-gray-300 leading-tight mb-12 font-light italic">
            &quot;Agletras focuses on lawful, ethical, and responsible research using publicly available information. Our work is designed to improve understanding, security, verification, and decision-making while respecting privacy and applicable laws.&quot;
          </p>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-mono text-gray-500">
            {principles.map((principle, idx) => (
              <div key={idx} className="flex items-center gap-2 tracking-tight">
                <span className="text-emerald-500/50">+</span>
                {principle}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
