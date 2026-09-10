"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { servicesData, ServiceDetails } from "@/data/services";
import { ServiceModal } from "@/components/ServiceModal";
import { RequestServiceModal } from "@/components/RequestServiceModal";

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);
  const [requestServiceId, setRequestServiceId] = useState<string | null>(null);

  const handleOpenService = (service: ServiceDetails) => {
    setSelectedService(service);
  };

  const handleCloseService = () => {
    setSelectedService(null);
  };

  const handleOpenRequest = (serviceId: string) => {
    setSelectedService(null); // close detail modal
    setRequestServiceId(serviceId);
  };

  const handleCloseRequest = () => {
    setRequestServiceId(null);
  };

  return (
    <section id="services" className="py-32 relative bg-white/[0.01] border-y border-white/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-emerald-500 mb-4 block">[ 01 ]</span>
            <h2 className="text-title-1 font-bold">Capabilities</h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm font-light">
            Specialized solutions combining intelligence gathering with defensive cybersecurity practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const idxStr = `0${index + 1}`;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => handleOpenService(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenService(service);
                  }
                }}
                className="group flex flex-col relative overflow-hidden cursor-pointer focus:outline-none"
              >
                {/* Architectural Line */}
                <div className="w-full h-px bg-white/10 mb-6 group-hover:bg-emerald-500/50 transition-colors duration-500" />
                
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 flex items-center justify-center text-gray-400 group-hover:text-emerald-400 transition-colors duration-500 bg-black/50 border border-white/5 rounded-sm group-hover:border-emerald-500/30">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs text-gray-600 group-hover:text-emerald-500/50 transition-colors">
                    [{idxStr}]
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-100 group-hover:text-white tracking-tight">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-light">
                  {service.description}
                </p>
                
                <div className="mt-auto flex items-center text-xs tracking-widest uppercase font-semibold text-gray-500 group-hover:text-emerald-400 transition-colors duration-300">
                  Explore <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      <ServiceModal 
        service={selectedService} 
        isOpen={!!selectedService} 
        onClose={handleCloseService} 
        onRequestClick={handleOpenRequest}
      />
      
      <RequestServiceModal 
        serviceId={requestServiceId} 
        isOpen={!!requestServiceId} 
        onClose={handleCloseRequest} 
      />
    </section>
  );
}
