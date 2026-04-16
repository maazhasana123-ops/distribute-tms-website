"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Track scroll specifically for the Hero bounds (200vh)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Calculate dynamic transformations for the video background and text
  const videoOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-brand selection:text-brand-foreground">
      
      {/* IMMERSIVE SCROLL-JACKED HERO VIDEO SECTION */}
      <section className="relative h-[200vh] w-full" ref={heroRef}>
        
        {/* Sticky Container for Video & Text */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
        
          {/* Transforming Video Background */}
          <motion.div 
            className="absolute inset-0 w-full h-full z-0 origin-center bg-black"
            style={{ opacity: videoOpacity, scale: videoScale }}
          >
            <div className="absolute inset-0 bg-brand/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 z-0" />
            
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover mix-blend-screen z-10"
              src="/hero-bg.mp4"
            />
            {/* Deep gradient to blend the bottom explicitly directly into the background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-20 pointer-events-none" />
          </motion.div>
          
          {/* Dynamic Foreground Text */}
          <motion.div
            className="absolute inset-0 flex flex-col items-start justify-center container mx-auto px-6 z-30"
            style={{ y: textY, opacity: textOpacity }}
          >
            <div className="max-w-5xl mt-16">
              <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter mb-10 leading-[0.95] text-foreground uppercase drop-shadow-2xl">
                <span className="block opacity-90 drop-shadow-lg">We have reinvented</span>
                <span className="block opacity-90 drop-shadow-lg">the future of logistics</span>
                <span className="block text-brand drop-shadow-[0_0_20px_rgba(254,159,77,0.3)]">through the cloud.</span>
              </h1>
              
              <p className="text-xl md:text-3xl text-muted-foreground font-light mb-12 max-w-3xl leading-snug tracking-tight drop-shadow-md">
                Our AI-native technology turns manual dispatch tasks into perfectly connected missions. Moving the world by making freight flow from gate to dock.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button size="lg" className="w-full sm:w-auto text-lg h-16 px-12 rounded-none border border-transparent hover:border-brand-hover tracking-widest uppercase font-semibold relative overflow-hidden group focus-brand" asChild>
                  <Link href="https://app.distributetms.com/login">
                    <span className="relative z-10 flex items-center">
                      Enter The Platform <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* MASSIVE INFORMATION BLOCKS (TERMINAL STYLE) */}
      <section className="py-0 border-b border-border/50 relative z-40 bg-background">
        <div className="grid lg:grid-cols-2">
          
          {/* Left Side: Sticky Title space */}
          <div className="p-12 md:p-24 lg:p-32 border-b lg:border-b-0 lg:border-r border-border/50 flex flex-col justify-center bg-muted/10">
            <div className="sticky top-1/3">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
                That's the<br />
                <span className="text-brand text-7xl md:text-9xl mt-6 block drop-shadow-[0_0_30px_rgba(254,159,77,0.1)]">Distribute TMS</span>
              </h2>
              <p className="mt-8 text-xl text-muted-foreground max-w-md leading-relaxed hidden lg:block">
                A closed-loop execution system designed specifically for extreme scale logistics networking. 
              </p>
            </div>
          </div>

          {/* Right Side: The Expanding Content Blocks */}
          <div className="flex flex-col">
            {/* 01 Block */}
            <div className="p-12 md:p-24 border-b border-border/50 hover:bg-muted/10 transition-colors duration-500 group relative overflow-hidden">
              <div className="absolute -right-20 -top-20 text-[15rem] font-bold text-brand/5 group-hover:text-brand/10 transition-colors duration-700 pointer-events-none tracking-tighter mix-blend-screen">01</div>
              <div className="text-brand text-xl font-mono mb-8 font-bold tracking-widest opacity-80 transition-opacity">01 — Core Engine</div>
              <h3 className="text-4xl font-black mb-8 tracking-tighter uppercase">Intelligent Admin Dashboard</h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-balance font-light">
                <p>
                  A single, unified solution generating maximum, automated throughput. We completely abandon traditional refresh-heavy tables for real-time web socket data feeds mapping your entire brokerage simultaneously.
                </p>
                <p>
                  Deep system integrations actively anticipate incoming loads, assign optimized yard parameters, auto-generate strict BGL load numbers, and instantly link required documentation (BOL, RC, POD) securely in the cloud. We grant you omniscient visibility across your entire dispatch network without waiting on an email.
                </p>
              </div>
            </div>

            {/* 02 Block */}
            <div className="p-12 md:p-24 border-b border-border/50 hover:bg-muted/10 transition-colors duration-500 group relative overflow-hidden">
              <div className="absolute -right-20 -top-20 text-[15rem] font-bold text-brand/5 group-hover:text-brand/10 transition-colors duration-700 pointer-events-none tracking-tighter mix-blend-screen">02</div>
              <div className="text-brand text-xl font-mono mb-8 font-bold tracking-widest opacity-80 transition-opacity">02 — External Network</div>
              <h3 className="text-4xl font-black mb-8 tracking-tighter uppercase">Scalable Carrier Portal</h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-balance font-light">
                <p>
                  Designed from the ground up for disruption-free operations beyond your internal walls. The Carrier Portal acts as your proprietary load-board, instantly synchronizing available freight with invited external trucking organizations.
                </p>
                <p>
                  Carriers negotiate, bid, and secure loads completely within the platform context. We completely eliminate the WhatsApp confusion, providing an exclusive freight marketplace requiring zero IT lift for your partners. Secure external collaboration backed entirely by row-level database architecture.
                </p>
              </div>
            </div>

            {/* 03 Block */}
            <div className="p-12 md:p-24 hover:bg-muted/10 transition-colors duration-500 group relative overflow-hidden">
              <div className="absolute -right-20 -top-20 text-[15rem] font-bold text-brand/5 group-hover:text-brand/10 transition-colors duration-700 pointer-events-none tracking-tighter mix-blend-screen">03</div>
              <div className="text-brand text-xl font-mono mb-8 font-bold tracking-widest opacity-80 transition-opacity">03 — Mobile Edge</div>
              <h3 className="text-4xl font-black mb-8 tracking-tighter uppercase">Precision Driver App</h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-balance font-light">
                <p>
                  The final node in the logistics chain. Mobile-first precision deployed directly to the truck cab. Drivers receive route commands, log milestones, and update geolocation statuses in real-time.
                </p>
                <p>
                  By arming drivers with immediate update capabilities, we completely eliminate check calls and ETA confusion from gate to dock. It triggers the final billing automations seamlessly upon delivery completion. Rapid to deploy, zero overhead to maintain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT BY LOGISTICS LEADERS */}
      <section className="py-32 md:py-48 bg-muted/20 border-b border-border/50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-black tracking-widest mb-24 uppercase opacity-60">
            Engineered for the Scale of Global Logistics Leaders
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 cursor-default">
             <div className="text-3xl font-black tracking-[0.3em]">NFI</div>
             <div className="text-3xl font-black tracking-[0.3em]">LINEAGE</div>
             <div className="text-3xl font-black tracking-[0.3em]">RYDER</div>
             <div className="text-3xl font-black tracking-[0.3em]">PROLOGIS</div>
          </div>
        </div>
      </section>

      {/* PRICING REDUX: DISTRIBUTE TMS SAAS PRICING */}
      <section id="pricing" className="py-32 md:py-48">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-24">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-8">
              Rapid, repeatable <span className="text-brand drop-shadow-[0_0_15px_rgba(254,159,77,0.4)]">ROI</span>.
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl font-light leading-relaxed">
              We know that operations run on razor-thin margins and lean budgets. We price our all-inclusive solution as a service with terms that scale linearly with your success.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-0 border border-border/50 divide-y lg:divide-y-0 lg:divide-x divide-border/50">
            
            {/* Starter Plan */}
            <div className="p-12 hover:bg-muted/5 transition-colors duration-300">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 text-foreground">Starter</h3>
              <div className="text-muted-foreground mb-12 h-6 text-sm uppercase tracking-widest">Standard operations</div>
              <div className="mb-12 font-mono flex items-end">
                <span className="text-6xl font-light tracking-tighter">$149</span>
                <span className="text-sm text-muted-foreground uppercase tracking-widest ml-2 mb-2">/ mo</span>
              </div>
              <ul className="space-y-6 mb-16 flex-1">
                <li className="flex items-start text-muted-foreground font-medium"><CheckCircle2 className="h-5 w-5 mr-4 text-brand shrink-0" /> Up to 3 Internal Users</li>
                <li className="flex items-start text-muted-foreground"><CheckCircle2 className="h-5 w-5 mr-4 text-brand/50 shrink-0" /> Core Admin Dashboard Access</li>
                <li className="flex items-start text-muted-foreground"><CheckCircle2 className="h-5 w-5 mr-4 text-brand/50 shrink-0" /> NO External Carrier Network Invites</li>
              </ul>
              <Button variant="outline" className="w-full rounded-none h-14 uppercase tracking-widest text-xs font-bold" asChild>
                <Link href="https://app.distributetms.com/login">Deploy Starter</Link>
              </Button>
            </div>

            {/* Professional Plan */}
            <div className="p-12 bg-brand/5 relative transition-colors duration-300 border-x border-brand/20">
              <div className="absolute top-0 right-0 bg-brand text-brand-foreground text-xs font-black px-4 py-2 uppercase tracking-widest">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 text-foreground">Professional</h3>
              <div className="text-brand mb-12 h-6 text-sm uppercase tracking-widest font-bold">Unlock carrier networks</div>
              <div className="mb-12 font-mono flex items-end">
                <span className="text-6xl font-light tracking-tighter text-brand drop-shadow-md">$349</span>
                <span className="text-sm text-brand/70 uppercase tracking-widest ml-2 mb-2">/ mo</span>
              </div>
              <ul className="space-y-6 mb-16 flex-1">
                <li className="flex items-start text-foreground font-bold"><CheckCircle2 className="h-5 w-5 mr-4 text-brand shrink-0" /> Up to 10 Internal Users</li>
                <li className="flex items-start text-foreground font-bold"><CheckCircle2 className="h-5 w-5 mr-4 text-brand shrink-0" /> UNLOCKS Carrier Portal Invites</li>
                <li className="flex items-start text-foreground"><CheckCircle2 className="h-5 w-5 mr-4 text-brand shrink-0" /> Instant Real-time Chat Functionality</li>
                <li className="flex items-start text-foreground"><CheckCircle2 className="h-5 w-5 mr-4 text-brand shrink-0" /> Deep Automated Analytics Engine</li>
              </ul>
              <Button className="w-full rounded-none h-14 uppercase tracking-widest text-xs font-bold" asChild>
                <Link href="https://app.distributetms.com/login">Deploy Professional</Link>
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="p-12 hover:bg-muted/5 transition-colors duration-300">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 text-foreground">Enterprise</h3>
              <div className="text-muted-foreground mb-12 h-6 text-sm uppercase tracking-widest">Command massive scale</div>
              <div className="mb-12 font-mono flex items-end">
                <span className="text-6xl font-light tracking-tighter">$899</span>
                <span className="text-sm text-muted-foreground uppercase tracking-widest ml-2 mb-2">/ mo</span>
              </div>
              <ul className="space-y-6 mb-16 flex-1">
                <li className="flex items-start text-foreground font-medium"><CheckCircle2 className="h-5 w-5 mr-4 text-brand shrink-0" /> Unlimited Internal Users</li>
                <li className="flex items-start text-muted-foreground"><CheckCircle2 className="h-5 w-5 mr-4 text-brand/50 shrink-0" /> Dedicated Technical Account Manager</li>
                <li className="flex items-start text-muted-foreground"><CheckCircle2 className="h-5 w-5 mr-4 text-brand/50 shrink-0" /> 99.99% Uptime Premium SLA</li>
              </ul>
              <Button variant="outline" className="w-full rounded-none h-14 uppercase tracking-widest text-xs font-bold border-muted-foreground/30 hover:border-foreground" asChild>
                <Link href="https://app.distributetms.com/login">Contact Sales</Link>
              </Button>
            </div>

          </div>

          {/* Carrier Access Plan callout */}
          <div className="mt-16 p-10 md:p-16 bg-muted/10 border border-border flex flex-col md:flex-row items-center justify-between gap-12 group hover:border-brand/30 transition-colors duration-500">
            <div>
              <div className="text-xs font-mono text-brand mb-4 uppercase tracking-widest font-bold">Network Extension Module</div>
              <h4 className="text-3xl font-black uppercase tracking-tight mb-4">Carrier Access Plan</h4>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed font-light text-balance">
                When an internal dispatcher invites an external trucking carrier, the carrier automatically receives a full 3-day free trial. Following the trial validation period, their access to your private, premium Carrier Portal is maintained via an independent direct billing subscription.
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-4xl md:text-5xl font-mono font-light tracking-tighter">$180</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest mt-2 font-bold whitespace-nowrap">/ wk via Stripe</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA / CONTACT */}
      <section className="relative py-48 md:py-64 bg-brand text-brand-foreground flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tighter mb-16 leading-[0.85] relative z-10">
          The network<br/>of the future<br/>starts today.
        </h2>
        <Button size="lg" className="h-20 px-16 bg-background text-brand hover:bg-background/90 text-xl uppercase tracking-widest font-black rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 relative z-10" asChild>
          <Link href="https://app.distributetms.com/login">
            Take Charge of Your Network
          </Link>
        </Button>
      </section>

    </div>
  );
}
