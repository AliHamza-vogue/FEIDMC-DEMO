'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Investment Inquiry',
    message: '',
  });

  const subjects = [
    'Investment Inquiry',
    'Plot Allotment Status',
    'Industrial Services Request',
    'Media & Press',
    'Career Inquiry',
    'Other',
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-40 pb-24 bg-slate-50 text-brand-navy">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h1 className="text-5xl font-display font-bold mb-6 text-brand-navy">How can we <span className="text-brand-gold italic">facilitate</span> you?</h1>
              <p className="text-slate-500 text-lg mb-12">Whether you are an international investor seeking SEZ benefits or a local industry expanding its footprint, our team is here to assist.</p>

              <div className="space-y-8">
                {[
                  { icon: Phone, title: 'Call Us', value: '+92 41 890 0000', label: 'Mon-Fri, 9am - 5pm' },
                  { icon: Mail, title: 'Email Info', value: 'invest@fiedmc.com.pk', label: 'Global Investment Desk' },
                  { icon: MapPin, title: 'Visit Office', value: 'FIEDMC Head Office, M-3 Industrial City, Faisalabad', label: 'Headquarters' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6 group">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-brand-navy font-medium">{item.value}</p>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-xl text-sm focus:outline-none focus:border-brand-gold transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-xl text-sm focus:outline-none focus:border-brand-gold transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Department / Subject</label>
                  <select className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-xl text-sm focus:outline-none focus:border-brand-gold transition-colors">
                    {subjects.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-xl text-sm focus:outline-none focus:border-brand-gold transition-colors" placeholder="How can we help you?" />
                </div>

                <button className="w-full bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy py-5 rounded-2xl font-bold transition-all flex items-center justify-center space-x-2">
                  <span>SEND MESSAGE</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
