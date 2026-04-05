"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder images for portfolio - using generated unsplash or placehold
// Ideally, you would use actual screenshots of websites here.
const items = [
  { name: "Brand A", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Brand B", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Brand C", img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Brand D", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Brand E", img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600&h=400" },
];

export function PortfolioMarquee() {
  return (
    <section className="py-20 overflow-hidden relative border-y border-white/5 bg-black/50">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030014] to-transparent z-10 hidden md:block" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030014] to-transparent z-10 hidden md:block" />
      
      <div className="text-center mb-10">
        <h3 className="text-xl text-gray-400 font-medium">Trusted by leading brands</h3>
      </div>

      <div className="flex">
        <motion.div
          className="flex space-x-6 px-6 whitespace-nowrap min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* We duplicate the array to create an infinite loop effect seamlessly. */}
          {[...items, ...items, ...items].map((item, idx) => (
            <div 
              key={idx} 
              className="relative w-64 h-40 md:w-80 md:h-52 rounded-xl overflow-hidden glass-panel shrink-0 group"
            >
              <Image 
                src={item.img} 
                alt={item.name} 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-semibold text-white">{item.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
