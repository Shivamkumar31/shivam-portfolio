"use client";
import { motion } from "framer-motion";
import { GitFork, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Tutor OS",
    subtitle: "Edtech SaaS Platform",
    description:
      "Converts PDFs into personalized learning experiences — AI chat tutor, auto-generated quizzes, concept maps, viva-style sessions & exam-specific mode for JEE/NEET/UPSC/CAT students.",
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
    description:
      "Real-time chat with JWT authentication, user presence tracking, protected routes, and scalable MERN architecture for high concurrent traffic.",
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
    description:
      "Microservices-based platform with independent auth, media management, and business workflow services. RBAC for Admin, Provider & Customer roles.",
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
    description:
      "End-to-end AI app with YOLO model served via FastAPI. Sub-200ms inference latency, React dashboard for real-time image and video detection.",
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
    description:
      "ML classifier with 89%+ accuracy. TF-IDF vectorization, benchmarked Logistic Regression vs Naive Bayes vs SVM — exposed via FastAPI with React frontend.",
    tags: ["Python", "scikit-learn", "FastAPI", "React.js", "NLP"],
    github: "https://github.com/Shivamkumar31/SENTIMATE-ANYLAYSIS",
    live: "https://appsentimentpy-45ungfppzqtgihqe84vf4f.streamlit.app/",
    stats: "89%+ accuracy",
    featured: false,
    color: "#8b5cf6",
  },
];

const nonFeatured = projects.filter((p) => !p.featured);

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Projects" title="Things I've Built" />

        {/* ── Featured project ── */}
        {projects
          .filter((p) => p.featured)
          .map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 rounded-3xl relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(108,99,255,0.13) 0%, rgba(167,139,250,0.05) 100%)",
                border: "1px solid rgba(108,99,255,0.35)",
                padding: "2.5rem 2.5rem",
              }}
            >
              {/* decorative glow */}
              <div
                className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(108,99,255,0.25), transparent 70%)",
                  transform: "translate(35%, -35%)",
                }}
              />

              {/* header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5 relative z-10">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "rgba(108,99,255,0.22)", color: "#a78bfa" }}
                    >
                      ⭐ Featured Project
                    </span>
                    <span className="text-xs" style={{ color: "#6e6e8a" }}>
                      {p.stats}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight" style={{ color: "#f0f0ff" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "#7070a0" }}>
                    {p.subtitle}
                  </p>
                </div>

                {/* links */}
                <div className="flex gap-3 mt-1">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="flex items-center justify-center w-9 h-9 rounded-xl transition-colors"
                    style={{ border: "1px solid #2e2e42", color: "#8888aa" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#a78bfa";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(108,99,255,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#8888aa";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2e2e42";
                    }}
                  >
                    <GitFork size={17} />
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live demo"
                    className="flex items-center justify-center w-9 h-9 rounded-xl transition-colors"
                    style={{ border: "1px solid #2e2e42", color: "#8888aa" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#a78bfa";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(108,99,255,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#8888aa";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2e2e42";
                    }}
                  >
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>

              <p
                className="text-base leading-7 mb-7 relative z-10"
                style={{ color: "#aaaac8", maxWidth: "700px" }}
              >
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono"
                    style={{
                      background: "rgba(108,99,255,0.14)",
                      color: "#a78bfa",
                      border: "1px solid rgba(108,99,255,0.22)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        {/* ── Other projects grid ── */}
        {/* 2-col on md, stays 2-col on xl so last lone card doesn't float left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nonFeatured.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="rounded-2xl flex flex-col"
              style={{
                background: "#13131c",
                border: "1px solid #22223a",
                padding: "1.75rem",
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = p.color + "66";
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${p.color}18`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#22223a";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* card header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0 pr-3">
                  <span
                    className="inline-block text-xs px-2 py-0.5 rounded-full font-medium mb-2"
                    style={{ background: `${p.color}1a`, color: p.color }}
                  >
                    {p.stats}
                  </span>
                  <h3 className="text-base font-bold leading-snug" style={{ color: "#eeeeff" }}>
                    {p.title}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: "#6a6a8a" }}>
                    {p.subtitle}
                  </p>
                </div>

                {/* links */}
                <div className="flex gap-2 flex-shrink-0">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors"
                    style={{ color: "#6a6a8a" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = p.color)
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#6a6a8a")
                    }
                  >
                    <GitFork size={15} />
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live demo"
                    className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors"
                    style={{ color: "#6a6a8a" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = p.color)
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#6a6a8a")
                    }
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>

              {/* description */}
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "#7878a0" }}>
                {p.description}
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono"
                    style={{
                      background: "#0d0d16",
                      color: "#7070a0",
                      border: "1px solid #1e1e30",
                    }}
                  >
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
      className="mb-16 text-center"
    >
      <span
        className="text-xs font-mono uppercase tracking-widest"
        style={{ color: "#6c63ff" }}
      >
        {label}
      </span>
      <h2 className="text-4xl font-bold mt-2" style={{ color: "#f0f0ff" }}>
        {title}
      </h2>
    </motion.div>
  );
}

export { SectionHeader };