'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LogIn, Shield, Users, Mail, Lock, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy login logic for demo
    if (email.includes('admin')) {
      router.push('/portal/stakeholder');
    } else {
      router.push('/portal/client');
    }
  };

  return (
    <main className="min-h-screen bg-brand-navy flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <Link href="/" className="flex items-center space-x-2 mb-12">
            <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-brand-navy font-bold text-2xl">F</span>
            </div>
            <span className="text-white font-display font-bold text-3xl tracking-tight">FIEDMC</span>
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white w-full max-w-md p-10 rounded-[2.5rem] shadow-2xl"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl font-display font-bold text-brand-navy mb-2">Investor Portal</h1>
            <p className="text-slate-500 text-sm">Access your plot management and industrial documents.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 pl-12 pr-6 py-4 rounded-xl text-sm focus:outline-none focus:border-brand-gold transition-colors" 
                  placeholder="investor@fiedmc.pk" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 pl-12 pr-6 py-4 rounded-xl text-sm focus:outline-none focus:border-brand-gold transition-colors" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-2 text-xs">
               <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-brand-gold focus:ring-brand-gold" />
                  <span className="text-slate-500">Remember me</span>
               </label>
               <Link href="#" className="font-bold text-brand-gold hover:underline">Forgot Password?</Link>
            </div>

            <button type="submit" className="w-full bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy py-5 rounded-2xl font-bold transition-all flex items-center justify-center space-x-2">
              <span>SIGN IN</span>
              <LogIn className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-slate-50 grid grid-cols-2 gap-4">
             <div className="flex flex-col items-center space-y-2 text-center p-4 bg-slate-50 rounded-2xl">
               <Shield className="w-5 h-5 text-slate-400" />
               <p className="text-[10px] font-bold text-slate-400 uppercase">Secured by Portal-X</p>
             </div>
             <div className="flex flex-col items-center space-y-2 text-center p-4 bg-slate-50 rounded-2xl">
               <Users className="w-5 h-5 text-slate-400" />
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Active Investors: 2,400+</p>
             </div>
          </div>
        </motion.div>
        
        <p className="mt-8 text-white/40 text-xs">
          Problems logging in? Contact <Link href="/contact" className="text-brand-gold font-bold">IT Support</Link>
        </p>
      </div>
    </main>
  );
}

import Link from 'next/link';
