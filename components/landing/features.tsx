"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <section id="features" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Built for speed. Designed for scale.</h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">Everything you need to manage inventory, without the enterprise bloat.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        
        {/* Card 1: Real-time Sync (Large) */}
        <div className="col-span-1 md:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl bg-card/40 border border-white/10 backdrop-blur-md transition-all hover:border-emerald-500/30">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10 p-10 h-full flex flex-col">
            <div className="mb-auto">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Real-time Synchronization</h3>
              <p className="text-text-secondary text-lg max-w-md">
                Changes propagate instantly across all connected devices. No refresh needed. Whether you're in the warehouse or the boardroom, data is always live.
              </p>
            </div>

            {/* Visual: Code/Data Stream */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-[#0F0F12] rounded-tl-3xl border-t border-l border-white/5 overflow-hidden translate-y-8 translate-x-8 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 shadow-2xl">
              <div className="p-4 space-y-2 opacity-50 font-mono text-xs text-emerald-400/80">
                 <div className="flex justify-between"><span className="text-blue-400">SYNC_START</span> <span>10:42:01</span></div>
                 <div className="text-white/40">Processing batch #2910...</div>
                 <div className="flex gap-2">
                    <span className="text-purple-400">UPDATED</span>
                    <span>SKU-9921</span>
                    <span className="text-emerald-500">SUCCESS</span>
                 </div>
                 <div className="flex gap-2">
                    <span className="text-purple-400">UPDATED</span>
                    <span>SKU-4420</span>
                    <span className="text-emerald-500">SUCCESS</span>
                 </div>
                 <div className="h-px w-full bg-white/10 my-2"></div>
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-white">Live Socket Connection</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Predictive Analytics */}
        <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-3xl bg-card/40 border border-white/10 backdrop-blur-md transition-all hover:border-purple-500/30 p-8">
           <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           
           <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
                <p className="text-sm text-text-secondary">AI-driven forecasts to prevent stockouts.</p>
              </div>
              
              {/* Visual: Graph */}
              <div className="h-24 w-full flex items-end gap-1 mt-4">
                 {[30, 45, 35, 60, 50, 75, 65, 90, 80, 100].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-purple-500/20 rounded-t-sm group-hover:bg-purple-500 transition-colors duration-300"
                      style={{ 
                        height: `${h}%`,
                        transitionDelay: `${i * 50}ms`
                      }} 
                    ></div>
                 ))}
              </div>
           </div>
        </div>

        {/* Card 3: Role-Based Access */}
        <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-3xl bg-card/40 border border-white/10 backdrop-blur-md transition-all hover:border-blue-500/30 p-8">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

           <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Global Security</h3>
                <p className="text-sm text-text-secondary">Granular permissions and audit logs.</p>
              </div>

              {/* Visual: Lock / Shield */}
              <div className="flex items-center justify-center mt-4">
                 <div className="relative w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div className="absolute inset-0 border border-blue-500/30 rounded-full scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
