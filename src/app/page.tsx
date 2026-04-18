"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 160]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Feature blocks slide in from right
      gsap.utils.toArray<HTMLElement>(".feature-block").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 48 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: i * 0.1,
          }
        );
      });

      // Social proof logos fade + scale up
      gsap.fromTo(
        ".logo-item",
        { opacity: 0, scale: 0.88, y: 16 },
        {
          opacity: 0.4,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".logos-row",
            start: "top 80%",
          },
        }
      );

      // Pricing cards stagger in
      gsap.fromTo(
        ".pricing-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 80%",
          },
        }
      );

      // CTA heading letter-by-line reveal
      gsap.fromTo(
        ".cta-line",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 75%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-brand selection:text-brand-foreground">

      {/* ── HERO ── */}
      <section className="relative h-[200vh] w-full" ref={heroRef}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          <motion.div
            className="absolute inset-0 w-full h-full z-0 origin-center bg-black"
            style={{ opacity: videoOpacity, scale: videoScale }}
          >
            <div className="absolute inset-0 bg-brand/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3 z-0" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover mix-blend-screen z-10"
              src="/hero-bg.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-20 pointer-events-none" />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex flex-col items-start justify-center container mx-auto px-6 z-30"
            style={{ y: textY, opacity: textOpacity }}
          >
            <div className="max-w-4xl mt-16">
              <p className="text-xs font-mono text-brand tracking-[0.25em] uppercase mb-6 opacity-80">
                AI-Native Transportation Management
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05] text-foreground uppercase drop-shadow-2xl">
                <span className="block opacity-90">We have reinvented</span>
                <span className="block opacity-90">the future of logistics</span>
                <span className="block text-brand drop-shadow-[0_0_20px_rgba(254,159,77,0.3)]">through the cloud.</span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground font-light mb-10 max-w-2xl leading-relaxed tracking-normal drop-shadow-md">
                Our AI-native technology turns manual dispatch tasks into perfectly connected missions. Moving the world by making freight flow from gate to dock.
              </p>

              <Button
                size="lg"
                className="text-sm h-12 px-10 rounded-none border border-transparent hover:border-brand-hover tracking-widest uppercase font-semibold relative overflow-hidden group focus-brand"
                asChild
              >
                <Link href="https://app.distributetms.com/login">
                  <span className="relative z-10 flex items-center">
                    Enter The Platform <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-0 border-b border-border/50 relative z-40 bg-background" ref={featuresRef}>
        <div className="grid lg:grid-cols-2">

          {/* Left sticky */}
          <div className="p-10 md:p-20 lg:p-24 border-b lg:border-b-0 lg:border-r border-border/50 flex flex-col justify-center bg-muted/10">
            <div className="sticky top-1/3">
              <p className="text-xs font-mono text-brand tracking-[0.25em] uppercase mb-4 opacity-70">Platform Overview</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase leading-tight">
                That&apos;s the<br />
                <span className="text-brand text-4xl md:text-5xl lg:text-6xl mt-3 block drop-shadow-[0_0_24px_rgba(254,159,77,0.12)]">
                  Distribute TMS
                </span>
              </h2>
              <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-sm leading-relaxed hidden lg:block">
                A closed-loop execution system designed specifically for extreme scale logistics networking.
              </p>
            </div>
          </div>

          {/* Right blocks */}
          <div className="flex flex-col">
            {[
              {
                num: "01",
                label: "Core Engine",
                title: "Intelligent Admin Dashboard",
                body: [
                  "A single, unified solution generating maximum, automated throughput. We completely abandon traditional refresh-heavy tables for real-time web socket data feeds mapping your entire brokerage simultaneously.",
                  "Deep system integrations actively anticipate incoming loads, assign optimized yard parameters, auto-generate strict BGL load numbers, and instantly link required documentation (BOL, RC, POD) securely in the cloud.",
                ],
              },
              {
                num: "02",
                label: "External Network",
                title: "Scalable Carrier Portal",
                body: [
                  "Designed from the ground up for disruption-free operations beyond your internal walls. The Carrier Portal acts as your proprietary load-board, instantly synchronizing available freight with invited external trucking organizations.",
                  "Carriers negotiate, bid, and secure loads completely within the platform context. We completely eliminate the WhatsApp confusion, providing an exclusive freight marketplace requiring zero IT lift for your partners.",
                ],
              },
              {
                num: "03",
                label: "Mobile Edge",
                title: "Precision Driver App",
                body: [
                  "The final node in the logistics chain. Mobile-first precision deployed directly to the truck cab. Drivers receive route commands, log milestones, and update geolocation statuses in real-time.",
                  "By arming drivers with immediate update capabilities, we completely eliminate check calls and ETA confusion from gate to dock. It triggers the final billing automations seamlessly upon delivery completion.",
                ],
              },
            ].map(({ num, label, title, body }) => (
              <div
                key={num}
                className="feature-block p-10 md:p-20 border-b last:border-b-0 border-border/50 hover:bg-muted/10 transition-colors duration-500 group relative overflow-hidden"
              >
                <div className="absolute -right-16 -top-16 text-[10rem] font-bold text-brand/5 group-hover:text-brand/8 transition-colors duration-700 pointer-events-none tracking-tighter mix-blend-screen select-none">
                  {num}
                </div>
                <div className="text-brand text-xs font-mono mb-5 font-bold tracking-[0.2em] opacity-80">
                  {num} — {label}
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-5 tracking-tight uppercase">{title}</h3>
                <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed font-light max-w-lg">
                  {body.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-24 md:py-32 bg-muted/20 border-b border-border/50">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-xs font-mono text-muted-foreground tracking-[0.25em] uppercase mb-16 opacity-60">
            Engineered for the Scale of Global Logistics Leaders
          </p>
          <div className="logos-row flex flex-wrap justify-center items-center gap-12 md:gap-24 cursor-default">
            {["NFI", "LINEAGE", "RYDER", "PROLOGIS"].map((name) => (
              <div
                key={name}
                className="logo-item text-xl md:text-2xl font-black tracking-[0.25em] grayscale hover:grayscale-0 hover:text-brand transition-all duration-500"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 md:py-36" ref={pricingRef}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <p className="text-xs font-mono text-brand tracking-[0.25em] uppercase mb-4 opacity-80">Pricing</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-tight mb-5">
              Rapid, repeatable{" "}
              <span className="text-brand drop-shadow-[0_0_12px_rgba(254,159,77,0.35)]">ROI</span>.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
              We know that operations run on razor-thin margins and lean budgets. We price our all-inclusive solution as a service with terms that scale linearly with your success.
            </p>
          </div>

          <div className="pricing-grid grid lg:grid-cols-3 gap-0 border border-border/50 divide-y lg:divide-y-0 lg:divide-x divide-border/50">

            {/* Starter */}
            <div className="pricing-card p-8 md:p-10 hover:bg-muted/5 transition-colors duration-300 flex flex-col">
              <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-foreground">Starter</h3>
              <div className="text-muted-foreground mb-8 text-xs uppercase tracking-widest">Standard operations</div>
              <div className="mb-8 font-mono flex items-end">
                <span className="text-4xl md:text-5xl font-light tracking-tight">$149</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest ml-2 mb-1">/ mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start text-sm text-muted-foreground font-medium"><CheckCircle2 className="h-4 w-4 mr-3 text-brand shrink-0 mt-0.5" /> Up to 3 Internal Users</li>
                <li className="flex items-start text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 mr-3 text-brand/50 shrink-0 mt-0.5" /> Core Admin Dashboard Access</li>
                <li className="flex items-start text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 mr-3 text-brand/50 shrink-0 mt-0.5" /> No External Carrier Network</li>
              </ul>
              <Button variant="outline" className="w-full rounded-none h-11 uppercase tracking-widest text-xs font-bold mt-auto" asChild>
                <Link href="https://app.distributetms.com/login">Deploy Starter</Link>
              </Button>
            </div>

            {/* Professional */}
            <div className="pricing-card p-8 md:p-10 bg-brand/5 relative border-x border-brand/20 flex flex-col">
              <div className="absolute top-0 right-0 bg-brand text-brand-foreground text-[10px] font-black px-3 py-1.5 uppercase tracking-widest">
                Most Popular
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-foreground">Professional</h3>
              <div className="text-brand mb-8 text-xs uppercase tracking-widest font-bold">Unlock carrier networks</div>
              <div className="mb-8 font-mono flex items-end">
                <span className="text-4xl md:text-5xl font-light tracking-tight text-brand drop-shadow-md">$349</span>
                <span className="text-xs text-brand/70 uppercase tracking-widest ml-2 mb-1">/ mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start text-sm text-foreground font-bold"><CheckCircle2 className="h-4 w-4 mr-3 text-brand shrink-0 mt-0.5" /> Up to 10 Internal Users</li>
                <li className="flex items-start text-sm text-foreground font-bold"><CheckCircle2 className="h-4 w-4 mr-3 text-brand shrink-0 mt-0.5" /> Carrier Portal Invites</li>
                <li className="flex items-start text-sm text-foreground"><CheckCircle2 className="h-4 w-4 mr-3 text-brand shrink-0 mt-0.5" /> Real-time Chat</li>
                <li className="flex items-start text-sm text-foreground"><CheckCircle2 className="h-4 w-4 mr-3 text-brand shrink-0 mt-0.5" /> Automated Analytics Engine</li>
              </ul>
              <Button className="w-full rounded-none h-11 uppercase tracking-widest text-xs font-bold mt-auto" asChild>
                <Link href="https://app.distributetms.com/login">Deploy Professional</Link>
              </Button>
            </div>

            {/* Enterprise */}
            <div className="pricing-card p-8 md:p-10 hover:bg-muted/5 transition-colors duration-300 flex flex-col">
              <h3 className="text-lg font-bold uppercase tracking-tight mb-1 text-foreground">Enterprise</h3>
              <div className="text-muted-foreground mb-8 text-xs uppercase tracking-widest">Command massive scale</div>
              <div className="mb-8 font-mono flex items-end">
                <span className="text-4xl md:text-5xl font-light tracking-tight">$899</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest ml-2 mb-1">/ mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-start text-sm text-foreground font-medium"><CheckCircle2 className="h-4 w-4 mr-3 text-brand shrink-0 mt-0.5" /> Unlimited Internal Users</li>
                <li className="flex items-start text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 mr-3 text-brand/50 shrink-0 mt-0.5" /> Dedicated Account Manager</li>
                <li className="flex items-start text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 mr-3 text-brand/50 shrink-0 mt-0.5" /> 99.99% Uptime SLA</li>
              </ul>
              <Button variant="outline" className="w-full rounded-none h-11 uppercase tracking-widest text-xs font-bold border-muted-foreground/30 hover:border-foreground mt-auto" asChild>
                <Link href="https://app.distributetms.com/login">Contact Sales</Link>
              </Button>
            </div>

          </div>

          {/* Carrier Access Plan */}
          <div className="mt-10 p-8 md:p-12 bg-muted/10 border border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-brand/30 transition-colors duration-500">
            <div>
              <div className="text-xs font-mono text-brand mb-3 uppercase tracking-widest font-bold">Network Extension Module</div>
              <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3">Carrier Access Plan</h4>
              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed font-light">
                When an internal dispatcher invites an external trucking carrier, the carrier automatically receives a full 3-day free trial. Following the trial validation period, their access to your private Carrier Portal is maintained via an independent direct billing subscription.
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-3xl md:text-4xl font-mono font-light tracking-tight">$180</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1 font-bold whitespace-nowrap">/ wk via Stripe</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        ref={ctaRef}
        className="relative py-32 md:py-48 bg-brand text-brand-foreground flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
        <h2 className="relative z-10 uppercase tracking-tight leading-tight mb-10 font-black">
          <span className="cta-line block text-4xl sm:text-5xl md:text-6xl">The network</span>
          <span className="cta-line block text-4xl sm:text-5xl md:text-6xl">of the future</span>
          <span className="cta-line block text-4xl sm:text-5xl md:text-6xl">starts today.</span>
        </h2>
        <Button
          size="lg"
          className="cta-line relative z-10 h-14 px-12 bg-background text-brand hover:bg-background/90 text-sm uppercase tracking-widest font-black rounded-none shadow-[0_16px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all duration-300"
          asChild
        >
          <Link href="https://app.distributetms.com/login">
            Take Charge of Your Network
          </Link>
        </Button>
      </section>

    </div>
  );
}
