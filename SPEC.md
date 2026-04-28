# Portfolio Website — Build Spec

## Project Overview

Personal brand website for Xijia Wang, consolidating education, work experience, technical projects, creative games, and self-media into a single public-facing profile.

**Target audience:** Recruiters, collaborators, players, and anyone who wants to know who I am.

---

## Tech Stack

- **Framework:** Nuxt with Nuxt Content module
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
/blog               Article list + individual post pages
/media              Self-media links and embeds
/contact            Links and contact info
```

---

## Pages & Content

### `/` — Home (Hero)

- Full-screen hero section
- Name: **Xijia Wang**
- One-liner: "Software Engineer · Indie Studio Founder · LLM Researcher"
- Short bio: Result-oriented Software Engineer with 3+ years in high-stakes financial environments. Currently researching multi-agent batch LLM inference routing at Monash, and leading an indie game studio building narrative games that explore what it means to be seen.
- CTA buttons: "View Projects" → `/projects`, "Download CV" → link to PDF
- Navigation to all sections

---

### `/about` — About Me

**Education:**

| Degree | Institution | Grade | Period |
|--------|-------------|-------|--------|
| Master of Information Technology | Monash University | HD Average | 2024–2026 |
| Bachelor of Computer Science | University of Bristol | 2:1 | 2018–2021 |

**Research Thesis (Master's):**

*Efficient Routing of Inference Requests across LLM Instances in Cloud-Edge Computing*

- **Supervisor:** Dr. Mohammad Goudarzi
- **Core problem:** How to intelligently dispatch a batch of heterogeneous LLM inference requests across multiple model instances distributed across cloud and edge nodes, minimising latency and cost while respecting SLA constraints.
- **Approach:** Memetic Algorithm (MA) — evolutionary optimisation hybridised with local search, applied to the batch routing decision problem across heterogeneous LLM instances on cloud and edge nodes.
- **Key topics:** Batch inference scheduling, LLM serving systems (vLLM-style), metaheuristic optimisation, cloud-edge offloading, throughput/latency trade-offs.
- Display on `/about` as an expandable research card; link to paper/preprint when available.

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
| Leadership | Studio founding, creative direction, cross-discipline team coordination, production pipeline, project management |
| Research | Multi-agent systems, LLM serving & scheduling, cloud-edge computing, batch inference optimisation |

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

**Memo Studio — Producer** (2025 – Present)
- Founded and lead Memo Studio, an independent game studio of ~10 members (writers, artists, programmers) operating on a volunteer + deferred revenue-share model.
- Owns end-to-end production: greenlight decisions, milestone planning, cross-discipline coordination, asset pipeline, and release management.
- Currently shipping: 失眠俱乐部 (Insomnia Club) visual novel demo; Chaos Brawler in design phase.

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

### `/blog` — Blog

Article list page with individual post pages (`/blog/[slug]`).

- Display as a card list: title, date, tags, excerpt
- Individual post: full Markdown rendered via `<ContentRenderer>`, estimated read time
- Tags / category filter on list page
- Both Chinese and English posts supported (language indicated per post)
- Content stored in `content/blog/*.md` with frontmatter: `title`, `date`, `tags`, `lang`, `excerpt`

---

### `/contact` — Contact

- Email: xwan20251113@proton.me
- GitHub: https://github.com/ht18026
- Location: Melbourne, VIC, Australia
- Open to: Full-time roles (post June 2026, 485 visa eligible), collaborations, game playtesting

---

## Internationalization (i18n)

- **Languages:** English (default) + Simplified Chinese
- **Implementation:** `@nuxtjs/i18n` module
- **URL strategy:** prefix — `/en/...` and `/zh/...`; default locale (`en`) has no prefix
- **Language switcher:** persistent toggle in the navbar (EN / 中文)
- **Scope:** all UI strings, page headings, nav labels, CTA buttons, footer
- **Content:** blog posts carry their own `lang` frontmatter; project/game detail pages can have separate `.en.md` / `.zh.md` variants if needed — otherwise English only is acceptable for v1
- **Locale files:** `i18n/en.json` and `i18n/zh.json`

---

## Analytics

- **Provider:** Umami (self-hosted on Vercel, free tier) — privacy-friendly, no cookies, GDPR-safe
- **Tracked events:** page views, CTA button clicks ("View Projects", "Download CV"), language switch, blog post reads
- **Implementation:** inject Umami script via `nuxt.config.ts` `app.head`; custom events via `window.umami.track()`
- **Dashboard:** private Umami dashboard (not public-facing)
- No cookie consent banner required (cookieless by design)

---

## Design Direction

- **Tone:** Mature, understated, warm-dark — technical depth coexisting with creative sensitivity
- **Color scheme:** See `DESIGN.md` for full token definitions. Summary: Shadow Grey `#2A282C` background, Parchment `#F4F1EC` text, Faded Copper `#B5845A` accent, Cool Steel `#8E9EAD` contrast tag color. No electric blue, no neon green.
- **Typography:** Sans-serif body (Inter or similar); generous line-height and whitespace; Parchment on dark backgrounds
- **Motion:** Fade-in only — no bounce, no slide, no glow effects. Transitions feel calm and deliberate.
- **Mobile:** Fully responsive, mobile-first
- **Vibe:** A developer who also makes games and thinks about the world — not a dry resume dump. Refer to `DESIGN.md` for full brand philosophy.

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
  blog/
    YYYY-MM-DD-slug.md   # frontmatter: title, date, tags, lang, excerpt
  about.md
  experience.md
i18n/
  en.json
  zh.json
```

---

## Out of Scope (for now)

- CMS admin panel
- Comments system

---

## Notes for AI

- Use Nuxt Content's `queryCollection` / `<ContentRenderer>` for markdown pages
- Use Tailwind for all styling, no external UI libraries
- Keep components small and composable
- All external links open in `target="_blank" rel="noopener"`
- Prioritize Lighthouse performance score
