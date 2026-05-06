'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open on every single load/reload without saving state in storage
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
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
            className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 flex flex-col items-center text-center z-50"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon Banner */}
            <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-5 text-amber-500">
              <AlertCircle className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              Presentation Demo Preview
            </h3>
            
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto mb-6">
              Welcome to the FIEDMC digital platform demonstration. This interactive preview is designed solely for evaluation and presentation review purposes.
            </p>

            {/* Disclaimer for data usage & availability */}
            <div className="w-full bg-amber-50 text-amber-900/90 rounded-2xl p-4 mb-8 text-left border border-amber-500/20">
              <p className="text-xs font-medium leading-relaxed">
                <strong className="block mb-1 text-amber-600 uppercase tracking-wider text-[10px]">Notice of Presentation</strong>
                This system contains demonstration data and layouts created for viewing purposes only. This demo will remain accessible for a period of 15 days, after which it will be taken down.
              </p>
            </div>

            <div className="flex w-full">
              <button
                onClick={handleClose}
                className="flex-1 bg-slate-950 hover:bg-slate-900 text-white text-sm font-semibold py-3.5 rounded-xl transition-all shadow-lg"
              >
                Proceed to Demo
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
