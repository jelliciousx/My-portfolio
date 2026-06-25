import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVite,
} from "react-icons/si";
import { DiPython } from "react-icons/di";

const skills = [
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-zinc-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Python", icon: <DiPython className="text-yellow-300" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
];

const highlights = [
  {
    icon: <FaBriefcase className="text-emerald-400 text-2xl" />,
    title: "Experience",
    value: "Frontend Developer",
    sub: "Peham • Oct 2025 – Mar 2026",
  },
  {
    icon: <FaGraduationCap className="text-emerald-400 text-2xl" />,
    title: "Education",
    value: "BS Software Engineering",
    sub: "NUML • 2022 – 2026",
  },
  {
    icon: <FaReact className="text-emerald-400 text-2xl" />,
    title: "Focus",
    value: "MERN Stack",
    sub: "React • Node • MongoDB",
  },
];

function About() {
  return (
    <div
      id="about"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-zinc-900 text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            About <span className="text-emerald-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12 md:mb-16"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-zinc-200">
            Software Engineer & MERN Stack Developer
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            BS Software Engineering student at NUML (2022–2026) with hands-on
            experience building scalable full-stack applications.Transforming
            complex requirements into clean, performant web interfaces.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-6 text-center hover:border-emerald-500/30 transition-colors duration-300"
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                {item.title}
              </p>
              <p className="text-white font-bold text-lg">{item.value}</p>
              <p className="text-zinc-400 text-sm mt-1">{item.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 justify-center md:justify-start">
            <span className="w-8 h-1 bg-emerald-500 rounded-full" />
            Professional Summary
          </h3>

          <div className="space-y-4 text-zinc-300 leading-relaxed text-base md:text-lg text-justify">
            <p>
              I am a <strong className="text-white">Frontend Developer</strong>{" "}
              at <strong className="text-emerald-400">Peham</strong> (Oct 2025 –
              Mar 2026), specializing in building responsive user interfaces
              with{" "}
              <strong className="text-emerald-400">
                React.js, Redux Toolkit, and Tailwind CSS
              </strong>
              . I implement client-side routing, optimize SEO with React Helmet,
              and integrate secure REST APIs using Axios.
            </p>
            <p>
              My backend experience includes structuring{" "}
              <strong className="text-white">RESTful APIs</strong> with Node.js
              and Express, securing authentication architectures (JWT, OAuth),
              and managing databases with{" "}
              <strong className="text-white">MongoDB</strong> and{" "}
              <strong className="text-white">MySQL</strong>.
            </p>
            <p>
              I focus on performance optimization through lazy loading, code
              splitting, and cross-browser compatibility, ensuring
              multi-platform uniformity across all devices.
            </p>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 justify-center md:justify-start">
            <span className="w-8 h-1 bg-emerald-500 rounded-full" />
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="flex items-center gap-2 bg-zinc-800/80 border border-zinc-700 px-4 py-2.5 rounded-full text-sm font-medium hover:border-emerald-500/50 hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-lg">{skill.icon}</span>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
