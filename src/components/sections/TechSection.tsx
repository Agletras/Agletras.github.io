"use client";

import { motion } from "framer-motion";

const technologies = [
  "Python", "Linux", "Cybersecurity", "OSINT", 
  "Automation", "Artificial Intelligence", "Data Analysis", "Cloud Infrastructure"
];

export function TechSection() {
  return (
    <section className="py-32 relative bg-black border-y border-white/5">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16 items-center">
        
        <div className="md:w-1/3">
          <span className="font-mono text-emerald-500 mb-4 block">[ 03 ]</span>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Core Stack</h2>
          <p className="text-gray-400 font-light text-sm">
            Our capabilities are built upon a foundation of robust, scalable, and secure technologies.
          </p>
        </div>
        
        <div className="md:w-2/3 flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="px-4 py-2 bg-white/[0.02] border border-white/10 rounded-sm text-gray-300 font-mono text-xs hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors duration-300 cursor-default"
            >
              <span className="text-gray-600 mr-2">&gt;</span>{tech}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
