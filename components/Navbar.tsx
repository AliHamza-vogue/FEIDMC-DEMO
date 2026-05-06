'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Industrial Estates', href: '/estates' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Media', href: '/media' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-brand-navy/95 backdrop-blur-md py-3 border-b border-white/10" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <span className="text-brand-navy font-bold text-xl">F</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display font-bold leading-none tracking-tight">FIEDMC</span>
              <span className="text-white/60 text-[10px] uppercase font-semibold tracking-widest">Pakistan</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-brand-gold text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-6 w-px bg-white/20 mx-2" />
            <button className="text-white/60 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link 
              href="/login"
              className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy px-5 py-2 rounded-md text-sm font-bold transition-all transform hover:scale-105"
            >
              LOGIN
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button className="text-white/60">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-gold transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-navy border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-white hover:bg-white/5 rounded-lg text-base font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy py-4 rounded-lg font-bold transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span>PORTAL LOGIN</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
