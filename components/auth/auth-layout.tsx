"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Background blobs breathing animation
    gsap.to(".blob-1", {
      x: "random(-40, 40)",
      y: "random(-40, 40)",
      scale: "random(0.9, 1.2)",
      duration: "random(4, 7)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".blob-2", {
      x: "random(-50, 50)",
      y: "random(-30, 30)",
      scale: "random(0.7, 1.3)",
      duration: "random(5, 8)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Scanner Beam Animation
    gsap.to(".scanner-beam", {
      top: "120%",
      duration: 4,
      ease: "power1.inOut",
      repeat: -1,
    });

    // Content entry
    tl.from(".auth-card", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    })
    .from(".auth-content > *", {
      y: 15,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power3.out",
    }, "-=0.6");
    
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex min-h-screen w-full bg-main text-text-primary overflow-hidden relative selection:bg-primary/30 selection:text-white font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="blob-1 absolute top-[-10%] left-[-5%] w-[1200px] h-[1200px] bg-primary/10 rounded-full blur-[140px] mix-blend-screen opacity-60"></div>
         <div className="blob-2 absolute bottom-[-15%] right-[-5%] w-[1000px] h-[1000px] bg-accent-purple/5 rounded-full blur-[140px] mix-blend-screen opacity-40"></div>
         
         {/* Animated Scanner Beam */}
         <div className="scanner-beam absolute -top-[20%] left-0 w-full h-[600px] bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none z-0"></div>

         {/* Grid Pattern with Glow */}
         <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
         
         {/* Subtle Vignette */}
         <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-40"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center p-6">
        <Link href="/" className="mb-10 group">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary via-emerald-500 to-green-600 shadow-[0_0_25px_rgba(34,197,94,0.4)] group-hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all duration-500 flex items-center justify-center p-[2px]">
                 <div className="w-full h-full bg-main/40 backdrop-blur-sm rounded-[14px] flex items-center justify-center">
                    <div className="w-5 h-5 bg-primary/80 rounded-lg shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                 </div>
            </div>
            <span className="text-3xl font-black tracking-tighter text-white group-hover:text-primary transition-colors duration-300">VAULT</span>
          </div>
        </Link>
        
        <div className="auth-card w-full max-w-md bg-card/60 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group/card">
           {/* Top Highlight Details */}
           <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
           
           {/* Tech Accents - Corners - Premium Look */}
           <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl"></div>
           <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/40 rounded-tr-3xl"></div>
           <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/40 rounded-bl-3xl"></div>
           <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-3xl"></div>

           {/* Inner Glow Surround */}
           <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-accent-purple/[0.05] pointer-events-none"></div>

           <div className="auth-content space-y-8 relative z-10">
             <div className="text-center space-y-3">
               <h1 className="text-3xl font-extrabold tracking-tight text-text-primary bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">{title}</h1>
               <p className="text-text-secondary text-base font-medium max-w-[280px] mx-auto">{subtitle}</p>
             </div>
             
             {children}
           </div>
        </div>
        
        <div className="mt-10 flex items-center gap-6 text-xs font-semibold tracking-widest uppercase text-text-muted/60">
           <Link href="#" className="hover:text-primary transition-colors duration-300">Privacy</Link>
           <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
           <Link href="#" className="hover:text-primary transition-colors duration-300">Terms</Link>
           <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
           <Link href="#" className="hover:text-primary transition-colors duration-300">Help</Link>
        </div>
      </div>
    </div>
  );
}
