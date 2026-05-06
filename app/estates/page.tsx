'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronRight, MapPin, Ruler, Briefcase, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { estates } from '@/lib/data';

export default function EstatesListingPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEstates = estates.filter(estate => 
    estate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    estate.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold blur-[120px] rounded-full translate-x-1/2" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Industrial Estates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Explore our state-of-the-art industrial cities, each designed to meet 
            the specific needs of various manufacturing and service sectors.
          </motion.p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="relative max-w-xl mx-auto -mt-16 z-20">
            <div className="bg-white rounded-xl shadow-2xl p-2 flex items-center border border-slate-100">
              <Search className="w-6 h-6 text-slate-400 ml-4" />
              <input 
                type="text" 
                placeholder="Search estates..." 
                className="w-full px-4 py-3 focus:outline-none text-slate-700 bg-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-brand-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {filteredEstates.map((estate, idx) => (
              <motion.div
                key={estate.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col lg:flex-row min-h-[400px]"
              >
                <div className="lg:w-2/5 relative min-h-[300px]">
                  <Image src={estate.image} alt={estate.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-display font-bold mb-2">{estate.name}</h2>
                    <div className="flex items-center text-slate-500 mb-6 font-medium">
                      <MapPin className="w-4 h-4 mr-1 text-brand-gold" /> {estate.location}
                    </div>
                    <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed">{estate.description}</p>
                    <div className="grid grid-cols-2 gap-6">
                       <div>
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Area</p>
                         <p className="font-bold">{estate.totalArea}</p>
                       </div>
                       <div>
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Primary Focus</p>
                         <p className="font-bold">{estate.industryFocus[0]}</p>
                       </div>
                    </div>
                  </div>
                  <div className="pt-8 border-t border-slate-100 flex justify-between items-center">
                    <Link href={`/estates/${estate.slug}`} className="bg-brand-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-gold transition-colors flex items-center">
                       EXPLORE DETAILS <ArrowRight className="ml-2 w-4 h-4" />
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
