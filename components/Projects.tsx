"use client";
import { motion } from "framer-motion";
import { GitFork, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "AI Tutor OS",
    subtitle: "Edtech SaaS Platform",
    description: "Converts PDFs into personalized learning experiences — AI chat tutor, auto-generated quizzes, concept maps, viva-style sessions & exam-specific mode for JEE/NEET/UPSC/CAT students.",
    tags: ["Next.js", "Groq API", "MongoDB Atlas", "Web Speech API", "Vercel"],
    github: "https://github.com/Shivamkumar31/AI-TUTOR-OS",
    live: "https://ai-tutor-os.vercel.app/",
    stats: "100+ users · Google indexed · Vercel deployed",
    featured: true,
    color: "#6c63ff",
  },
  {
    title: "Full Stack Chat App",
    subtitle: "Real-time Messaging",
    description: "Real-time chat with JWT authentication, user presence tracking, protected routes, and scalable MERN architecture for high concurrent traffic.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Shivamkumar31/chat-app",
    live: "https://chat-app-ruddy-nine-52.vercel.app/login",
    stats: "Live on Vercel",
    featured: false,
    color: "#10b981",
  },
  {
    title: "Microservice Service Hub",
    subtitle: "Scalable Platform",
    description: "Microservices-based platform with independent auth, media management, and business workflow services. RBAC for Admin, Provider & Customer roles.",
    tags: ["MERN", "Microservices", "Cloudinary", "JWT", "RBAC"],
    github: "https://github.com/Shivamkumar31/Servicehub",
    live: "https://servicehub-mu.vercel.app/",
    stats: "Live on Vercel",
    featured: false,
    color: "#f59e0b",
  },
  {
    title: "AI Object Detection App",
    subtitle: "Computer Vision",
    description: "End-to-end AI app with YOLO model served via FastAPI. Sub-200ms inference latency, React dashboard for real-time image and video detection.",
    tags: ["YOLO", "FastAPI", "React.js", "OpenCV", "Render"],
    github: "https://github.com/Shivamkumar31",
    live: "https://object1.streamlit.app/",
    stats: "Live on Render",
    featured: false,
    color: "#ef4444",
  },
  {
    title: "Sentiment Analysis System",
    subtitle: "NLP Web App",
    description: "ML classifier with 89%+ accuracy. TF-IDF vectorization, benchmarked Logistic Regression vs Naive Bayes vs SVM — exposed via FastAPI with React frontend.",
    tags: ["Python", "scikit-learn", "FastAPI", "React.js", "NLP"],
    github: "https://github.com/Shivamkumar31/SENTIMATE-ANYLAYSIS",
    live: "https://appsentimentpy-45ungfppzqtgihqe84vf4f.streamlit.app/",
    stats: "89%+ accuracy",
    featured: false,
    color: "#8b5cf6",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Projects" title="Things I've Built" />

        {/* Featured project */}
        {projects.filter((p) => p.featured).map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 rounded-3xl p-10 md:p-12 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(167,139,250,0.06) 100%)",
              border: "1px solid rgba(108,99,255,0.3)",
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #6c63ff, transparent)", transform: "translate(30%, -30%)" }} />

            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: "rgba(108,99,255,0.2)", color: "#a78bfa" }}>
                    ⭐ Featured Project
                  </span>
                  <span className="text-sm" style={{ color: "#8888aa" }}>{p.stats}</span>
                </div>
                <h3 className="text-3xl font-bold" style={{ color: "#f0f0ff" }}>{p.title}</h3>
                <p className="text-sm mt-1" style={{ color: "#8888aa" }}>{p.subtitle}</p>
              </div>
              <div className="flex gap-3">
                <motion.a href={p.github} target="_blank" whileHover={{ scale: 1.1 }} className="p-2 rounded-lg" style={{ border: "1px solid #2a2a3a", color: "#8888aa" }}>
                  <GitFork size={18} />
                </motion.a>
                <motion.a href={p.live} target="_blank" whileHover={{ scale: 1.1 }} className="p-2 rounded-lg" style={{ border: "1px solid #2a2a3a", color: "#8888aa" }}>
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </div>

            <p className="text-base leading-relaxed mb-6" style={{ color: "#aaaacc", maxWidth: "680px" }}>{p.description}</p>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-lg text-xs font-mono" style={{ background: "rgba(108,99,255,0.15)", color: "#a78bfa", border: "1px solid rgba(108,99,255,0.2)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Other projects grid */}
       <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.filter((p) => !p.featured).map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02, borderColor: p.color }}
              className="rounded-3xl p-7 md:p-8 flex flex-col h-full"
              style={{ background: "#16161f", border: "1px solid #2a2a3a", transition: "border-color 0.3s" }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs px-2 py-0.5 rounded-full mb-2 inline-block" style={{ background: `${p.color}20`, color: p.color }}>
                    {p.stats}
                  </span>
                  <h3 className="text-lg font-bold" style={{ color: "#f0f0ff" }}>{p.title}</h3>
                  <p className="text-xs mt-0.5" style={{ color: "#8888aa" }}>{p.subtitle}</p>
                </div>
                <div className="flex gap-2">
                  <a href={p.github} target="_blank" className="transition-colors" style={{ color: "#8888aa" }}>
                    <GitFork size={16} />
                  </a>
                  <a href={p.live} target="_blank" className="transition-colors" style={{ color: "#8888aa" }}>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#8888aa" }}>{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono" style={{ background: "#111118", color: "#8888aa", border: "1px solid #2a2a3a" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20 text-center"
    >
      <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "#6c63ff" }}>{label}</span>
      <h2 className="text-4xl font-bold mt-2" style={{ color: "#f0f0ff" }}>{title}</h2>
    </motion.div>
  );
}

export { SectionHeader };
