"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const researchTopics = [
  "OSINT Automation",
  "Cyber Threat Intelligence",
  "AI-Assisted Investigation",
  "Digital Footprint Analysis",
  "Information Correlation",
  "Security Research",
  "Automated Intelligence Pipelines",
  "Open-Source Security Tools"
];

export function ResearchSection() {
  return (
    <section id="research" className="py-24 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Research & Intelligence</h2>
          <p className="text-gray-400 text-lg">
            Agletras explores the intersection of OSINT, cybersecurity, automation, and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {researchTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/20 transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <FileText size={18} className="text-gray-500 mt-1 group-hover:text-teal-400 transition-colors shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-300 group-hover:text-white transition-colors text-sm leading-snug">
                    {topic}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono mt-3">Research Area</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
