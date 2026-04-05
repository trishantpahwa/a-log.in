"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, Search, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Smartphone className="w-6 h-6 text-accent-cyan" />,
    title: "Mobile First Design",
    description: "90% of your Instagram traffic is on mobile. We build your site to look and feel incredible specifically on smartphones."
  },
  {
    icon: <Zap className="w-6 h-6 text-accent-purple" />,
    title: "Lightning Fast",
    description: "Every second of load time drops conversions by 20%. We use Next.js to ensure your site is instantly interactive."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-accent-pink" />,
    title: "Conversion Optimized",
    description: "We don't just build pretty pages; we build funnels designed to turn clicks into clients."
  },
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: "SEO Ready",
    description: "Built-in optimization so you can be found on Google, not just social media."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function ValuePropSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Why Brands Choose <span className="text-gradient">Elevate</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We bring high-end web development to modern brands that want to dominate their niche.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((feature, idx) => (
          <motion.div 
            key={idx}
            variants={itemVariants}
            className="glass-panel rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 group"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-50">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
