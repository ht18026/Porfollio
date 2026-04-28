# Portfolio Website — Build Spec

## Project Overview

Personal brand website for Xijia Wang, consolidating education, work experience, technical projects, creative games, and self-media into a single public-facing profile.

**Target audience:** Recruiters, collaborators, players, and anyone who wants to know who I am.

---

## Tech Stack

- **Framework:** Nuxt 3 with Nuxt Content module
- **Styling:** Tailwind CSS
- **Images:** @nuxt/image
- **Icons:** @nuxt/icon
- **Deployment:** Vercel
- **Language:** TypeScript

---

## Site Structure

```
/                   Hero + intro + quick nav
/about              Education, skills, languages, background
/experience         Work history + volunteer
/projects           Technical projects grid
/games              Creative/game projects
/media              Self-media links and embeds
/contact            Links and contact info
```

---

## Pages & Content

### `/` — Home (Hero)

- Full-screen hero section
- Name: **Xijia Wang**
- One-liner: "Software Engineer · Game Developer · Creator"
- Short bio: Result-oriented Software Engineer with 3+ years in high-stakes financial environments. Self-driven technologist spanning LLM research, AWS cloud, full-stack web, and game development.
- CTA buttons: "View Projects" → `/projects`, "Download CV" → link to PDF
- Navigation to all sections

---

### `/about` — About Me

**Education:**

| Degree | Institution | Grade | Period |
|--------|-------------|-------|--------|
| Master of Information Technology | Monash University | HD Average | 2024–2026 |
| Bachelor of Computer Science | University of Bristol | 2:1 | 2018–2021 |

Research: *Efficient Routing of Inference Requests across LLM Instances in Cloud-Edge Computing* — Supervisor: Dr. Mohammad Goudarzi

**Certifications:**
- AWS Solutions Architect – Associate

**Languages:**

| Language | Level | Certification |
|----------|-------|---------------|
| English | Superior | PTE 79 |
| Mandarin | Native | — |
| Japanese | Conversational | — |

**Technical Skills:**

| Category | Skills |
|----------|--------|
| Languages | Java, Python, C/C++, SQL, TypeScript, Go, Bash, R |
| Frontend | Vue.js 3, Nuxt, HTML/CSS, Tailwind |
| Backend | Firebase, AWS Lambda, Node.js, REST API |
| Cloud | AWS (EC2, Lambda, S3, DynamoDB, Cognito, SNS), Firebase |
| Tools | Git, Docker, Jenkins, JIRA, Selenium |
| ML/AI | TFLite, Stable Diffusion, Gemini API, LLM integration |
| Game Dev | Ren'Py, Godot 4 |

---

### `/experience` — Experience

**Citi Group — Tech Analyst** (Jul 2021 – Jun 2024, 3 years)

- END USER COMPUTING: Python-based risk mitigation automation. Recognized as **Best Practice** at annual Citi Risk knowledge-sharing.
- TIME RECORD SYSTEM: Selenium + RESTful API automation. **Reduced project management effort by 80%.**
- FRTB Program: Data warehouse with JDBC, Oracle, Spark.
- Database Migration: Sybase → Oracle migration lead.
- Credit Risk: Global team collaboration on Trade Sensitive Matching system.

Tech: Java, Python, SQL, Oracle, Sybase, Spark, Git, Jenkins, TeamCity

---

**Victoria Heart Hospital — Ward Ambassador** (Dec 2024 – Jul 2025)
- Guided patients and managed front-desk reception.

**Monash University — Peer Mentor & Disability Peer Mentor** (Jan 2025 – Jun 2025)
- Academic guidance for new students; inclusive support for students with disabilities.

---

### `/projects` — Technical Projects

Display as a card grid. Each card: title, short description, tech stack tags, links (Live Demo / GitHub).

---

#### WoHub — Women's Health Platform
- **Type:** Full-Stack Web Application
- **Live Demo:** https://fit5032-wohub.web.app/
- **GitHub:** https://github.com/ht18026/FIT5032-women-health
- **Grade:** 92/100 (HD)
- **Tech:** Vue.js 3, Firebase, Firestore, Cloud Functions, Gemini API
- **Highlights:** Google OAuth + RBAC, bulk email with AI helper, admin analytics dashboard, geo-location for hospitals, WCAG accessible

---

#### BirdTag — AWS Serverless Media System
- **Type:** AWS Serverless Application (Team Project, 4 members)
- **Course:** FIT5225 Cloud Computing and Security
- **Tech:** AWS S3, Lambda, DynamoDB, API Gateway, Cognito, SNS, VPC
- **Highlights:** ML-powered bird species detection on upload, tag-based search, Cognito auth, VPC network architecture
- **My role:** S3, Lambda pipeline, DynamoDB schema, API Gateway, team coordination

---

#### CloudPoseDetection — Containerized ML Service
- **Type:** Individual Assignment
- **Course:** FIT5225 Cloud Computing and Security
- **Tech:** Python, Docker, TFLite (MoveNet), Locust
- **Highlights:** Pose estimation REST API, containerized deployment, load testing

---

### `/games` — Creative Projects

Display with larger cards/screenshots, more visual.

---

#### 失眠俱乐部 (Insomnia Club) — Visual Novel
- **Engine:** Ren'Py
- **Genre:** Emotional, Modern Urban
- **Status:** Demo ready (1.5–2 hours gameplay)
- **Language:** Chinese (English localization planned)
- **Story:** 2025, a late-night insomnia support group. A 24-year-old product manager searching for genuine human connection.
- **Tech highlights:** AI-assisted dialogue (SillyTavern + Character Cards), phone/social timeline system, day/night cycle, collectibles with cross-save, hidden attribute system
- **Assets:** 94 WebP images, AI-generated backgrounds (Stable Diffusion, Midjourney), original BGM
- **Progress:** Prologue + Chapter 1 complete (2200+ lines), 3 heroines introduced

---

#### Chaos Brawler — 2D Party Game
- **Engine:** Godot 4
- **Genre:** Chaotic, Comedic, Local Multiplayer
- **Status:** Design Phase
- **Concept:** "越离谱越好" — The more absurd, the better
- **Planned features:** Toilet vehicles, black hole grenades, screen-flip bombs, destructible environments, gravity-flip stages, in-match economy

---

### `/media` — Self-Media

Placeholder section for now. Add links/embeds for:
- Bilibili
- 小红书
- Other platforms (fill in as needed)

Layout: platform icon + handle + link card. Can embed latest video if available.

---

### `/contact` — Contact

- Email: xwan20251113@proton.me
- GitHub: https://github.com/ht18026
- Location: Melbourne, VIC, Australia
- Open to: Full-time roles (post June 2026, 485 visa eligible), collaborations, game playtesting

---

## Design Direction

- **Tone:** Clean, modern, slightly dark — reflects both technical depth and creative personality
- **Color scheme:** Dark background (#0f0f0f or similar) with accent color (suggest: electric blue `#3b82f6` or neon green `#22c55e`)
- **Typography:** Sans-serif headings (e.g. Inter), readable body
- **Motion:** Subtle fade-in on scroll, hover effects on cards — nothing heavy
- **Mobile:** Fully responsive, mobile-first
- **Vibe:** A developer who also makes games — not a dry resume dump

---

## Content Files Structure

Put Markdown content in `content/` so Nuxt Content can parse it:

```
content/
  projects/
    wohub.md
    birdtag.md
    cloudpose.md
  games/
    insomnia-club.md
    chaos-brawler.md
  about.md
  experience.md
```

---

## Out of Scope (for now)

- Blog / articles
- CMS admin panel
- Comments system
- i18n (Chinese/English toggle — add later)
- Analytics

---

## Notes for AI

- Use Nuxt Content's `queryCollection` / `<ContentRenderer>` for markdown pages
- Use Tailwind for all styling, no external UI libraries
- Keep components small and composable
- All external links open in `target="_blank" rel="noopener"`
- Prioritize Lighthouse performance score
