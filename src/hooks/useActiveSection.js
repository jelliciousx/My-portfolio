import { useState, useEffect } from "react";

const sections = [
  { id: "top", name: "Home" },
  { id: "about", name: "About" },
  { id: "services", name: "Services" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sectionRefs = {};
    sections.forEach((s) => {
      if (s.id !== "top") {
        sectionRefs[s.id] = document.getElementById(s.id);
      }
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const landingHeight = window.innerHeight;
      let current = "top";

      if (scrollY >= landingHeight - 120) {
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section.id === "top") continue;
          const el = sectionRefs[section.id];
          if (el && el.offsetTop <= scrollY + 120) {
            current = section.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}