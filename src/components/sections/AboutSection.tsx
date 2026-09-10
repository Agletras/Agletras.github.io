"use client";

export function AboutSection() {
  return (
    <section id="about" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/3">
          <span className="font-mono text-emerald-500 mb-4 block">[ 04 ]</span>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">The Initiative</h2>
        </div>
        
        <div className="md:w-2/3">
          <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
            Researching Information.<br />
            <span className="text-gray-500 font-light">Engineering Intelligence.</span>
          </h3>
          
          <div className="space-y-8 text-gray-400 text-lg leading-relaxed font-light">
            <p>
              Agletras is a specialized technology and research initiative focused on transforming open-source information into structured, actionable intelligence through advanced automation, artificial intelligence, and cybersecurity research.
            </p>
            
            <div className="h-px w-full bg-white/5 my-8" />
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm font-medium text-gray-300 font-mono tracking-tight">
              <li className="flex items-center gap-3"><span className="text-emerald-500 text-xs">/</span> Open-Source Intelligence</li>
              <li className="flex items-center gap-3"><span className="text-emerald-500 text-xs">/</span> Security Research</li>
              <li className="flex items-center gap-3"><span className="text-emerald-500 text-xs">/</span> Information Discovery</li>
              <li className="flex items-center gap-3"><span className="text-emerald-500 text-xs">/</span> Automation Systems</li>
              <li className="flex items-center gap-3"><span className="text-emerald-500 text-xs">/</span> AI-assisted Research</li>
              <li className="flex items-center gap-3"><span className="text-emerald-500 text-xs">/</span> Business Intelligence</li>
              <li className="flex items-center gap-3"><span className="text-emerald-500 text-xs">/</span> Threat Landscape Analysis</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
