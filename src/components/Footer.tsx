import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pt-32 pb-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          
          <div className="md:col-span-5">
            <h3 className="text-xl font-bold tracking-widest text-white mb-6">AGLETRAS</h3>
            <p className="text-gray-400 font-light text-sm max-w-sm mb-8 leading-relaxed">
              Researching Information.<br />
              Engineering Intelligence.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href="mailto:hello@agletras.com" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li><Link href="/#home" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/#services" className="hover:text-emerald-400 transition-colors">Capabilities</Link></li>
              <li><Link href="/#about" className="hover:text-emerald-400 transition-colors">About</Link></li>
              <li><Link href="/research" className="hover:text-emerald-400 transition-colors">Research</Link></li>
              <li><Link href="/#contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-6">Legal</h4>
            <ul className="space-y-3 text-sm font-light text-gray-400">
              <li><Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Massive Typography */}
        <div className="border-t border-white/10 pt-16 flex flex-col items-center">
          <h2 className="text-[12vw] font-bold tracking-tighter leading-none text-white/5 select-none pointer-events-none w-full text-center">
            AGLETRAS
          </h2>
          
          <div className="w-full flex flex-col md:flex-row items-center justify-between mt-8 text-xs font-mono text-gray-600 uppercase tracking-widest">
            <p>© 2026 Agletras.</p>
            <p className="mt-4 md:mt-0">Intelligence From Open Information.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
