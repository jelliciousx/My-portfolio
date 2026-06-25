import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ activeSection }) {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isTop, setIsTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", target: "top" },
    { name: "About", target: "about" },
    { name: "Services", target: "services" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
  ];

  // Scroll listener for navbar background only
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (target) => {
    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLinkClick = (target) => {
    scrollToSection(target);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full px-5 sm:px-8 md:px-12 lg:px-20 flex justify-between items-center z-50 transition-all duration-300 ${
          isMenuOpen
            ? "bg-zinc-950 py-4" // Hamesha solid black jab menu open ho
            : isTop
              ? "bg-transparent py-4"
              : "bg-zinc-900/95 backdrop-blur-md py-3 shadow-lg"
        }`}
      >
        {/* Brand */}
        <button
          onClick={() => handleLinkClick("top")}
          className="cursor-pointer focus:outline-none select-none relative z-50"
          aria-label="Go to top"
        >
          <span className="text-2xl md:text-3xl font-black tracking-tight">
            <span className="text-emerald-400">Port</span>
            <span className="text-white">folio</span>
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <button
                onClick={() => handleLinkClick(item.target)}
                className={`relative text-sm lg:text-base font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                  activeSection === item.target
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.name}
              </button>
              <div
                className={`absolute left-0 -bottom-1 h-0.5 bg-emerald-500 transition-all duration-300 ease-out ${
                  activeSection === item.target || hoveredLink === index
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white relative z-50 w-10 h-10 flex items-center justify-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {/* Mobile Menu - SEPARATE from navbar, always solid black */}
      <div
        className={`fixed inset-0 bg-zinc-950 z-40 transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-full"
        }`}
      >
        {/* Close button area */}
        <div className="absolute top-0 left-0 w-full px-5 py-4 flex justify-between items-center">
          <span className="text-2xl font-black tracking-tight">
            <span className="text-emerald-400">Port</span>
            <span className="text-white">folio</span>
          </span>
          <button
            onClick={toggleMenu}
            className="text-white w-10 h-10 flex items-center justify-center"
            aria-label="Close menu"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center gap-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(item.target)}
              className={`w-full text-center py-3 text-2xl font-semibold transition-all duration-300 relative ${
                activeSection === item.target
                  ? "text-emerald-400"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.name}
              {activeSection === item.target && (
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-12 h-0.5 bg-emerald-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
