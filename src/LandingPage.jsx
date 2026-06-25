import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUpLong, FaGithub, FaLinkedinIn } from "react-icons/fa6";

function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      id="top"
      className="w-full min-h-[100dvh] bg-zinc-900 pt-20 md:pt-24 lg:pt-28 text-white flex flex-col justify-between"
    >
      {/* Heading */}
      <div className="px-5 md:px-10 lg:px-20 mt-4 md:mt-8 lg:mt-12 flex-1 flex flex-col justify-center">
        {["Turning", "Ideas Into", "Digital Reality"].map((item, index) => (
          <div className="overflow-hidden" key={index}>
            <div className="flex items-center gap-2 md:gap-4">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 5 }}
                  className="w-10 h-5 md:w-[9vw] md:h-[5vw] bg-emerald-600 mt-1 md:mt-3 relative rounded-lg md:rounded-xl shrink-0"
                />
              )}
              <h1 className="uppercase text-[11vw] md:text-[8vw] lg:text-[7vw] leading-[1.05] md:leading-[1] tracking-tighter font-bold">
                {item}
              </h1>
            </div>
          </div>
        ))}
        <p className="mt-4 md:mt-6 text-zinc-400 text-base md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
          Software Engineer & Frontend Developer. Building MERN stack
          applications with modern UI/UX.
        </p>
      </div>

      {/* Socials */}
      <div className="w-full flex justify-end px-5 md:px-12 lg:px-20 mt-6 md:mt-8">
        <div className="flex space-x-3 md:space-x-4">
          <a
            href="https://github.com/jelliciousx"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg md:text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/shayan-ali-791589325"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-zinc-800 text-white hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-lg md:text-xl" />
          </a>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="border-t border-zinc-800 mt-6 md:mt-8 px-5 md:px-12 lg:px-20 py-5 md:py-6 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-start md:items-center">
        <div className="flex flex-col gap-0.5">
          <p className="text-sm md:text-base font-medium text-zinc-300">
            Hafiz Muhammad Shayan Ali
          </p>
          <p className="text-xs md:text-sm text-zinc-500 font-light tracking-tight">
            BS Software Engineering • NUML • Islamabad
          </p>
        </div>

        <button
          className={`flex items-center gap-3 md:gap-4 w-full md:w-auto cursor-pointer transition-all duration-300 group ${
            isHovered ? "text-black" : "text-white"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={scrollToContact}
        >
          <div
            className={`px-5 py-2.5 border-[1.5px] rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              isHovered
                ? "bg-white border-white"
                : "border-zinc-700 text-zinc-300 group-hover:border-zinc-500"
            }`}
          >
            Let's Work Together
          </div>
          <div
            className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-[1.5px] transition-all duration-300 ${
              isHovered
                ? "bg-white border-white"
                : "border-zinc-700 group-hover:border-zinc-500"
            }`}
          >
            <span
              className={`rotate-45 transition-colors duration-300 ${
                isHovered ? "text-black" : "text-white"
              }`}
            >
              <FaArrowUpLong className="text-sm md:text-base" />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
