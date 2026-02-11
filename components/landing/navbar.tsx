"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5
    });
  }, { scope: navRef });
  */

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-8 py-5 flex items-center justify-between",
        isScrolled
          ? "bg-main/60 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-4"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="flex items-center gap-4 group">
        <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-primary via-emerald-500 to-green-600 shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center justify-center p-[2px] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-500">
            <div className="w-full h-full bg-main/40 backdrop-blur-sm rounded-[14px] flex items-center justify-center">
                 <div className="w-4 h-4 bg-primary rounded-md shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            </div>
        </div>
        <span className="text-2xl font-black tracking-tighter text-white group-hover:text-primary transition-colors duration-300">VAULT</span>
      </div>

      <div className="hidden md:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-text-secondary">
        {["Features", "Integration", "Security", "Pricing"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative group hover:text-primary transition-all duration-300"
          >
            {item}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <Link href="/login" className="hidden sm:block text-xs font-black uppercase tracking-[0.2em] text-text-secondary hover:text-white transition-all duration-300">
          Login
        </Link>
        <Link href="/register">
          <Button size="sm" className="rounded-xl px-7 h-11 font-black uppercase tracking-[0.1em] text-xs bg-primary text-black hover:bg-primary-hover shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] transition-all duration-500 hover:scale-105 active:scale-95">
            Onboard Now
          </Button>
        </Link>
      </div>
    </nav>
  );
}
