import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useActiveSection } from "./hooks/useActiveSection";
import Navbar from "./components/Navbar";
import LandingPage from "./LandingPage";
import Marquee from "./Marquee";
import Services from "./Services";
import Projects from "./Projects";
import Preloader from "./components/Preloader";
import { motion } from "framer-motion";
import About from "./About";
import Footer from "./components/Footer";
import Contact from "./Contact";

function AppContent() {
  const activeSection = useActiveSection();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Scroll to top on reload
  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = "manual";
  }, []);

  // Preloader
  useEffect(() => {
    let animationFrame;
    let startTime = null;
    const duration = 1500;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      if (elapsed < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setProgress(100);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const sectionNames = {
    top: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
  };

  const pageTitle =
    activeSection === "top"
      ? "Hafiz Muhammad Shayan Ali | Software Engineer & MERN Developer"
      : `${sectionNames[activeSection]} | Hafiz Muhammad Shayan Ali`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Portfolio of Hafiz Muhammad Shayan Ali — Frontend Developer at Peham, BS Software Engineering at NUML, specializing in React, Node.js, and MongoDB."
        />
        <meta
          name="keywords"
          content="Shayan Ali, Software Engineer, Frontend Developer, MERN Stack, React, Node.js, Islamabad"
        />
        <meta name="author" content="Hafiz Muhammad Shayan Ali" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/" />
        <meta
          property="og:title"
          content="Hafiz Muhammad Shayan Ali | Software Engineer"
        />
        <meta
          property="og:description"
          content="Portfolio of Hafiz Muhammad Shayan Ali — MERN Stack Developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hafiz Muhammad Shayan Ali | Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Hafiz Muhammad Shayan Ali — MERN Stack Developer."
        />
      </Helmet>

      <div className="w-full min-h-screen text-white bg-zinc-900">
        {isLoading && (
          <Preloader
            progress={progress}
            onComplete={() => setIsLoading(false)}
          />
        )}

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: isLoading ? 0.5 : 1,
            opacity: isLoading ? 0 : 1,
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="origin-top"
        >
          <Navbar activeSection={activeSection} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingPage />
                  <Marquee />
                  <section id="about">
                    <About />
                  </section>
                  <section id="services">
                    <Services />
                  </section>
                  <section id="projects">
                    <Projects />
                  </section>
                  <section id="contact">
                    <Contact />
                  </section>
                </>
              }
            />
          </Routes>
          <Footer />
        </motion.div>
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
