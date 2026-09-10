"use client";

import { motion } from "framer-motion";
import { GenerativeIntelligenceTree } from "@/components/GenerativeIntelligenceTree";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden border-b border-white/5">
      {/* Precision Background Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute left-12 lg:left-[10%] top-0 bottom-0 w-px bg-white/[0.03]" />
      
      {/* Background Glows */}
      <div className="absolute top-[10%] -left-32 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-[10%] -right-32 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.19, 1.0, 0.22, 1.0] }}
          className="flex flex-col space-y-8 lg:col-span-8"
        >
          <div className="inline-flex items-center gap-4">
            <span className="w-12 h-px bg-emerald-500/50 block"></span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-emerald-400">
              OSINT • Automation • Cyber
            </span>
          </div>
          
          <h1 className="text-hero text-white">
            <span className="block opacity-90 hover:opacity-100 transition-opacity">Intelligence</span>
            <span className="block text-gradient">From Open</span>
            <span className="block text-gradient-accent">Information.</span>
          </h1>
          
          <p className="text-body-large text-gray-400 max-w-xl font-light">
            Agletras builds research-driven technologies that transform publicly available information into actionable, decisive intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-8">
            <a 
              href="/#about"
              className="px-10 py-4 rounded-sm bg-white text-black font-semibold text-center hover:bg-gray-200 transition-all duration-300 tracking-wide text-sm flex items-center justify-center gap-2 group"
            >
              Explore Agletras
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="/research"
              className="px-10 py-4 rounded-sm border border-white/10 bg-white/5 text-white font-medium text-center hover:bg-white/10 hover:border-white/30 transition-all duration-300 tracking-wide text-sm flex items-center justify-center gap-2 group"
            >
              View Research
            </a>
          </div>
        </motion.div>

        {/* Generative Network Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative w-full h-[400px] lg:h-[600px] lg:col-span-4 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-700"
        >
          <GenerativeIntelligenceTree />
        </motion.div>
      </div>

    </section>
  );
}
