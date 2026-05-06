'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Users2, 
  FilePieChart, 
  Globe2, 
  Briefcase,
  Bell,
  LogOut,
  ChevronDown,
  ArrowUpRight,
  Landmark
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip
} from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
];

export default function StakeholderPortal() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const router = useRouter();

  const handleSignOut = () => router.push('/');

  return (
    <div className="min-h-screen bg-slate-900 text-white flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-950 border-r border-white/5 hidden lg:flex flex-col">
        <div className="p-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center">
              <span className="text-brand-navy font-bold text-xl">F</span>
            </div>
            <span className="text-white font-display font-bold text-2xl tracking-tight">FIEDMC</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 pt-8">
          {[
            { id: 'dashboard', name: 'Overview', icon: LayoutDashboard },
            { id: 'land', name: 'Land & Ops', icon: Globe2 },
            { id: 'invest', name: 'Investment Inflow', icon: TrendingUp },
            { id: 'reports', name: 'Strategic Reports', icon: FilePieChart },
            { id: 'stakeholders', name: 'Stakeholders', icon: Users2 },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group text-left",
                activeTab === item.id 
                  ? "bg-white/10 text-brand-gold border border-brand-gold/20" 
                  : "text-white/40 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-6">
          <button 
            onClick={handleSignOut}
            className="w-full text-left p-4 bg-brand-gold text-brand-navy rounded-2xl flex items-center justify-between cursor-pointer"
          >
             <div className="flex items-center space-x-3 truncate">
               <div className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold text-xs">
                 AD
               </div>
               <span className="font-bold text-sm">Admin</span>
             </div>
             <LogOut className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto">
        <header className="h-20 border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-30 bg-slate-900/80 backdrop-blur-md">
          <h1 className="text-xl font-display font-bold">Executive Dashboard</h1>
          <div className="flex items-center space-x-6">
             <button className="relative text-white/40 hover:text-white transition-colors">
               <Bell className="w-5 h-5" />
               <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
             </button>
             <div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden relative">
               <Image src="https://picsum.photos/seed/admin/100/100" alt="Admin" fill className="object-cover" />
             </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Total Investment', value: '$2.5B', icon: Landmark, color: 'text-brand-gold' },
              { label: 'Plots Allotted', value: '1,452', icon: Briefcase, color: 'text-blue-400' },
              { label: 'Jobs Created', value: '120k', icon: Users2, color: 'text-green-400' },
              { label: 'Operational Hubs', value: '08', icon: Globe2, color: 'text-purple-400' },
            ].map((kpi, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-3xl">
                 <div className="flex justify-between items-start mb-4">
                    <div className={cn("p-3 rounded-2xl bg-white/5", kpi.color)}>
                       <kpi.icon className="w-6 h-6" />
                    </div>
                 </div>
                 <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">{kpi.label}</h4>
                 <p className="text-3xl font-display font-bold">{kpi.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/5 p-8 rounded-[2rem] h-[400px]">
             <h3 className="font-display font-bold text-lg mb-8">Investment Inflow</h3>
             <ResponsiveContainer width="100%" height="80%">
                <AreaChart data={data}>
                  <Area type="monotone" dataKey="value" stroke="#e1a94e" fill="#e1a94e10" strokeWidth={3} />
                </AreaChart>
             </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
