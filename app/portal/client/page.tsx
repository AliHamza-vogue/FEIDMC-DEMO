'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Map as MapIcon, 
  FileText, 
  CreditCard, 
  MessageSquare, 
  Bell,
  LogOut,
  ChevronRight,
  Zap,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function ClientPortal() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const router = useRouter();

  const handleSignOut = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-navy text-white hidden lg:flex flex-col border-r border-white/5">
        <div className="p-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center">
              <span className="text-brand-navy font-bold text-xl">F</span>
            </div>
            <span className="text-white font-display font-bold text-2xl tracking-tight">FIEDMC</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 pt-4">
          {[
            { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
            { id: 'plot', name: 'Plot Management', icon: MapIcon },
            { id: 'requests', name: 'Service Requests', icon: FileText },
            { id: 'billing', name: 'Financial & Billing', icon: CreditCard },
            { id: 'support', name: 'Help & Support', icon: MessageSquare },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group text-left",
                activeTab === item.id 
                  ? "bg-brand-gold text-brand-navy" 
                  : "text-white/50 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-white/5 p-4 rounded-2xl mb-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy font-bold text-xs">
                JD
              </div>
              <div className="truncate">
                <p className="text-xs font-bold text-white truncate">John Doe</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Premium Investor</p>
              </div>
            </div>
            <button 
              onClick={handleSignOut}
              className="flex items-center text-white/50 hover:text-white transition-colors text-xs w-full text-left"
            >
              <LogOut className="w-4 h-4 mr-2" /> Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto">
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="lg:hidden text-brand-navy font-bold font-display text-xl">FIEDMC</div>
          <div className="hidden lg:block text-lg font-display font-bold text-brand-navy capitalize">{activeTab}</div>

          <div className="flex items-center space-x-6">
            <button className="relative text-slate-400 hover:text-brand-navy transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden relative">
               <Image src="https://picsum.photos/seed/user/100/100" alt="Profile" fill className="object-cover" />
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {activeTab === 'dashboard' && (
            <div className="space-y-10">
              <div>
                <h1 className="text-3xl font-display font-bold text-brand-navy">Welcome Back, John</h1>
                <p className="text-slate-500">Here&apos;s an overview of your assets and pending tasks.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Current Asset</h3>
                  <p className="text-3xl font-display font-bold text-brand-navy">M3-01-A</p>
                  <p className="text-xs text-brand-gold font-bold mt-1">M-3 Industrial City</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Pending Requests</h3>
                  <p className="text-3xl font-display font-bold text-brand-navy">02</p>
                  <p className="text-xs text-yellow-600 font-bold mt-1">Under Review</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Financials</h3>
                  <p className="text-3xl font-display font-bold text-brand-navy">Paid</p>
                  <p className="text-xs text-green-600 font-bold mt-1">Balance: $0.00</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
