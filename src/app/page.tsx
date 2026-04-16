"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-16 bg-background selection:bg-brand selection:text-brand-foreground">
      
      {/* ULTRA-MAXIMALIST HERO SECTION */}
      <section className="relative px-6 py-24 md:py-40 lg:py-48 overflow-hidden flex flex-col items-start justify-center border-b border-border/50">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="container mx-auto px-6 z-10"
        >
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter mb-12 leading-[1.1] text-foreground font-heading uppercase">
              <span className="block opacity-90">We have reinvented</span>
              <span className="block opacity-90">the future of logistics</span>
              <span className="block text-brand">through the cloud.</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-muted-foreground font-light mb-12 max-w-3xl leading-snug tracking-tight">
              AI-native technology that turns manual dispatch tasks into connected missions. Moving the world by making freight flow perfectly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-10 rounded-none border border-transparent hover:border-brand-hover tracking-wide uppercase font-semibold" asChild>
                <Link href="https://app.distributetms.com/login">
                  Enter The Platform <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* NUMBERED BENEFIT BLOCKS (TERMINAL STYLE) */}
      <section className="py-0 border-b border-border/50">
        <div className="grid lg:grid-cols-2">
          {/* Left Side: Sticky or large Title space */}
          <div className="p-12 md:p-24 lg:p-32 border-b lg:border-b-0 lg:border-r border-border/50 flex flex-col justify-center bg-muted/10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
              That's the<br />
              <span className="text-brand text-6xl md:text-8xl mt-4 block">Distribute TMS</span>
            </h2>
          </div>

          {/* Right Side: The 01 02 03 Blocks */}
          <div className="flex flex-col">
            {/* 01 Block */}
            <div className="p-12 md:p-24 border-b border-border/50 hover:bg-muted/10 transition-colors duration-500 group">
              <div className="text-brand text-xl font-mono mb-8 font-bold tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">01</div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight uppercase">Admin Dashboard</h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                A single solution for maximum, automated throughput. Deep integrations anticipate incoming loads, assign locations, and maintain real-time visibility across your entire dispatch network without manual refreshes.
              </p>
            </div>

            {/* 02 Block */}
            <div className="p-12 md:p-24 border-b border-border/50 hover:bg-muted/10 transition-colors duration-500 group">
              <div className="text-brand text-xl font-mono mb-8 font-bold tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">02</div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight uppercase">Carrier Portal</h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                Easy, scalable operation. Designed from the ground up for disruption-free operations. Invite external carriers to bid on loads seamlessly. They get exclusive access to your freight marketplace with zero IT lift.
              </p>
            </div>

            {/* 03 Block */}
            <div className="p-12 md:p-24 hover:bg-muted/10 transition-colors duration-500 group">
              <div className="text-brand text-xl font-mono mb-8 font-bold tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">03</div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight uppercase">Driver App</h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                Mobile-first precision. Drivers update statuses in real-time, completely eliminating check calls and ETA confusion from gate to dock. Rapid to deploy right away, and rapid to scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT BY LOGISTICS LEADERS */}
      <section className="py-24 md:py-32 bg-muted/20 border-b border-border/50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-16 uppercase opacity-80">
            Built by logistics leaders who want a new industry standard
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-2xl font-black tracking-widest">NFI</div>
             <div className="text-2xl font-black tracking-widest">LINEAGE</div>
             <div className="text-2xl font-black tracking-widest">RYDER</div>
             <div className="text-2xl font-black tracking-widest">PROLOGIS</div>
          </div>
        </div>
      </section>

      {/* PRICING REDUX: DISTRIBUTE TMS SAAS PRICING */}
      <section id="pricing" className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none mb-6">
              Rapid, repeatable <span className="text-brand">ROI</span>.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We know that operations run on lean budgets, which is why we price our all-inclusive solution as a service with terms that won’t bust the bank.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-0 border border-border/50 divide-y lg:divide-y-0 lg:divide-x divide-border/50">
            
            {/* Starter Plan */}
            <div className="p-12 hover:bg-muted/5 transition-colors duration-300">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 text-foreground">Starter</h3>
              <div className="text-muted-foreground mb-12 h-6">Standard operations</div>
              <div className="mb-12 font-mono">
                <span className="text-5xl font-light tracking-tighter">$149</span>
                <span className="text-sm text-muted-foreground uppercase tracking-widest ml-2">/ month</span>
              </div>
              <ul className="space-y-6 mb-12 flex-1">
                <li className="flex items-start text-muted-foreground font-medium"><CheckCircle2 className="h-5 w-5 mr-4 text-brand shrink-0" /> Up to 3 users</li>
                <li className="flex items-start text-muted-foreground"><CheckCircle2 className="h-5 w-5 mr-4 text-brand/50 shrink-0" /> Standard dashboard access</li>
                <li className="flex items-start text-muted-foreground"><CheckCircle2 className="h-5 w-5 mr-4 text-brand/50 shrink-0" /> NO external carrier invites</li>
              </ul>
              <Button variant="outline" className="w-full rounded-none h-12 uppercase tracking-widest text-xs" asChild>
                <Link href="https://app.distributetms.com/login">Select Starter</Link>
              </Button>
            </div>

            {/* Professional Plan */}
            <div className="p-12 bg-brand/5 relative transition-colors duration-300">
              <div className="absolute top-0 right-0 bg-brand text-brand-foreground text-xs font-bold px-4 py-2 uppercase tracking-widest">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 text-foreground">Professional</h3>
              <div className="text-muted-foreground mb-12 h-6">Unlock carrier networks</div>
              <div className="mb-12 font-mono">
                <span className="text-5xl font-light tracking-tighter text-brand">$349</span>
                <span className="text-sm text-muted-foreground uppercase tracking-widest ml-2">/ month</span>
              </div>
              <ul className="space-y-6 mb-12 flex-1">
                <li className="flex items-start text-foreground font-bold"><CheckCircle2 className="h-5 w-5 mr-4 text-brand shrink-0" /> Up to 10 users</li>
                <li className="flex items-start text-foreground font-bold"><CheckCircle2 className="h-5 w-5 mr-4 text-brand shrink-0" /> UNLOCKS Carrier Portal Invites</li>
                <li className="flex items-start text-foreground"><CheckCircle2 className="h-5 w-5 mr-4 text-brand shrink-0" /> Real-time chat functionality</li>
                <li className="flex items-start text-foreground"><CheckCircle2 className="h-5 w-5 mr-4 text-brand shrink-0" /> Deep Analytics</li>
              </ul>
              <Button className="w-full rounded-none h-12 uppercase tracking-widest text-xs" asChild>
                <Link href="https://app.distributetms.com/login">Deploy Professional</Link>
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="p-12 hover:bg-muted/5 transition-colors duration-300">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 text-foreground">Enterprise</h3>
              <div className="text-muted-foreground mb-12 h-6">Command massive scale</div>
              <div className="mb-12 font-mono">
                <span className="text-5xl font-light tracking-tighter">$899</span>
                <span className="text-sm text-muted-foreground uppercase tracking-widest ml-2">/ month</span>
              </div>
              <ul className="space-y-6 mb-12 flex-1">
                <li className="flex items-start text-foreground font-medium"><CheckCircle2 className="h-5 w-5 mr-4 text-brand shrink-0" /> Unlimited users</li>
                <li className="flex items-start text-muted-foreground"><CheckCircle2 className="h-5 w-5 mr-4 text-brand/50 shrink-0" /> Dedicated Account Manager</li>
                <li className="flex items-start text-muted-foreground"><CheckCircle2 className="h-5 w-5 mr-4 text-brand/50 shrink-0" /> Premium SLA</li>
              </ul>
              <Button variant="outline" className="w-full rounded-none h-12 uppercase tracking-widest text-xs" asChild>
                <Link href="https://app.distributetms.com/login">Contact Sales</Link>
              </Button>
            </div>

          </div>

          {/* Carrier Access Plan callout */}
          <div className="mt-12 p-8 md:p-12 bg-card-elevated border border-border flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div>
              <div className="text-xs font-mono text-brand mb-2 uppercase tracking-widest">Network Extension</div>
              <h4 className="text-2xl font-bold uppercase tracking-tight">Carrier Access Plan</h4>
              <p className="text-muted-foreground mt-2 max-w-2xl text-balance">
                When an internal dispatcher invites a carrier, the carrier receives a 3-day free trial. Following the trial, access to the premium Carrier Portal is maintained via an independent subscription.
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-3xl font-mono font-light">$180</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">/ week via Stripe</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA / CONTACT */}
      <section className="py-32 md:py-48 bg-brand text-brand-foreground flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.9]">
          The network<br/>of the future<br/>starts today.
        </h2>
        <Button size="lg" className="h-16 px-12 bg-background text-brand hover:bg-background/90 text-lg uppercase tracking-widest font-bold rounded-none" asChild>
          <Link href="https://app.distributetms.com/login">
            Take Charge of Your Network
          </Link>
        </Button>
      </section>

    </div>
  );
}
