import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import msbEnergy from "./assets/msb-energy.png";
import jobSphere from "./assets/jobsphere.png";
// import fixFinder from "./assets/fixfinder.png";

const projects = [
  {
    id: "msb-energy",
    title: "MSB Energy Group",
    description:
      "Full-stack ecosystem with 3 sub-websites (Logistics, Petroleum, ECON LPG). Features auth system, admin dashboard, Stripe payments, subscription plans, and a custom RAG-based chatbot.",
    image: null, // Replace with import when you have the photo
    link: "#", // Replace with live URL
    repo: "#", // Replace with GitHub URL
    tags: ["React", "Redux", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
  },
  {
    id: "jobsphere",
    title: "JobSphere",
    description:
      "Job provision platform with backend workflow handling authentication, resume uploads, and admin evaluation modules for approving or rejecting applicants.",
    image: jobSphere,
    link: "https://jobsphereofficial.netlify.app/",
    repo: "https://github.com/jelliciousx/JobSphere",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
  },
  {
    id: "fixfinder",
    title: "FixFinder Web App",
    description:
      "Service marketplace connecting users with local providers. Built optimized search, filtration, and scheduling with a scalable Express.js backend.",
    image: null,
    link: "#",
    repo: "#",
    tags: ["Express.js", "JavaScript", "HTML", "Fetch API"],
  },
];

function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div
      id="projects"
      className="w-full py-16 md:py-24 bg-white rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
          {/* <p className="mt-4 text-zinc-600 max-w-2xl mx-auto text-base md:text-lg">
            Selected work from my portfolio. Replace the placeholders below with
            your project screenshots.
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative w-full h-[45vh] md:h-[55vh] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-zinc-100"
            >
              {/* Image or Placeholder */}
              <div className="w-full h-full">
                {project.image ? (
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={project.image}
                    alt={project.title}
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-200 flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-zinc-300 flex items-center justify-center">
                      <span className="text-2xl font-bold text-zinc-500">
                        {project.title[0]}
                      </span>
                    </div>
                    <span className="text-zinc-500 text-sm font-medium">
                      Add Project Photo
                    </span>
                  </div>
                )}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                      {project.title}
                    </h3>
                    <p className="text-zinc-300 text-sm md:text-base max-w-md mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs md:text-sm text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300"
                      aria-label="Live demo"
                    >
                      <FaExternalLinkAlt className="text-sm md:text-base" />
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300"
                      aria-label="Source code"
                    >
                      <FaGithub className="text-sm md:text-base" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
