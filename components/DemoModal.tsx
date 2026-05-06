'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, X, ExternalLink } from 'lucide-react';

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the modal in this session
    const hasSeenModal = sessionStorage.getItem('demo_modal_shown');
    if (!hasSeenModal) {
      // Small delay to let the page load nicely
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('demo_modal_shown', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-slate-100 flex flex-col items-center text-center z-50"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon Banner */}
            <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 text-amber-500">
              <AlertCircle className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              Platform Demo Preview
            </h3>
            
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto mb-8">
              Welcome to the FIEDMC digital platform demonstration. This interactive preview is designed for evaluation and stakeholder review purposes.
            </p>

            {/* Features summary for presentability */}
            <div className="w-full bg-slate-50 rounded-2xl p-4 mb-8 text-left border border-slate-100">
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>One-Window Operations & Plot Allocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Secure Customer / Stakeholder Portals</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Real-time Financial Integration Features</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-3">
              <button
                onClick={handleClose}
                className="flex-1 bg-slate-950 hover:bg-slate-900 text-white text-sm font-semibold py-3.5 rounded-xl transition-all"
              >
                Access Demo
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
