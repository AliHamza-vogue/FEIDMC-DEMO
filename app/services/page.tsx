'use client';

import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Droplet, 
  Zap, 
  Map as MapIcon, 
  Construction, 
  ArrowRight,
  ChevronRight,
  FileSearch,
  Building2,
  Users2
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

const services = [
  {
    title: 'NOC for Building Plan',
    description: 'Digital submission and expedited approval for industrial and commercial structures.',
    icon: Building2,
    process: '7-10 Business Days'
  },
  {
    title: 'Utility Connections',
    description: 'Fast-track application for power, water, and gas connections through our integrated system.',
    icon: Zap,
    process: 'In Sync with Allotment'
  },
  {
    title: 'Plot Transfer',
    description: 'Secure and transparent process for ownership transfers and lease updates.',
    icon: MapIcon,
    process: 'Verified in 48 Hours'
  },
  {
    title: 'Construction Services',
    description: 'Supervision and technical guidance for compliance with estate bylaws.',
    icon: Construction,
    process: 'Ongoing Support'
  },
  {
    title: 'DMS & Digital Vault',
    description: 'Access all your allotment documents, maps, and NOCs in a secure digital environment.',
    icon: ShieldCheck,
    process: 'Instant Access'
  },
  {
    title: 'Query Management',
    description: 'Dedicated support system for technical queries and administrative assistance.',
    icon: Users2,
    process: '24/7 Portal Support'
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-navy mb-6">One-Window Services</h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              We&apos;ve digitized the entire service ecosystem. From plot allotment to building 
              approvals and utility connections, everything is managed through a single 
              digital window.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-navy group-hover:text-white transition-all">
                    <service.icon className="w-7 h-7 text-brand-navy group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-navy mb-4">{service.title}</h3>
                  <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SLA Time</span>
                      <span className="text-xs font-bold text-brand-gold">{service.process}</span>
                    </div>
                    <Link href="/login" className="text-brand-navy hover:text-brand-gold transition-colors">
                      <ChevronRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Solution Section */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Integrated with ERP/CRM</h2>
              <p className="text-white/60 mb-10 leading-relaxed">
                The FIEDMC digital portal is directly integrated with our core backend systems. 
                Any request submitted through the portal is immediately logged in our CRM and routed 
                to relevant departments within the ERP workflow.
              </p>
              <ul className="space-y-4">
                {[
                  'Real-time tracking of request status',
                  'Automated email and SMS notifications',
                  'Direct communication with case officers',
                  'Unified billing and invoice management'
                ].map(item => (
                  <li key={item} className="flex items-center space-x-3 text-sm">
                    <ShieldCheck className="w-5 h-5 text-brand-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
               <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
                 <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center space-x-4">
                     <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center">
                       <FileSearch className="w-6 h-6 text-brand-navy" />
                     </div>
                     <div>
                       <h4 className="font-display font-bold">Service Tracking</h4>
                       <p className="text-xs text-white/40 uppercase tracking-widest">Digital Audit Trail</p>
                     </div>
                   </div>
                   <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-[10px] font-bold">SYSTEM ONLINE</div>
                 </div>
                 
                 <div className="space-y-4">
                   {[
                     { label: 'Application ID', val: '#FD-2024-0012' },
                     { label: 'Service Type', val: 'Building Plan NOC' },
                     { label: 'Current Status', val: 'Under Departmental Review' },
                     { label: 'Assigned Dept', val: 'Directorate of Engineering' },
                   ].map((row, i) => (
                     <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                       <span className="text-xs text-white/50">{row.label}</span>
                       <span className="text-sm font-bold text-white/90">{row.val}</span>
                     </div>
                   ))}
                 </div>
               </div>
               {/* Floating Glow */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
