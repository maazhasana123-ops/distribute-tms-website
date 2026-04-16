"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Truck, BarChart3, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      
      {/* HERO SECTION */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40 overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Subtle background glow effect using brand orange */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto z-10"
        >
          <div className="inline-flex items-center rounded-full border border-border bg-card-elevated px-3 py-1 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand mr-2"></span>
            The New Standard in Freight CRM
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Manage your freight empire with <span className="text-brand">absolute clarity.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Distribute TMS is the premium multi-tenant CRM built for modern dispatchers and carriers to manage loads, bids, and logistics without the clutter.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-base" asChild>
              <Link href="https://app.distributetms.com/login">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base" asChild>
              <Link href="#features">
                Explore Features
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* FEATURE GRID SECTION */}
      <section id="features" className="py-24 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Unified Logistics Ecosystem</h2>
            <p className="text-muted-foreground text-lg">One source of truth for your entire freight operation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card-elevated p-8 flex flex-col items-start animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Admin Dashboard</h3>
              <p className="text-muted-foreground">
                Total visibility. Track revenue, monitor active shipments, and manage your entire brokerage from a single pane of glass.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card-elevated p-8 flex flex-col items-start animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Carrier Portal</h3>
              <p className="text-muted-foreground">
                Invite external carriers to bid on loads seamlessly. They get exclusive access to your freight marketplace.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card-elevated p-8 flex flex-col items-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-6">
                <Truck className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Driver App</h3>
              <p className="text-muted-foreground">
                Mobile-first tracking. Drivers update statuses in real-time, completely eliminating check calls and ETA confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg">Scalable plans for brokerages of every size.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="card-elevated flex flex-col p-8">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="text-muted-foreground mb-6">Perfect for small teams</div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$149</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Up to 3 Users', 'Standard Dashboard', 'Core Load Management', 'Basic Email Support'].map(feature => (
                  <li key={feature} className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 mr-3 text-brand" /> {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link href="https://app.distributetms.com/login">Start Free Trial</Link>
              </Button>
            </div>

            {/* Professional Plan */}
            <div className="card-elevated flex flex-col p-8 border-brand relative shadow-lg shadow-brand/10">
              <div className="absolute top-0 right-0 bg-brand text-brand-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="text-muted-foreground mb-6">For growing brokerages</div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$349</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Up to 10 Users', 'UNLOCKS Carrier Portal Invites', 'Real-time Chat', 'Advanced Analytics'].map(feature => (
                  <li key={feature} className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 mr-3 text-brand" /> {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" asChild>
                <Link href="https://app.distributetms.com/login">Get Started</Link>
              </Button>
            </div>

            {/* Enterprise Plan */}
            <div className="card-elevated flex flex-col p-8">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-muted-foreground mb-6">For absolute scale</div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$899</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {['Unlimited Users', 'Dedicated Account Manager', 'Custom Integrations', 'SLA Support'].map(feature => (
                  <li key={feature} className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 mr-3 text-brand" /> {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link href="https://app.distributetms.com/login">Contact Sales</Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center card-elevated p-6 px-10 bg-brand/5 border-brand/20">
              <Users className="h-8 w-8 text-brand mb-4" />
              <h4 className="text-xl font-semibold mb-2">Carrier Access Plan</h4>
              <p className="text-muted-foreground max-w-md">
                Invited carriers get a 3-day free trial, then pay <strong>$180/week</strong> to access the premium multi-tenant carrier portal and exclusive load boards.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
