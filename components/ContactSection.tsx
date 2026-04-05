"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/Button";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", project: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", project: "" });
    } catch {
      setStatus("error");
    }
  };

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

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number (Optional)</label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 234 567 8900"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="project" className="text-sm font-medium text-gray-300">Tell us about your project</label>
              <textarea
                id="project"
                rows={4}
                placeholder="I need a landing page for my new product..."
                value={form.project}
                onChange={handleChange}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all resize-none"
              ></textarea>
            </div>

            {status === "success" && (
              <p className="text-green-400 text-sm">Request sent! We&apos;ll get back to you within 24 hours.</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Request"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
