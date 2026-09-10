"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ServiceDetails } from "@/data/services";

type ServiceModalProps = {
  service: ServiceDetails | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestClick: (serviceId: string) => void;
};

export function ServiceModal({ service, isOpen, onClose, onRequestClick }: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!service) return null;

  const Icon = service.icon;

  const FlowDiagram = ({ flow, title }: { flow: string[], title: string }) => (
    <div className="mb-8">
      <h4 className="text-sm font-bold text-teal-400 mb-4 tracking-widest uppercase">{title}</h4>
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300 bg-white/5 p-4 rounded-lg border border-white/10">
        {flow.map((step, index) => (
          <div key={index} className="flex items-center">
            <span>{step}</span>
            {index < flow.length - 1 && <ArrowRight size={14} className="mx-2 text-gray-500" />}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-3xl max-h-full overflow-y-auto pointer-events-auto bg-[#0a0a0c] border border-white/10 rounded-2xl shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="p-6 md:p-10 border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative z-10 flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Icon size={32} className="text-teal-400" />
                  </div>
                  <div>
                    <h3 id="modal-title" className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 space-y-10">
                
                {/* What We Do */}
                <div>
                  <h4 className="text-sm font-bold text-teal-400 mb-4 tracking-widest uppercase">What We Do</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.whatWeDo.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-teal-500 mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Flows */}
                {service.coreProcess && (
                  <FlowDiagram flow={service.coreProcess.split(" → ")} title="Core Process" />
                )}
                {service.investigationFlow && (
                  <FlowDiagram flow={service.investigationFlow} title="Investigation Flow" />
                )}
                {service.threatFlow && (
                  <FlowDiagram flow={service.threatFlow} title="Threat Intelligence Flow" />
                )}
                {service.automationFlow && (
                  <FlowDiagram flow={service.automationFlow} title="Automation Flow" />
                )}

                {/* What Client Needs to Provide */}
                <div>
                  <h4 className="text-sm font-bold text-teal-400 mb-4 tracking-widest uppercase">What You Need To Provide</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.clientNeeds.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-teal-500 mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-sm font-bold text-teal-400 mb-4 tracking-widest uppercase">What You Receive</h4>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-emerald-500 mt-0.5">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                    
                    {service.possibleAreas && (
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Possible Assessment Areas:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.possibleAreas.map((area, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-gray-500" /> {area}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Optional Services Note */}
                {service.optionalService && (
                  <div className="text-sm text-gray-400 italic bg-white/[0.02] p-4 rounded-lg border border-white/5">
                    Note: {service.optionalService}
                  </div>
                )}

                {/* Important Limitations */}
                <div>
                  <h4 className="text-sm font-bold text-red-400/80 mb-3 tracking-widest uppercase">Important Limitations</h4>
                  <p className="text-sm text-gray-400 leading-relaxed bg-red-500/5 p-4 rounded-lg border border-red-500/10">
                    {service.limitations}
                  </p>
                </div>

              </div>

              {/* Footer CTA & Terms */}
              <div className="p-6 md:p-10 border-t border-white/5 bg-black/20 flex flex-col items-center justify-center gap-6">
                <button
                  onClick={() => onRequestClick(service.id)}
                  className="w-full md:w-auto px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group"
                >
                  Request This Service
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                  <Link href="/terms" className="hover:text-white transition-colors flex items-center gap-1">
                    Terms & Conditions <ArrowRight size={12} />
                  </Link>
                  <span>•</span>
                  <Link href="#" className="hover:text-white transition-colors flex items-center gap-1">
                    Privacy Policy <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
