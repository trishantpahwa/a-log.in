"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Strategy & Design",
    description: "We analyze your brand, target audience, and competition to craft a design that converts."
  },
  {
    num: "02",
    title: "Development",
    description: "We build your mobile-first website using modern frameworks ensuring lightning speed and flawless functionality."
  },
  {
    num: "03",
    title: "Launch & Scale",
    description: "Your site goes live. We make sure it's optimized for search engines and ready to handle Instagram ad traffic."
  }
];

export function ProcessSteps() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent opacity-20 hidden md:block" />
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          How We Work
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          A seamless, transparent process designed to get your business online fast.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-full bg-[#030014] border border-white/10 text-xl font-bold flex items-center justify-center mb-6 text-accent-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all">
              {step.num}
            </div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
