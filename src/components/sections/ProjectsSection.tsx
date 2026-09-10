"use client";

import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "WebCapture",
    type: "OSINT Automation",
    description: "An automation-oriented platform for capturing, organizing, and analyzing publicly available web intelligence.",
    tags: ["OSINT", "Automation", "Python", "Cybersecurity"]
  },
  {
    title: "Intelligence Automation Platform",
    type: "Research Infrastructure",
    description: "A modular system designed to automate repetitive intelligence collection and information-processing workflows.",
    tags: ["Automation", "OSINT", "AI", "Research"]
  },
  {
    title: "Security Research",
    type: "Cybersecurity Research",
    description: "Experimental research exploring security automation, reconnaissance, information discovery, and defensive intelligence.",
    tags: ["Cybersecurity", "Research", "Automation"]
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Selected Projects</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <FolderGit2 size={24} className="text-gray-500 group-hover:text-emerald-400 transition-colors" />
                <span className="text-xs font-mono text-gray-500 uppercase">{project.type}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-[10px] font-mono text-gray-400 bg-white/5 rounded border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-4 border-t border-white/5">
                <button className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors flex items-center">
                  View Project <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
