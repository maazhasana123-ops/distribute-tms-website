"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-semibold text-xl tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 rounded-md bg-brand flex items-center justify-center text-brand-foreground font-bold">
              D
            </span>
            Distribute<span className="text-muted-foreground font-medium">TMS</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link href="#carrier-portal" className="hover:text-foreground transition-colors">Carrier Portal</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="https://app.distributetms.com/login" className="text-sm font-medium hover:text-foreground transition-colors">
            Log in
          </Link>
          <Button asChild className="hidden md:inline-flex">
            <Link href="https://app.distributetms.com/login">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
