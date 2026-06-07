"use client";
import { motion } from "framer-motion";
import { Mail, GitFork, Link2, MapPin, Phone } from "lucide-react";
import { SectionHeader } from "./Projects";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: "rgba(16,16,25,0.6)" }}>
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Contact" title="Let's Work Together" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-base leading-relaxed" style={{ color: "#8888aa" }}>
              I'm actively looking for frontend / full-stack internships. If you're building something
              exciting and want a developer who ships fast — let's talk.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { icon: <Mail size={16} />, label: "Email", value: "shivam23bcy55@iiitkottayam.ac.in", href: "mailto:shivam23bcy55@iiitkottayam.ac.in" },
                { icon: <Phone size={16} />, label: "Phone", value: "+91 9508280822", href: "tel:+919508280822" },
                { icon: <MapPin size={16} />, label: "Location", value: "IIIT Kottayam, Kerala, India", href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(108,99,255,0.15)", color: "#6c63ff" }}>
                    {icon}
                  </span>
                  <div>
                    <p className="text-xs" style={{ color: "#555570" }}>{label}</p>
                    {href
                      ? <a href={href} className="text-sm transition-colors" style={{ color: "#f0f0ff" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#f0f0ff")}>{value}</a>
                      : <p className="text-sm" style={{ color: "#f0f0ff" }}>{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
              {[
                { icon: <GitFork size={20} />, href: "https://github.com/Shivamkumar31", label: "GitHub" },
                { icon: <Link2 size={20} />, href: "https://www.linkedin.com/in/shivam-kumar-95a70324b/", label: "LinkedIn" },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  whileHover={{ scale: 1.1, color: "#6c63ff" }}
                  className="p-3 rounded-xl transition-colors"
                  style={{ border: "1px solid #2a2a3a", color: "#8888aa" }}
                  aria-label={label}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 flex flex-col items-center justify-center text-center"
            style={{
              background: "linear-gradient(135deg, rgba(108,99,255,0.15) 0%, rgba(167,139,250,0.08) 100%)",
              border: "1px solid rgba(108,99,255,0.3)",
            }}
          >
            <div className="text-5xl mb-4">👋</div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#f0f0ff" }}>Open to Opportunities</h3>
            <p className="text-sm mb-6" style={{ color: "#8888aa" }}>
              Available immediately for in-office or remote internships across India.
            </p>
            <motion.a
              href="mailto:shivam23bcy55@iiitkottayam.ac.in"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(108,99,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl font-semibold text-white w-full"
              style={{ background: "linear-gradient(135deg, #6c63ff, #a78bfa)" }}
            >
              Send Me a Message
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
