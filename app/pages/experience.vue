<script setup lang="ts">
const { t } = useI18n()

const jobs = [
  {
    company: 'Citi Group',
    role: 'Tech Analyst',
    period: 'Jul 2021 – Jun 2024',
    duration: '3 years',
    type: 'Full-time',
    highlights: [
      'END USER COMPUTING: Python-based risk mitigation automation — recognised as Best Practice at annual Citi Risk knowledge-sharing.',
      'TIME RECORD SYSTEM: Selenium + RESTful API automation — reduced project management effort by 80%.',
      'FRTB Program: Data warehouse with JDBC, Oracle, Spark.',
      'Database Migration: Sybase → Oracle migration lead.',
      'Credit Risk: Global team collaboration on Trade Sensitive Matching system.',
    ],
    tech: ['Java', 'Python', 'SQL', 'Oracle', 'Sybase', 'Spark', 'Git', 'Jenkins', 'TeamCity'],
  },
  {
    company: 'Memo Studio',
    role: 'Founder & Producer',
    period: '2025 – Present',
    duration: '',
    type: 'Independent',
    highlights: [
      'Founded and lead Memo Studio, an independent game studio of ~10 members (writers, artists, programmers) on a volunteer + deferred revenue-share model.',
      'Owns end-to-end production: greenlight decisions, milestone planning, cross-discipline coordination, asset pipeline, and release management.',
      'Currently shipping: 失眠俱乐部 (Insomnia Club) visual novel demo; Chaos Brawler in design phase.',
    ],
    tech: ["Ren'Py", 'Godot 4', 'Stable Diffusion', 'Project Management'],
  },
]

const volunteer = [
  {
    org: 'Victoria Heart Hospital',
    role: 'Ward Ambassador',
    period: 'Dec 2024 – Jul 2025',
    desc: 'Guided patients and managed front-desk reception.',
  },
  {
    org: 'Monash University',
    role: 'Peer Mentor & Disability Peer Mentor',
    period: 'Jan 2025 – Jun 2025',
    desc: 'Academic guidance for new students; inclusive support for students with disabilities.',
  },
]
</script>

<template>
  <main class="px-8 md:px-20 pt-36 pb-20 max-w-3xl mx-auto">
    <h1 class="text-4xl font-light text-parchment mb-16 fade-up delay-1">
      {{ t('experience.title') }}
    </h1>

    <div class="space-y-16">
      <article
        v-for="(job, i) in jobs"
        :key="job.company"
        class="fade-up"
        :class="`delay-${i + 2}`"
      >
        <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-5">
          <div>
            <h2 class="text-parchment text-xl font-light">{{ job.company }}</h2>
            <p class="text-copper text-sm mt-0.5">{{ job.role }}</p>
          </div>
          <div class="flex items-baseline gap-3 shrink-0">
            <span class="text-steel text-xs tracking-wide">{{ job.type }}</span>
            <span class="text-oak text-sm">{{ job.period }}</span>
          </div>
        </div>

        <ul class="space-y-2 mb-5">
          <li
            v-for="h in job.highlights"
            :key="h"
            class="text-oak text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2.5 before:w-1 before:h-px before:bg-copper/50"
          >
            {{ h }}
          </li>
        </ul>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in job.tech"
            :key="tag"
            class="text-steel text-xs px-2.5 py-1 bg-steel/10"
          >
            {{ tag }}
          </span>
        </div>

        <div class="mt-8 divider" />
      </article>
    </div>

    <!-- Volunteer -->
    <section class="mt-16 fade-up delay-4">
      <h2 class="text-xs text-steel tracking-[0.2em] uppercase mb-8">Volunteer</h2>
      <div class="space-y-8">
        <div
          v-for="v in volunteer"
          :key="v.org"
        >
          <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
            <div>
              <p class="text-parchment">{{ v.org }}</p>
              <p class="text-copper text-sm">{{ v.role }}</p>
            </div>
            <span class="text-oak text-sm shrink-0">{{ v.period }}</span>
          </div>
          <p class="text-oak text-sm">{{ v.desc }}</p>
        </div>
      </div>
    </section>
  </main>
</template>
