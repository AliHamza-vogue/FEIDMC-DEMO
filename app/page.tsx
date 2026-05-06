'use client';

import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { estates } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowUpRight, Shield, Zap, Workflow, Users, Eye } from 'lucide-react';

export default function HomePage() {
  const featuredEstates = estates.slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" 
            alt="FIEDMC Industrial View" 
            fill 
            className="object-cover brightness-[0.3]"
            priority
            sizes="100vw"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white pt-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                 <span className="h-0.5 w-12 bg-amber-500" />
                 <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs">Pioneering Progress</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-8 tracking-tighter">
                Redefining <span className="text-amber-500 italic">Global</span> Industrial Hubs
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mb-12 leading-relaxed">
                Unlock the potential of Pakistan&apos;s leading industrial corridor. FIEDMC provides world-class 
                Special Economic Zones with unmatched infrastructure, tax incentives, and one-window facilitation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/estates" className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-10 py-5 rounded-full font-bold transition-all transform hover:scale-105 flex items-center justify-center">
                   EXPLORE ESTATES <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/about" className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 px-10 py-5 rounded-full font-bold transition-all text-center flex items-center justify-center">
                   OUR VISION
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Land Area', value: '15,000+', unit: 'Acres' },
            { label: 'Global Investors', value: '350+', unit: 'Companies' },
            { label: 'Capital Inflow', value: '$2.5', unit: 'Billion+' },
            { label: 'Direct Jobs', value: '120,000+', unit: 'Created' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-center text-center"
            >
              <p className="text-3xl font-bold text-slate-950 mb-1">{stat.value}</p>
              <p className="text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-1">{stat.unit}</p>
              <p className="text-slate-400 text-xs font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-slate-50 text-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering Industry & Investment</h2>
            <p className="text-slate-500">
              FIEDMC&apos;s infrastructure offers specialized, fast-tracked setups designed for seamless business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "One-Window Operations",
                description: "Seamless approvals, utility connections, and licensing without administrative delays.",
                icon: <Workflow className="w-6 h-6 text-amber-500" />
              },
              {
                title: "Strategic Locations",
                description: "Proximity to major motorways and trade routes connecting to international markets.",
                icon: <Shield className="w-6 h-6 text-amber-500" />
              },
              {
                title: "Investor Portals",
                description: "Track status, access documentation, and view investment metrics in real time.",
                icon: <Users className="w-6 h-6 text-amber-500" />
              }
            ].map((service, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Estates */}
      <section className="py-24 bg-white text-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Industrial <br/><span className="text-amber-500 italic">Development Nodes</span></h2>
              <p className="text-slate-500">Each FIEDMC estate is a meticulously planned ecosystem offering specialized advantages for various industries.</p>
            </div>
            <Link href="/estates" className="text-amber-500 font-bold flex items-center hover:translate-x-2 transition-transform pb-2 border-b border-amber-500">
              VIEW ALL ESTATES <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredEstates.map((estate, i) => (
              <motion.div
                key={estate.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image 
                    src={estate.image} 
                    alt={estate.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2">{estate.totalArea}</p>
                    <h3 className="text-2xl font-bold leading-none mb-4">{estate.name}</h3>
                    <Link href={`/estates/${estate.slug}`} className="flex items-center text-xs font-bold hover:text-amber-500 transition-colors">
                      EXPLORE <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
