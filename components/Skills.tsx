"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "./Projects";

const skillGroups = [
  {
    label: "Frontend",
    color: "#6c63ff",
    skills: ["Next.js", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    label: "Backend",
    color: "#10b981",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Auth", "WebSockets"],
  },
  {
    label: "Databases",
    color: "#f59e0b",
    skills: ["MongoDB", "MongoDB Atlas", "MySQL", "Supabase"],
  },
  {
    label: "AI / ML",
    color: "#ef4444",
    skills: ["Groq API", "scikit-learn", "TensorFlow", "YOLO", "OpenCV", "NLTK", "SpaCy"],
  },
  {
    label: "Tools & Cloud",
    color: "#8b5cf6",
    skills: ["Git", "GitHub", "Vercel", "Render", "Docker", "Cloudinary", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "rgba(16,16,25,0.6)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Skills" title="My Tech Stack" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="rounded-2xl p-6"
              style={{ background: "#16161f", border: "1px solid #2a2a3a" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full" style={{ background: group.color }} />
                <span className="text-sm font-semibold" style={{ color: "#f0f0ff" }}>{group.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.04 }}
                    whileHover={{ scale: 1.05, borderColor: group.color }}
                    className="px-3 py-1 rounded-lg text-xs font-mono cursor-default"
                    style={{ background: `${group.color}12`, color: group.color, border: `1px solid ${group.color}30`, transition: "border-color 0.2s" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
