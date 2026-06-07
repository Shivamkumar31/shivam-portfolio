"use client";
export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center" style={{ borderTop: "1px solid #2a2a3a" }}>
      <p className="text-sm" style={{ color: "#555570" }}>
        Built with <span style={{ color: "#6c63ff" }}>Next.js</span> &amp; Framer Motion · Deployed on Vercel
      </p>
      <p className="text-xs mt-1" style={{ color: "#333350" }}>
        © {new Date().getFullYear()} Shivam Kumar
      </p>
    </footer>
  );
}
