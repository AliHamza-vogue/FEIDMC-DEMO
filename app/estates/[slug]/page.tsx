'use client';

import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { estates } from '@/lib/data';
import Image from 'next/image';
import { 
  MapPin, 
  Ruler, 
  TrendingUp, 
  ShieldCheck, 
  ArrowLeft, 
  CheckCircle2, 
  Building2, 
  Zap, 
  Droplets,
  HardHat
} from 'lucide-react';
import Link from 'next/link';

export default function EstateDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const estate = estates.find(e => e.slug === slug);

  if (!estate) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-brand-navy mb-4">Estate Not Found</h1>
          <Link href="/estates" className="text-brand-gold font-bold flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Estates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-brand-navy">
      <Navbar />

      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={estate.image} alt={estate.name} fill className="object-cover" priority referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Link href="/estates" className="inline-flex items-center text-brand-gold font-bold text-sm mb-8 hover:-translate-x-2 transition-transform">
              <ArrowLeft className="w-4 h-4 mr-2" /> BACK TO ESTATES
            </Link>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">{estate.name}</h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">{estate.tagline}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Overview</h2>
                <p className="text-slate-600 text-lg leading-relaxed">{estate.description}</p>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold mb-8">World-Class Infrastructure</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {estate.infrastructure.map((inf, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-brand-navy hover:text-white transition-all cursor-default">
                       <h3 className="font-display font-bold text-xl mb-3 flex items-center">
                         <span className="w-8 h-8 rounded-lg bg-brand-gold/10 group-hover:bg-brand-gold/20 flex items-center justify-center mr-3">
                           <HardHat className="w-4 h-4 text-brand-gold" />
                         </span>
                         {inf.title}
                       </h3>
                       <p className="text-slate-500 group-hover:text-white/60 text-sm leading-relaxed">{inf.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold mb-8">Investment Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {estate.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-3 p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="font-medium text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="p-8 rounded-3xl bg-brand-navy text-white relative overflow-hidden">
                   <div className="relative z-10">
                     <h3 className="text-lg font-display font-bold text-brand-gold mb-8 uppercase tracking-widest text-xs">Vital Statistics</h3>
                     <div className="space-y-8">
                       {estate.stats.map((stat, i) => (
                         <div key={i}>
                           <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mb-1">{stat.label}</p>
                           <p className="text-2xl font-display font-bold">{stat.value}</p>
                         </div>
                       ))}
                       <div className="pt-4">
                         <p className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mb-3">Location</p>
                         <p className="text-sm leading-relaxed font-medium">{estate.location}</p>
                       </div>
                     </div>
                   </div>
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="p-8 border border-brand-navy rounded-3xl text-center space-y-6">
                   <h3 className="font-display font-bold text-xl">Interested in Investing?</h3>
                   <p className="text-slate-500 text-sm">Download the investor kit or request a meeting with our facilitation desk.</p>
                   <Link href="/contact" className="block w-full py-4 bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy rounded-xl font-bold transition-all">
                      REQUEST CALLBACK
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
