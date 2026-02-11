"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();

    // Entrance Animation
    tl.from(".hero-content > *", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    })
    .from(".floating-widget", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
    }, "-=0.5");

    // Scanner Beam Animation - More atmospheric
    gsap.to(".hero-scanner", {
      top: "120%",
      duration: 10,
      ease: "power1.inOut",
      repeat: -1,
    });

    // Floating Widgets Hover/Parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5);
      const yPos = (clientY / innerHeight - 0.5);

      gsap.to(".widget-1", { x: xPos * 40, y: yPos * 40, rotationY: xPos * 10, rotationX: -yPos * 10, duration: 1.5, ease: "power2.out" });
      gsap.to(".widget-2", { x: xPos * -30, y: yPos * -30, rotationY: -xPos * 15, rotationX: yPos * 15, duration: 2, ease: "power2.out" });
      gsap.to(".widget-3", { x: xPos * 60, y: yPos * -60, rotationY: xPos * 20, rotationX: -yPos * 5, duration: 1.8, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);

  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative pt-32 pb-40 px-6 min-h-[95vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Spotlight */}
         <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] bg-primary/10 rounded-full blur-[160px] mix-blend-screen opacity-60"></div>
         
         {/* Hero Scanner */}
         <div className="hero-scanner absolute -top-[10%] left-0 w-full h-[400px] bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none z-0"></div>

         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] bg-center [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"></div>
         
         <div className="absolute inset-0 bg-radial-vignette opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div className="hero-content text-left space-y-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-xl shadow-lg shadow-primary/5 hover:border-primary/40 transition-colors duration-500">
             <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
             Vault Intelligence v3.0
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30">
             Command <br/>
             <span className="text-primary italic">Everything.</span>
          </h1>
          
          <p className="text-xl text-text-secondary max-w-xl leading-relaxed font-medium">
            The modern standard for high-growth inventory management. Predictive AI wrapped in an interface that feels like the future.
          </p>
          
          <div className="flex flex-wrap gap-6 pt-6">
             <Link href="/register">
                <Button size="lg" className="h-16 px-12 rounded-2xl text-lg font-black bg-primary text-black hover:bg-primary-hover shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]">
                  Initialize My Workspace
                </Button>
             </Link>
             <Link href="/login">
                <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl text-lg font-bold border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all duration-300">
                  Observe Demo
                </Button>
             </Link>
          </div>
        </div>

        {/* Right: Floating Widgets Visualization */}
        <div className="relative h-[650px] w-full flex items-center justify-center order-1 lg:order-2 perspective-[1500px]">
           
           {/* Center Piece (Revenue Graph) */}
           <div className="floating-widget widget-1 absolute z-20 w-[300px] md:w-[420px] bg-card/60 backdrop-blur-3xl border border-white/10 rounded-[32px] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.6)] group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent rounded-[32px] pointer-events-none"></div>
              <div className="flex justify-between items-center mb-10">
                 <div className="space-y-1">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary">Total Global Liquidity</h3>
                    <p className="text-4xl font-black text-white">$12.4M</p>
                 </div>
                 <div className="text-primary bg-primary/10 px-3 py-1 rounded-full text-[10px] font-black tracking-widest border border-primary/20">+14.2%</div>
              </div>
              <div className="h-40 w-full flex items-end gap-3">
                 {[40, 65, 45, 80, 55, 90, 70, 100].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all duration-300 hover:scale-105 hover:bg-white group-hover:opacity-100"></div>
                 ))}
              </div>
           </div>

           {/* Top Right (Alert) */}
           <div className="floating-widget widget-2 absolute top-0 right-0 md:right-4 z-10 w-[260px] bg-card/80 backdrop-blur-2xl border border-red-500/30 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                 </div>
                 <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-widest">Network Alert</h4>
                    <p className="text-[10px] font-bold text-red-400 capitalize">Critical stockout imminent</p>
                 </div>
              </div>
              <div className="space-y-3">
                 <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[12%] bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                 </div>
                 <div className="flex justify-between text-[10px] font-black text-text-muted uppercase tracking-[0.1em]">
                    <span>Quantum Chip X1</span>
                    <span className="text-red-400">2 units</span>
                 </div>
              </div>
           </div>

           {/* Bottom Left (Activity) */}
           <div className="floating-widget widget-3 absolute bottom-10 left-0 md:-left-4 z-30 w-[280px] bg-card/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-4 mb-5">
                 <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 border border-white/20"></div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary border-2 border-zinc-900 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                 </div>
                 <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-widest">Agent Zero</h4>
                    <p className="text-[10px] font-bold text-text-secondary">Modified inventory state</p>
                 </div>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 bg-white/5 p-3 rounded-xl border border-white/5">
                 <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                 <span>Data Synchronized</span>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
}
