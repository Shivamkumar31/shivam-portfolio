# Shivam Kumar — Portfolio

Built with **Next.js 16**, **Framer Motion**, **Tailwind CSS** — deployed on Vercel.

## 🚀 Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## ☁️ Deploy to Vercel (2 minutes)

1. Push this folder to a new GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy — done. You'll get a live link instantly.

## 📁 Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # Global styles + CSS variables
├── components/
│   ├── Navbar.tsx       # Sticky nav with scroll detection
│   ├── Hero.tsx         # Animated hero with role switcher
│   ├── Projects.tsx     # Featured + grid project cards
│   ├── Skills.tsx       # Tech stack grouped by category
│   ├── Experience.tsx   # Timeline — internship + education
│   ├── Contact.tsx      # Contact info + CTA
│   └── Footer.tsx       # Simple footer
```

## ✏️ Update Your Live Links

In `components/Projects.tsx`, update the `live` and `github` fields for each project with your actual deployed URLs.
