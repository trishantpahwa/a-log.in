"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function ContactSection() {
  return (
    <section id="quote" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-cyan rounded-full mix-blend-screen filter blur-[100px] opacity-20" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let&apos;s build your <br/><span className="text-gradient">dream website.</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Fill out the form below and we&apos;ll get back to you within 24 hours with a custom strategy and quote.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  📍
                </div>
                <span>Available Worldwide</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  ⚡️
                </div>
                <span>Fast Turnaround</span>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
              <input 
                id="name" 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
              <input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="instagram" className="text-sm font-medium text-gray-300">Instagram Handle (Optional)</label>
              <input 
                id="instagram" 
                type="text" 
                placeholder="@yourbrand" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="project" className="text-sm font-medium text-gray-300">Tell us about your project</label>
              <textarea 
                id="project" 
                rows={4}
                placeholder="I need a landing page for my new product..." 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all resize-none"
              ></textarea>
            </div>

            <Button type="button" size="lg" className="w-full">
              Send Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
