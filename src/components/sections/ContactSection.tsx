"use client";

import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-40 relative overflow-hidden bg-black border-t border-white/5">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        <span className="font-mono text-emerald-500 mb-6 block">[ 06 ] INITIATE</span>
        
        {/* CTA Part */}
        <div className="mb-24">
          <h2 className="text-title-1 font-bold mb-8 tracking-tight">
            Have Information.<br />
            <span className="text-emerald-400">Need Intelligence?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 font-light">
            Let&apos;s explore how research, automation, and security intelligence can solve your information challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="mailto:hello@yourdomain.com"
              className="px-10 py-4 rounded-sm bg-white text-black font-semibold text-center hover:bg-gray-200 transition-all duration-300 tracking-wide text-sm flex items-center justify-center gap-2 group"
            >
              Start a Conversation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="/research"
              className="px-10 py-4 rounded-sm border border-white/10 bg-white/5 text-white font-medium text-center hover:bg-white/10 hover:border-white/30 transition-all duration-300 tracking-wide text-sm flex items-center justify-center gap-2"
            >
              Explore Our Research
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
