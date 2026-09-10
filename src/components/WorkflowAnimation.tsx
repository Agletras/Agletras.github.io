"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Search, Cpu, Network, Target } from "lucide-react";

const steps = [
  { id: 1, label: "Data", icon: Database },
  { id: 2, label: "Collection", icon: Search },
  { id: 3, label: "Analysis", icon: Cpu },
  { id: 4, label: "Intelligence", icon: Network },
  { id: 5, label: "Decision", icon: Target },
];

export function WorkflowAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  
  // Total duration for the line drawing
  const lineDuration = 2; 

  return (
    <div 
      className="relative w-full max-w-md rounded-[24px] border border-white/5 bg-[#0a0a0c] p-10 overflow-hidden shadow-2xl mx-auto"
      ref={containerRef}
    >
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h24v24H0V0zm12 12h12v12H12V12zM0 12h12v12H0V12z\' fill=\'%23ffffff\' fill-rule=\'evenodd\' fill-opacity=\'1\'/%3E%3C/svg%3E")',
          backgroundSize: "24px 24px"
        }}
      />
      
      {/* Subtle Glow effect top right */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10">
        {/* Animated vertical line background */}
        <div className="absolute left-[24px] top-[24px] bottom-[24px] w-[1px] bg-white/5" />

        {/* Animated vertical line progress */}
        <div className="absolute left-[24px] top-[24px] bottom-[24px] w-[1px] flex justify-center">
          <motion.div 
            className="w-[1px] bg-gradient-to-b from-emerald-500/0 via-emerald-400 to-emerald-500/0 shadow-[0_0_10px_rgba(52,211,153,0.5)] origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: lineDuration, ease: "easeInOut" }}
            style={{ height: "100%" }}
          />
        </div>

        <div className="flex flex-col">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            // Delay for each item to light up when the line reaches it
            const delay = (i / (steps.length - 1)) * lineDuration;

            return (
              <div key={step.id} className="relative flex items-center gap-6 group">
                <motion.div 
                  className="relative z-10 w-12 h-12 rounded-[14px] border border-white/5 bg-[#121214] flex items-center justify-center shrink-0 transition-colors duration-500"
                  initial={{ borderColor: "rgba(255,255,255,0.05)", backgroundColor: "#121214", color: "#6b7280" }}
                  animate={isInView ? { 
                    borderColor: ["rgba(255,255,255,0.05)", "rgba(52,211,153,0.3)", "rgba(255,255,255,0.1)"],
                    backgroundColor: ["#121214", "#182420", "#161619"],
                    color: ["#6b7280", "#34d399", "#ededed"]
                  } : {}}
                  transition={{ duration: 1, delay: delay, ease: "easeOut" }}
                >
                  <step.icon size={20} strokeWidth={1.5} />
                </motion.div>

                <div className={`flex-1 py-6 flex items-center ${!isLast ? 'border-b border-white/5' : ''}`}>
                  <motion.span 
                    className="text-[16px] font-semibold tracking-wide"
                    initial={{ color: "#6b7280" }}
                    animate={isInView ? { color: "#ededed" } : {}}
                    transition={{ duration: 0.5, delay: delay + 0.2 }}
                  >
                    {step.label}
                  </motion.span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
