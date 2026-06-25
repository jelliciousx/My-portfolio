import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (target) => {
    if (target === "top") {
      scrollToTop();
      return;
    }
    const element = document.getElementById(target);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleNav = (target) => {
    if (location.pathname === "/") {
      scrollToSection(target);
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(target), 300);
    }
  };

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/jelliciousx", label: "GitHub" },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/shayan-ali-791589325",
      label: "LinkedIn",
    },
    { icon: FaTwitter, url: "https://x.com/iam_Naahthing", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "Home", target: "top" },
    { name: "About", target: "about" },
    { name: "Services", target: "services" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
  ];

  const services = [
    "MERN Stack Development",
    "React Applications",
    "UI/UX Design",
    "REST API Design",
  ];

  return (
    <footer className="w-full bg-zinc-900 border-t border-zinc-800 pt-16 pb-8 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-emerald-500">SHAYAN</span> ALI
            </h2>
            <p className="text-zinc-400 mb-6 text-sm md:text-base leading-relaxed max-w-xs">
              Software Engineer & MERN Stack Developer crafting scalable,
              user-centric digital experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, url, label }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-800 text-white hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNav(link.target)}
                    className="text-zinc-400 hover:text-emerald-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-zinc-400 text-sm md:text-base">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Contact</h3>
            <ul className="space-y-4 text-zinc-400 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <FaEnvelope className="w-5 h-5 mt-0.5 text-emerald-500 shrink-0" />
                <span>shayanali21588@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="w-5 h-5 mt-0.5 text-emerald-500 shrink-0" />
                <span>+92 303 -------</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 mt-0.5 text-emerald-500 shrink-0" />
                <span>Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Hafiz Muhammad Shayan Ali. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <span className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </footer>
  );
};

export default Footer;
