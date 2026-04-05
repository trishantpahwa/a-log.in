"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-purple rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-cyan rounded-full mix-blend-screen filter blur-[120px] opacity-30 animation-delay-2000 animate-float" />

      <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium text-gray-300"
        >
          <Sparkles className="w-4 h-4 text-accent-cyan" />
          <span>Premium Web Development Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          Stop Losing Customers to <br className="hidden md:block" />
          <span className="text-gradient hover:animate-gradient transition-all bg-[length:200%_auto]">Ugly Websites.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl"
        >
          We build lightning-fast, high-converting websites optimized for mobile users. Turn your Instagram traffic into paying customers today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="w-full sm:w-auto group">
            Get Your Free Quote
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            View Our Work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
