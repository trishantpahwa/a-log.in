"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function FooterCTA() {
  return (
    <footer className="relative py-24 px-6 overflow-hidden border-t border-white/5 bg-gradient-to-b from-transparent to-accent-purple/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-accent-purple rounded-full mix-blend-screen filter blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center space-y-8">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Ready to scale your <span className="text-gradient">business?</span>
        </motion.h2>

        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Don&apos;t let a poor website ruin your Instagram ad conversions. Let&apos;s build something extraordinary together.
        </p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
           <Button size="lg" className="w-full sm:w-auto px-12 py-5 text-lg shadow-[0_0_30px_rgba(255,0,127,0.4)]">
             Get a Free Proposal
           </Button>
        </motion.div>
      </div>

      <div className="relative z-10 mt-24 text-center border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Elevate Web Development. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
