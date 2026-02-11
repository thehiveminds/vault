"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthLayout } from "@/components/auth/auth-layout";
import { Github, Chrome } from "lucide-react";

export default function RegisterPage() {
  return (
    <AuthLayout 
      title="Create Workspace" 
      subtitle="Join Vault today and streamline your inventory control"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
             <div className="group space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary ml-1 group-focus-within:text-primary transition-colors duration-300">First Name</label>
                <Input 
                  placeholder="John" 
                  className="bg-hover/50 border-subtle/50 focus-visible:ring-primary/50 focus-visible:border-primary h-12 transition-all text-text-primary placeholder:text-text-muted/50 rounded-xl"
                />
             </div>
             <div className="group space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary ml-1 group-focus-within:text-primary transition-colors duration-300">Last Name</label>
                <Input 
                  placeholder="Doe" 
                  className="bg-hover/50 border-subtle/50 focus-visible:ring-primary/50 focus-visible:border-primary h-12 transition-all text-text-primary placeholder:text-text-muted/50 rounded-xl"
                />
             </div>
          </div>
          
          <div className="group space-y-2">
            <label className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary ml-1 group-focus-within:text-primary transition-colors duration-300">Work Email</label>
            <Input 
              placeholder="name@company.com" 
              type="email" 
              className="bg-hover/50 border-subtle/50 focus-visible:ring-primary/50 focus-visible:border-primary h-12 transition-all text-text-primary placeholder:text-text-muted/50 rounded-xl"
            />
          </div>
          
          <div className="group space-y-2">
            <label className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary ml-1 group-focus-within:text-primary transition-colors duration-300">Secure Password</label>
            <Input 
              type="password" 
              placeholder="Create a strong password" 
              className="bg-hover/50 border-subtle/50 focus-visible:ring-primary/50 focus-visible:border-primary h-12 transition-all text-text-primary placeholder:text-text-muted/50 rounded-xl"
            />
          </div>
        </div>

        <Button className="w-full h-12 font-bold bg-primary text-black hover:bg-primary-hover shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:shadow-[0_0_35px_rgba(34,197,94,0.45)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] rounded-xl flex items-center justify-center gap-2">
          Initialize My Vault
        </Button>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/5" />
          </div>
          <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.3em]">
            <span className="bg-[#18181b] px-4 text-text-muted/40">Secure Boarding</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <Button variant="outline" className="bg-hover/30 border-white/5 hover:bg-white/5 hover:text-white text-text-secondary h-12 transition-all duration-300 hover:border-primary/30 rounded-xl flex items-center justify-center gap-2">
              <Github className="w-4 h-4" />
              <span className="text-xs font-bold">Github</span>
           </Button>
           <Button variant="outline" className="bg-hover/30 border-white/5 hover:bg-white/5 hover:text-white text-text-secondary h-12 transition-all duration-300 hover:border-primary/30 rounded-xl flex items-center justify-center gap-2">
              <Chrome className="w-4 h-4" />
              <span className="text-xs font-bold">Google</span>
           </Button>
        </div>

        <div className="text-center text-sm font-medium text-text-muted/80 pt-2">
          Already a user?{" "}
          <Link href="/login" className="text-primary hover:text-primary-glow hover:underline underline-offset-4 transition-all duration-300 font-bold decoration-primary/30">
            Sign in here
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
