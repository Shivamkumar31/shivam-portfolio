"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Projects", "Skills", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid #2a2a3a" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.span
          className="text-xl font-bold"
          style={{ color: "#6c63ff" }}
          whileHover={{ scale: 1.05 }}
        >
          SK.
        </motion.span>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm transition-colors duration-200 cursor-pointer"
              style={{ color: "#8888aa" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0f0ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8888aa")}
            >
              {l}
            </button>
          ))}
        </div>

        <motion.a
          href="mailto:shivam23bcy55@iiitkottayam.ac.in"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-4 py-2 rounded-lg text-sm font-medium"
          style={{ background: "#6c63ff", color: "white" }}
        >
          Hire Me
        </motion.a>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-1">
          <span className="block w-5 h-0.5" style={{ background: "#f0f0ff", transform: open ? "rotate(45deg) translate(4px,4px)" : "none", transition: "0.3s" }} />
          <span className="block w-5 h-0.5" style={{ background: "#f0f0ff", opacity: open ? 0 : 1, transition: "0.3s" }} />
          <span className="block w-5 h-0.5" style={{ background: "#f0f0ff", transform: open ? "rotate(-45deg) translate(4px,-4px)" : "none", transition: "0.3s" }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 flex flex-col gap-4 px-2 pb-4"
            style={{ borderTop: "1px solid #2a2a3a" }}
          >
            {links.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="text-left py-2 text-sm" style={{ color: "#8888aa" }}>
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
