"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MethodologyVisual } from "../visuals/MethodologyVisual";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Scan the digital landscape and identify all publicly accessible data points — assets, subdomains, services, and entry points across the entire attack surface.",
  },
  {
    num: "02",
    title: "Collect",
    desc: "Gather and consolidate scattered intelligence from multiple sources into a single structured collection point for processing.",
  },
  {
    num: "03",
    title: "Correlate",
    desc: "Map relationships and hidden connections between collected data points. Identify patterns, clusters, and associations across the intelligence graph.",
  },
  {
    num: "04",
    title: "Analyze",
    desc: "Evaluate each connection for security posture. Classify verified-safe paths in green and active threats in red across the entire network.",
  },
  {
    num: "05",
    title: "Report",
    desc: "Generate a comprehensive intelligence report — all threats resolved, assets verified, and actionable security recommendations delivered.",
  },
  {
    num: "06",
    title: "Act",
    desc: "Take decisive action to grow and scale. Implement strategic security improvements, expand coverage, and continuously strengthen your security posture.",
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-32 relative bg-[#0a0a0c]">
      {/* ── FULL SCREEN BACKGROUND + ANIMATIONS ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          {/* 1. Full screen image */}
          <img
            src="/methodology-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-50 filter contrast-125 saturate-50"
          />
          {/* 2. Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/40 to-[#0a0a0c]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
          
          {/* 3. Full screen SVG animations (scales exactly with image) */}
          <div className="absolute inset-0 z-10 w-full h-full">
            <MethodologyVisual activeStep={activeStep} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8 bg-black/40 backdrop-blur-sm p-8 rounded-2xl border-t border-white/5 shadow-2xl">
          <div>
            <span className="font-mono text-emerald-500 mb-4 block">[ 02 ]</span>
            <h2 className="text-title-1 font-bold drop-shadow-lg">Methodology</h2>
          </div>
          <p className="text-gray-300 max-w-sm text-sm font-light drop-shadow">
            A systematic intelligence cycle. Transforming scattered data points
            into decisive action.
          </p>
        </div>

        {/* ── Right-aligned scrolling cards ── */}
        <div className="flex justify-end relative items-start">
          <div className="w-full lg:w-5/12 flex flex-col gap-6 md:gap-24 pb-24 md:pb-64 pt-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                onViewportEnter={() => setActiveStep(index)}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                className={`relative flex flex-col p-8 md:p-10 rounded-2xl border transition-all duration-700 backdrop-blur-md ${
                  activeStep === index
                    ? "bg-black/60 border-emerald-500/30 shadow-[0_0_50px_rgba(52,211,153,0.1)]"
                    : "bg-black/20 border-white/5 opacity-40 hover:opacity-70"
                }`}
              >
                {/* Step number + divider */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-sm border flex items-center justify-center font-mono text-sm font-bold transition-colors duration-500 ${
                      activeStep === index
                        ? "border-emerald-500/50 text-emerald-400 bg-emerald-500/10 shadow-[0_0_15px_rgba(52,211,153,0.2)]"
                        : "border-white/10 text-gray-400 bg-black/50"
                    }`}
                  >
                    {step.num}
                  </div>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight transition-colors duration-500 drop-shadow-md ${
                    activeStep === index ? "text-white" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-base md:text-lg leading-relaxed font-light transition-colors duration-500 drop-shadow ${
                    activeStep === index ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {step.desc}
                </p>

                {/* Connector arrow to next step */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center pt-8 lg:pt-12">
                    <div
                      className={`w-px h-16 transition-colors duration-500 ${
                        activeStep > index
                          ? "bg-gradient-to-b from-emerald-500/50 to-transparent"
                          : "bg-gradient-to-b from-white/20 to-transparent"
                      }`}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
