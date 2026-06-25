import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPalette,
  FaCode,
  FaServer,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "MERN Stack Development",
      description:
        "End-to-end web applications using MongoDB, Express, React, and Node.js with scalable architecture and RESTful APIs.",
      icon: <FaCode className="text-4xl md:text-5xl text-emerald-400" />,
      technologies: ["MongoDB", "Express", "React", "Node.js", "Redux"],
      color: "from-emerald-400 to-emerald-600",
    },
    {
      title: "Frontend Development",
      description:
        "Responsive, high-performance UIs with React.js, Redux Toolkit, Tailwind CSS, and cross-browser compatibility.",
      icon: <FaReact className="text-4xl md:text-5xl text-cyan-400" />,
      technologies: ["React", "Redux", "Tailwind", "Bootstrap", "Helmet"],
      color: "from-cyan-400 to-cyan-600",
    },
    {
      title: "Backend & APIs",
      description:
        "Secure REST API design, JWT/OAuth authentication, and server-side business logic with Node.js & Express.",
      icon: <FaServer className="text-4xl md:text-5xl text-green-400" />,
      technologies: ["Node.js", "Express", "JWT", "REST APIs", "OAuth"],
      color: "from-green-400 to-green-600",
    },
    {
      title: "Database Management",
      description:
        "Schema design, queries, and optimization for both NoSQL (MongoDB) and relational (MySQL) databases.",
      icon: <FaDatabase className="text-4xl md:text-5xl text-yellow-400" />,
      technologies: ["MongoDB", "MySQL", "Mongoose", "Indexing"],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "UI/UX Design",
      description:
        "Intuitive interface design and prototyping in Figma, focused on user-centric digital experiences.",
      icon: <FaPalette className="text-4xl md:text-5xl text-purple-400" />,
      technologies: ["Figma", "Prototyping", "Wireframing", "User Research"],
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Performance Optimization",
      description:
        "Lazy loading, code splitting, and database query optimization to ensure fast, reliable applications.",
      icon: <SiTailwindcss className="text-4xl md:text-5xl text-cyan-300" />,
      technologies: ["Lazy Loading", "Code Splitting", "Caching", "SEO"],
      color: "from-cyan-300 to-blue-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { y: -8, transition: { duration: 0.3 } },
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-green-800 py-16 md:py-24 px-4 sm:px-6 lg:px-8 rounded-tl-3xl rounded-tr-3xl">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Services
          </h2>
          <div className="w-20 h-1 bg-white/30 mx-auto rounded-full mb-4" />
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Professional development services backed by real industry experience
            at Peham and personal projects.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-gray-100 p-3 rounded-xl">
                    {service.icon}
                  </div>
                  <span className="bg-zinc-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-600 mb-6 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-zinc-100 text-zinc-700 text-xs md:text-sm px-3 py-1.5 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  onClick={scrollToContact}
                  className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                    hoveredCard === index
                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                      : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
