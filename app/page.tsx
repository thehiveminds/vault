"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax Background
    gsap.to(".bg-orb", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Scroll Animations for Features
    gsap.utils.toArray(".feature-card").forEach((card: any) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    });

  }, { scope: containerRef });

  return (
    <>
      <Navbar />
      <div ref={containerRef} className="flex min-h-screen flex-col bg-main text-text-primary selection:bg-primary/30 selection:text-white overflow-hidden font-sans">
        
        {/* Unified Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="bg-orb absolute top-[-10%] left-[-10%] w-[1200px] h-[1200px] bg-primary/10 rounded-full blur-[160px] opacity-40 mix-blend-screen"></div>
          <div className="bg-orb absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-accent-purple/5 rounded-full blur-[140px] opacity-30 mix-blend-screen"></div>
          
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
          
          <div className="absolute inset-0 bg-radial-vignette opacity-40"></div>
        </div>
        
        <Hero />

        {/* Features Grid (Bento) - Refined with Tech Accents */}
        <section id="features" className="py-40 px-6 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">Core Infrastructure</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">Built for speed. <br/>Designed for scale.</h2>
            <p className="text-text-secondary text-xl max-w-2xl mx-auto font-medium">Precision engineering for modern inventory management. Zero bloat, maximum efficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card col-span-1 md:col-span-2 row-span-2 p-12 rounded-[40px] bg-card/40 border border-white/10 backdrop-blur-2xl relative overflow-hidden group">
              {/* Tech Accents - Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-[40px]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-[40px]"></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 max-w-md space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path></svg>
                </div>
                <h3 className="text-4xl font-black tracking-tight text-white leading-tight">Zero-Lag <br/>Live Sync.</h3>
                <p className="text-text-secondary text-lg leading-relaxed font-medium">Changes propagate across your global network in under 100ms. No refresh. No delay. Just pure, real-time control over your entire inventory state.</p>
              </div>

              <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-[60px] border-t-2 border-l-2 border-white/5 translate-y-12 translate-x-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-1000 ease-expo-out">
                {/* Mock Live Feed UI */}
                <div className="p-10 space-y-6">
                    <div className="flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Incoming Transmission</span>
                    </div>
                    <div className="space-y-4">
                      <div className="h-6 w-full bg-white/5 rounded-xl border border-white/5"></div>
                      <div className="h-6 w-[85%] bg-white/5 rounded-xl border border-white/5"></div>
                      <div className="h-6 w-[60%] bg-white/5 rounded-xl border border-white/5"></div>
                    </div>
                </div>
              </div>
            </div>

            <div className="feature-card p-10 rounded-[32px] bg-card/40 border border-white/10 backdrop-blur-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:translate-y-[-4px]">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-8 border border-purple-500/20">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"></path></svg>
              </div>
              <h3 className="text-2xl font-black mb-3">Predictive AI.</h3>
              <p className="text-text-secondary font-medium leading-relaxed">Advanced forecasting neural engine that predicts stockouts before they disrupt your chain.</p>
            </div>

            <div className="feature-card p-10 rounded-[32px] bg-card/40 border border-white/10 backdrop-blur-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:translate-y-[-4px]">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-8 border border-emerald-500/20">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="text-2xl font-black mb-3">Military-Grade RBAC.</h3>
              <p className="text-text-secondary font-medium leading-relaxed">Vault uses zero-trust architecture to ensure only authorized staff touch sensitive inventory metrics.</p>
            </div>
          </div>
        </section>

        {/* Comparison Section - High Precision Design */}
          <section id="comparison" className="py-32 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-24">
               <h2 className="text-4xl md:text-5xl font-black tracking-tighter">The Modern <span className="italic">Advantage.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="p-10 border border-white/5 opacity-50 grayscale hover:grayscale-0 transition-all">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-text-secondary mb-10">Legacy ERP</h3>
                <ul className="space-y-6">
                  {["Clunky UX", "90-day Setup", "Hidden Fees", "Analog Data"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-text-muted">
                        <span className="w-4 h-px bg-red-500/40"></span>
                        {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-12 md:scale-110 relative z-10 bg-card/80 backdrop-blur-3xl border-2 border-primary/40 rounded-[40px] shadow-[0_0_100px_rgba(34,197,94,0.15)]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.3em] shadow-xl">Elite Tier</div>
                <h3 className="text-xl font-black tracking-tighter text-white mb-10 flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(34,197,94,1)]"></div>
                   VAULT COMMAND
                </h3>
                <ul className="space-y-6">
                  {["Sub-second Sync", "15-minute Boarding", "Flat Transparent Pricing", "Cyber AI Engine"].map(item => (
                    <li key={item} className="flex items-center gap-4 text-white font-black text-sm">
                        <svg className="text-primary w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4"><path d="M5 13l4 4L19 7"></path></svg>
                        {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-12">
                   <Link href="/register">
                      <Button className="w-full h-14 rounded-2xl bg-primary text-black font-black uppercase tracking-widest text-[10px] hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)]">Join the Fleet</Button>
                   </Link>
                </div>
              </div>

              <div className="p-10 border border-white/5 opacity-50 grayscale hover:grayscale-0 transition-all text-right md:text-left">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-text-secondary mb-10">Spreadsheets</h3>
                <ul className="space-y-6 flex flex-col items-end md:items-start">
                  {["Manual Input Error", "Zero Collaboration", "Static Visibility", "Security Risks"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-text-muted">
                        <span className="w-4 h-px bg-yellow-500/40"></span>
                        {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Aggressive Cyber Branding */}
        <section className="py-48 text-center px-6 relative z-10 h-[90vh] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
          
          {/* Background Highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[180px] opacity-20 z-0"></div>

          <div className="max-w-4xl mx-auto relative z-10 space-y-12">
            <div className="flex justify-center gap-1 mb-6">
               {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>)}
            </div>
            <h2 className="text-6xl md:text-9xl font-black tracking-[calc(-0.04em)] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
               ASCEND.
            </h2>
            <p className="text-2xl text-text-secondary font-medium tracking-tight max-w-2xl mx-auto">Vault is the only choice for companies that value precision over performance theater.</p>
            <div className="pt-8">
              <Link href="/register">
                <Button size="lg" className="h-20 px-16 text-xs font-black uppercase tracking-[0.4em] rounded-3xl shadow-[0_0_60px_rgba(34,197,94,0.4)] hover:shadow-[0_0_80px_rgba(34,197,94,0.6)] hover:scale-105 active:scale-95 transition-all duration-500 bg-white text-black hover:bg-primary-hover hover:text-black">
                  Inaugurate My Workspace
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer - Professional Tech Base */}
        <footer className="border-t border-white/5 py-24 px-6 bg-black/80 backdrop-blur-3xl relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
             <div className="col-span-1 md:col-span-2 space-y-8">
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-emerald-500 to-green-600 shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center">
                    <div className="w-4 h-4 bg-black/20 rounded-md"></div>
                  </div>
                  <span className="text-2xl font-black tracking-tighter text-white">VAULT</span>
                </div>
                <p className="max-w-sm text-text-secondary text-base leading-relaxed font-medium">Precision engineering for inventory dominance. The world's fastest synchronization engine, built for scales that break others.</p>
             </div>
             
             <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Resources</h4>
                <ul className="space-y-4 text-sm font-bold text-text-secondary">
                   <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
                   <li><Link href="#" className="hover:text-primary transition-colors">API Keys</Link></li>
                   <li><Link href="#" className="hover:text-primary transition-colors">Security Audit</Link></li>
                </ul>
             </div>

             <div className="space-y-8 text-right">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Legal</h4>
                <ul className="space-y-4 text-sm font-bold text-text-secondary">
                   <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                   <li><Link href="#" className="hover:text-primary transition-colors">Terms of Operations</Link></li>
                   <li><Link href="#" className="hover:text-primary transition-colors">Service SLA</Link></li>
                </ul>
             </div>
          </div>
          <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted/60">&copy; {new Date().getFullYear()} Vault Systems Infrastructure. All rights reserved.</p>
             <div className="flex items-center gap-6">
                {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-lg bg-white/5 border border-white/5"></div>)}
             </div>
          </div>
        </footer>
      </div>
    </>
  );
}
