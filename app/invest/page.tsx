'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  FileText, 
  Zap, 
  Globe2,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { cn } from '@/lib/utils';

const processSteps = [
  {
    id: 1,
    title: 'Inquiry & EOI',
    description: 'Submit an online inquiry or Expression of Interest (EOI) through our digital portal.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Application',
    description: 'Complete the official application form with detailed business proposal and financials.',
    icon: FileText,
  },
  {
    id: 3,
    title: 'Due Diligence',
    description: 'Our committee reviews the application for technical and financial feasibility.',
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: 'Allotment',
    description: 'Upon approval and payment, possession of the plot is handed over to the investor.',
    icon: CheckCircle2,
  },
];

const benefits = [
  {
    title: 'Strategic Location',
    desc: 'Pakistan\'s industrial heartland with direct motorway connectivity.',
    icon: Globe2,
  },
  {
    title: 'Tax Incentives',
    desc: '10-year income tax holiday and customs duty exemptions.',
    icon: Zap,
  },
  {
    title: 'Skilled Labor',
    desc: 'Access to a vast pool of technical and vocational labor in Faisalabad.',
    icon: TrendingUp,
  }
];

export default function InvestPage() {
  const [plotSize, setPlotSize] = useState(5);
  const [industryType, setIndustryType] = useState('textile');
  
  const calculateCost = () => {
    const basePrice = industryType === 'textile' ? 12.5 : 15.0;
    const landCost = plotSize * basePrice;
    const developmentCharges = plotSize * 2.5;
    return {
      land: landCost.toFixed(2),
      dev: developmentCharges.toFixed(2),
      total: (landCost + developmentCharges).toFixed(2),
    };
  };

  const costs = calculateCost();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/industrial_sky/1920/1080')] bg-cover opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Invest in <span className="text-brand-gold italic">Pakistan</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Experience the future of industrial development. FIEDMC offers a secure, 
            progressive, and highly profitable environment for global manufacturers.
          </motion.p>
        </div>
      </section>

      {/* Why FIEDMC Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-brand-navy mb-8">Elaborated Benefits</h2>
              <div className="space-y-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                      <benefit.icon className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-brand-navy mb-2">{benefit.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-[12px] border-white">
                <Image 
                  src="https://picsum.photos/seed/worker/800/1000"
                  alt="FIEDMC Success"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold rounded-[3rem] -z-0 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-brand-navy mb-4">Our Simple 4-Step Process</h2>
            <p className="text-slate-500">From initial inquiry to plot possession, we ensure a transparent and efficient journey.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={step.id} className="relative group">
                <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm relative z-10 h-full hover:border-brand-gold transition-colors">
                  <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors">
                    <step.icon className="w-6 h-6 text-white group-hover:text-brand-navy" />
                  </div>
                  <span className="text-slate-300 font-display font-bold text-4xl block mb-2">0{step.id}</span>
                  <h3 className="text-xl font-display font-bold text-brand-navy mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-slate-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            {/* Input Side */}
            <div className="p-12 md:p-16 lg:w-1/2 text-white border-r border-white/10">
              <div className="flex items-center space-x-3 mb-8">
                <Calculator className="w-8 h-8 text-brand-gold" />
                <h2 className="text-3xl font-display font-bold">Cost Calculator</h2>
              </div>
              <p className="text-white/60 mb-10">Get an estimation for your land and development charges based on current rates.</p>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">Desired Plot Size (Acres)</label>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    step="1"
                    value={plotSize}
                    onChange={(e) => setPlotSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                  />
                  <div className="flex justify-between mt-2 text-sm font-bold">
                    <span>1 Acre</span>
                    <span className="text-brand-gold text-lg">{plotSize} Acres</span>
                    <span>100 Acres</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">Industry Sector</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['textile', 'engineering', 'chemical', 'food'].map((sector) => (
                      <button
                        key={sector}
                        onClick={() => setIndustryType(sector)}
                        className={cn(
                          "py-4 rounded-xl border font-bold text-sm uppercase tracking-wide transition-all",
                          industryType === sector 
                            ? "bg-brand-gold text-brand-navy border-brand-gold" 
                            : "border-white/10 text-white/60 hover:border-white/30"
                        )}
                      >
                        {sector}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results Side */}
            <div className="p-12 md:p-16 lg:w-1/2 bg-white/5 backdrop-blur-sm self-stretch flex flex-col justify-center text-white">
              <div className="space-y-10">
                <div className="flex justify-between items-end border-b border-white/10 pb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Land Allotment Cost</h4>
                    <p className="text-sm text-white/30">Estimated base price for {industryType} sector</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-display font-bold text-white">PKR {costs.land}M</span>
                  </div>
                </div>

                <div className="flex justify-between items-end border-b border-white/10 pb-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Development Charges</h4>
                    <p className="text-sm text-white/30">Infrastructure & Utility connections</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-display font-bold text-white">PKR {costs.dev}M</span>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="bg-brand-gold/10 p-8 rounded-2xl border border-brand-gold/20">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-1 text-center">Total Estimated Investment</h4>
                    <p className="text-5xl md:text-6xl font-display font-bold text-brand-gold text-center">PKR {costs.total}M</p>
                  </div>
                </div>
                
                <p className="text-xs text-white/30 text-center italic">* These are estimated costs. Final pricing depends on specific plot location and current policy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
