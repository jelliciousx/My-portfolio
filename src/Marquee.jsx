import React from "react";
import { motion } from "framer-motion";

const items = [
  "MERN Stack",
  "React.js",
  "Redux Toolkit",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "Frontend Development",
  "UI/UX Design",
];

function Marquee() {
  return (
    <div className="w-full py-5 md:py-6 bg-emerald-950/30 border-y border-zinc-800 overflow-hidden">
      <div className="flex whitespace-nowrap">
        {[...Array(4)].map((_, setIndex) => (
          <motion.div
            key={setIndex}
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
            className="flex items-center shrink-0 pr-8 md:pr-16"
          >
            {items.map((item, i) => (
              <span
                key={i}
                className="text-[3vw] md:text-[2vw] lg:text-[1.6vw] font-semibold uppercase tracking-wider text-zinc-500 mx-4 md:mx-8 flex items-center gap-3 md:gap-5"
              >
                <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-emerald-500 rounded-full shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
