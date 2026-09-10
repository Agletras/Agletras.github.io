"use client";

import { motion } from "framer-motion";
import { Activity, Users, Link as LinkIcon, AlertTriangle } from "lucide-react";

export function DashboardSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Intelligence Dashboard Concept</h2>
            <p className="text-gray-400">Information correlation and entity resolution interface.</p>
          </div>
          <div className="inline-flex px-3 py-1 bg-white/10 border border-white/20 rounded text-xs font-mono text-gray-300">
            DEMO / CONCEPT
          </div>
        </div>

        <div className="glass-panel p-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="bg-[#0f1115] rounded-xl overflow-hidden flex flex-col">
            
            {/* Dashboard Header */}
            <div className="flex items-center px-6 py-4 border-b border-white/5 bg-black/20">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto text-xs font-mono text-gray-500 flex items-center gap-2">
                <Activity size={14} /> SYSTEM: OFFLINE
              </div>
            </div>

            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Stats Column */}
              <div className="lg:col-span-1 space-y-4">
                <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Intelligence Overview</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Sources", value: "248", icon: Activity, color: "text-teal-400" },
                    { label: "Entities", value: "84", icon: Users, color: "text-emerald-400" },
                    { label: "Relationships", value: "136", icon: LinkIcon, color: "text-purple-400" },
                    { label: "Indicators", value: "42", icon: AlertTriangle, color: "text-amber-400" },
                  ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5">
                        <Icon size={16} className={`mb-2 ${stat.color}`} />
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Graph Column */}
              <div className="lg:col-span-2 bg-black/40 rounded-xl border border-white/5 p-6 relative overflow-hidden flex items-center justify-center min-h-[300px]">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-grid-pattern opacity-50" />
                
                <h3 className="absolute top-4 left-6 text-xs font-mono text-gray-500 uppercase tracking-widest z-10">Entity Graph</h3>
                
                {/* Static Graph Mockup using simple HTML/CSS structure */}
                <div className="relative z-10 w-full max-w-sm font-mono text-sm text-gray-300">
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/50 flex items-center justify-center text-teal-400">C</div>
                      <span className="font-bold text-white">Company A</span>
                    </div>
                    
                    <div className="flex flex-col ml-4 pl-4 border-l border-gray-700 space-y-4 py-2">
                      <div className="flex items-center gap-4 relative">
                        <div className="absolute -left-4 top-1/2 w-4 h-px bg-gray-700" />
                        <div className="px-2 py-1 bg-white/5 rounded text-xs border border-white/10 text-gray-400">Domain</div>
                        <span className="text-xs">example-corp.com</span>
                      </div>
                      
                      <div className="flex items-center gap-4 relative">
                        <div className="absolute -left-4 top-1/2 w-4 h-px bg-gray-700" />
                        <div className="px-2 py-1 bg-white/5 rounded text-xs border border-white/10 text-gray-400">Employee</div>
                        <span className="text-xs">J. Doe (Exec)</span>
                      </div>
                      
                      <div className="flex items-center gap-4 relative">
                        <div className="absolute -left-4 top-1/2 w-4 h-px bg-gray-700" />
                        <div className="px-2 py-1 bg-white/5 rounded text-xs border border-white/10 text-gray-400">Infrastructure</div>
                        <span className="text-xs text-teal-400">192.168.1.100</span>
                      </div>
                      
                      <div className="flex items-center gap-4 relative">
                        <div className="absolute -left-4 top-1/2 w-4 h-px bg-gray-700" />
                        <div className="px-2 py-1 bg-white/5 rounded text-xs border border-white/10 text-gray-400">Social Profile</div>
                        <span className="text-xs">@companyA_official</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>

            </div>
          </div>
        </div>
        
        <p className="text-center text-xs text-gray-600 mt-6 max-w-2xl mx-auto font-mono">
          * This is only a visual demonstration and must not imply that the website is performing live intelligence collection.
        </p>
      </div>
    </section>
  );
}
