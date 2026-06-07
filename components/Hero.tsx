"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, GitFork, Link2, Mail, ExternalLink } from "lucide-react";

const roles = ["Full Stack Developer", "Next.js Engineer", "MERN Stack Developer", "AI Product Builder"];

function AnimatedRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2500);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        style={{ color: "#a78bfa" }}
      >
        {roles[index]}
      </motion.span>
    </AnimatePresence>
  );
}

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 70%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#6c63ff 1px, transparent 1px), linear-gradient(90deg, #6c63ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
          style={{ background: "rgba(108,99,255,0.15)", border: "1px solid rgba(108,99,255,0.3)", color: "#a78bfa" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to internships — Available immediately
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-6xl md:text-8xl font-bold mb-4 leading-none"
          style={{
            background: "linear-gradient(135deg, #f0f0ff 0%, #a78bfa 50%, #6c63ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Shivam Kumar
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl mb-6 h-8"
        >
          <AnimatedRoles roles={roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#8888aa" }}
        >
          Final-year CS student at{" "}
          <span style={{ color: "#a78bfa" }}>IIIT Kottayam</span> building production-grade web apps with Next.js, React & AI.
          Launched{" "}
          <span style={{ color: "#a78bfa" }}>AI Tutor OS</span> — an edtech platform with{" "}
          <span style={{ color: "#6c63ff", fontWeight: 600 }}>100+ active users</span>, indexed on Google.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(108,99,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl font-semibold text-white cursor-pointer"
            style={{ background: "linear-gradient(135deg, #6c63ff, #a78bfa)" }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="https://github.com/Shivamkumar31"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl font-semibold flex items-center gap-2"
            style={{ border: "1px solid #2a2a3a", color: "#f0f0ff" }}
          >
            <GitFork size={16} /> GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/shivam-kumar-95a70324b/"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl font-semibold flex items-center gap-2"
            style={{ border: "1px solid #2a2a3a", color: "#f0f0ff" }}
          >
            <ExternalLink size={16} /> LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex gap-5 justify-center"
        >
          {[
            { icon: <GitFork size={20} />, href: "https://github.com/Shivamkumar31", label: "GitHub" },
            { icon: <Link2 size={20} />, href: "https://www.linkedin.com/in/shivam-kumar-95a70324b/", label: "LinkedIn" },
            { icon: <Mail size={20} />, href: "mailto:shivam23bcy55@iiitkottayam.ac.in", label: "Email" },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="transition-colors"
              style={{ color: "#8888aa" }}
              aria-label={label}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#6c63ff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#8888aa")}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8"
        style={{ color: "#2a2a3a" }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
