'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldCheck, Target, Globe, TrendingUp, Award } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { title: 'Transparency', description: 'Maintaining clear and ethical operations in all our industrial allotments and services.', icon: ShieldCheck },
    { title: 'Innovation', description: 'Pioneering smart industrial cities and digital-first governance models.', icon: Target },
    { title: 'Economic Growth', description: 'Driving national prosperity by creating high-value jobs and export opportunities.', icon: TrendingUp },
    { title: 'Sustainability', description: 'Committed to eco-friendly industrialization and green infrastructure.', icon: Globe },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-32 pb-20 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://picsum.photos/seed/about_fiedmc/1920/1080" alt="About FIEDMC" fill className="object-cover opacity-20" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/80 to-brand-navy" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-display font-bold text-white mb-6"> Our Legacy & <span className="text-brand-gold italic">Vision</span></motion.h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Faisalabad Industrial Estate Development and Management Company (FIEDMC) is the apex body 
            redefining Pakistan&apos;s industrial prowess through state-of-the-art Special Economic Zones.
          </p>
        </div>
      </section>

      <section className="py-24 text-brand-navy">
        <div className="container mx-auto px-4 px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">The Pioneer of Modern Industrialization</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>Established in 2004, FIEDMC was born from a vision to create a world-class industrial hub in the heart of Pakistan.</p>
                <p>Today, we manage over 15,000 acres across multiple flagship projects, hosting hundreds of international giants.</p>
              </div>
            </div>
            <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl">
              <Image src="https://picsum.photos/seed/hist/800/600" alt="History" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 text-brand-navy">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <val.icon className="w-10 h-10 text-brand-gold mb-6" />
                <h3 className="text-xl font-display font-bold mb-2">{val.title}</h3>
                <p className="text-slate-500 text-sm">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
