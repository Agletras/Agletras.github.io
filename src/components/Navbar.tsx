"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-widest text-white">
          AGLETRAS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm tracking-wide text-gray-400 hover:text-emerald-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="/#contact"
            className="px-6 py-2.5 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0)] hover:shadow-[0_0_15px_rgba(52,211,153,0.15)]"
          >
            Start a Conversation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block mt-4 px-6 py-3 text-center font-medium text-white bg-white/10 rounded-lg"
            >
              Start a Conversation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
