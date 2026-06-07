"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "./Projects";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const items = [
  {
    type: "work",
    icon: <Briefcase size={16} />,
    title: "Full Stack Developer Intern",
    org: "kognitiminds Pvt. Ltd.",
    period: "Jul 2025 – Dec 2025",
    location: "Remote, India",
    color: "#6c63ff",
    points: [
      "Built production-ready school management platform — MERN stack, student/teacher/admin workflows",
      "Designed responsive React.js UI with Framer Motion animations",
      "Architected RESTful APIs with JWT auth and role-based authorization",
      "Managed MongoDB operations ensuring reliability across iterative feature releases",
    ],
  },
  {
    type: "education",
    icon: <GraduationCap size={16} />,
    title: "B.Tech Computer Science",
    org: "IIIT Kottayam",
    period: "Aug 2023 – May 2027",
    location: "Kottayam, Kerala",
    color: "#10b981",
    points: [
      "Data Structures & Algorithms, Machine Learning, Database Systems, Computer Networks",
      "Active builder — shipped multiple full-stack projects during coursework",
    ],
  },
  {
    type: "cert",
    icon: <Award size={16} />,
    title: "Certifications",
    org: "Udemy · Coursera",
    period: "2024 – 2025",
    location: "",
    color: "#f59e0b",
    points: [
      "Complete Full Stack Web Development — Angela Yu, Udemy",
      "Machine Learning Specialization — Andrew Ng, Coursera",
      "AI & Machine Learning Bootcamp — Udemy",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Experience" title="My Journey" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #6c63ff, #2a2a3a)" }} />

          <div className="flex flex-col gap-10">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex gap-8"
              >
                {/* Dot */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center relative z-10"
                  style={{ background: `${item.color}20`, border: `1px solid ${item.color}40`, color: item.color }}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl p-6" style={{ background: "#16161f", border: "1px solid #2a2a3a" }}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: "#f0f0ff" }}>{item.title}</h3>
                      <p className="text-sm font-medium" style={{ color: item.color }}>{item.org}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-mono" style={{ color: "#8888aa" }}>{item.period}</p>
                      {item.location && <p className="text-xs" style={{ color: "#555570" }}>{item.location}</p>}
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {item.points.map((pt, pi) => (
                      <li key={pi} className="flex gap-2 text-sm" style={{ color: "#8888aa" }}>
                        <span style={{ color: item.color, flexShrink: 0, marginTop: "2px" }}>▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
