"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { servicesData } from "@/data/services";

type RequestServiceModalProps = {
  serviceId: string | null;
  isOpen: boolean;
  onClose: () => void;
};

export function RequestServiceModal({ serviceId, isOpen, onClose }: RequestServiceModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState(serviceId || "");

  useEffect(() => {
    if (serviceId) {
      setSelectedService(serviceId);
    }
  }, [serviceId]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSuccess(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    }, 1500);
  };

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
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="request-modal-title"
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-2xl max-h-full overflow-y-auto pointer-events-auto bg-[#0a0a0c] border border-white/10 rounded-2xl shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="p-6 md:p-10 border-b border-white/5">
                <h3 id="request-modal-title" className="text-2xl font-bold text-white">
                  Request Service
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Provide details about your project to start the engagement process.
                </p>
              </div>

              {isSuccess ? (
                <div className="p-10 text-center flex flex-col items-center justify-center py-20">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                    <Send size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Request Submitted</h4>
                  <p className="text-gray-400 max-w-md">
                    Thank you. We have received your request and will contact you shortly to discuss the scope.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Name</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Organization</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="Company Ltd" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Business Email</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="jane@company.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Service</label>
                    <select 
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      required 
                      className="w-full bg-[#121214] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors appearance-none"
                    >
                      <option value="" disabled>Select a service...</option>
                      {servicesData.map(s => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Target / Entity</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="e.g. example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Geographic Scope</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="e.g. Global, US, EU" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Investigation / Project Objective</label>
                    <textarea required rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors resize-none" placeholder="What are you trying to achieve?" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Desired Timeline</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="e.g. Within 2 weeks" />
                  </div>

                  <label className="flex items-start gap-3 mt-4 cursor-pointer group">
                    <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-teal-500 focus:ring-teal-500 focus:ring-offset-0" />
                    <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                      I confirm that I am authorized to request this service and that the information I provide may be lawfully used for the requested engagement.
                    </span>
                  </label>

                  <div className="pt-6 border-t border-white/5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-teal-500 text-black font-semibold rounded-lg hover:bg-teal-400 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
