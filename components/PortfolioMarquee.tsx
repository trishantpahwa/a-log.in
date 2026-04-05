"use client";

import { motion } from "framer-motion";

const items = [
  { name: "The Showsmiths", url: "https://theshowsmiths.com" },
  { name: "Plant Community", url: "https://plantcommunity-in.vercel.app" },
  { name: "apis.a-log.in", url: "https://apis.a-log.in" },
  { name: "Snippet Typing", url: "https://snippet-typing.trishantpahwa.me/" },
  { name: "Black Hole Game", url: "https://blackhole-web-app.onrender.com/" },
  { name: "Skrubbl", url: "https://skrubbl.trishantpahwa.me" }
];

export function PortfolioMarquee() {
  return (
    <section id="work" className="py-20 relative border-y border-white/5 bg-black/50">
      <div className="text-center mb-10">
        <h3 className="text-xl text-gray-400 font-medium">Trusted by leading brands</h3>
      </div>

      <div className="flex overflow-hidden relative">
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
          {[...items, ...items].map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-64 h-40 md:w-80 md:h-52 rounded-xl overflow-hidden glass-panel shrink-0 group"
            >
              <iframe
                src={item.url}
                title={item.name}
                className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-50 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-opacity duration-500"
                style={{ pointerEvents: "none", border: "none", display: "block" }}
                scrolling="no"
                tabIndex={-1}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-semibold text-white">{item.name}</span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>

  );
}
