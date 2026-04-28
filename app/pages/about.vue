<script setup lang="ts">
const { t } = useI18n()
const researchOpen = ref(false)

const education = [
  {
    degree: 'Master of Information Technology',
    institution: 'Monash University',
    grade: 'HD Average',
    period: '2024–2026',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University of Bristol',
    grade: '2:1',
    period: '2018–2021',
  },
]

const languages = [
  { lang: 'English', level: 'Superior', cert: 'PTE 79' },
  { lang: 'Mandarin', level: 'Native', cert: '—' },
  { lang: 'Japanese', level: 'Conversational', cert: '—' },
]

const skills = [
  { category: 'Languages', items: 'Java · Python · C/C++ · SQL · TypeScript · Go · Bash · R' },
  { category: 'Frontend', items: 'Vue.js 3 · Nuxt · HTML/CSS · Tailwind' },
  { category: 'Backend', items: 'Firebase · AWS Lambda · Node.js · REST API' },
  { category: 'Cloud', items: 'AWS (EC2 · Lambda · S3 · DynamoDB · Cognito · SNS) · Firebase' },
  { category: 'Tools', items: 'Git · Docker · Jenkins · JIRA · Selenium' },
  { category: 'ML / AI', items: 'TFLite · Stable Diffusion · Gemini API · LLM integration' },
  { category: 'Game Dev', items: 'Ren\'Py · Godot 4' },
  { category: 'Research', items: 'Multi-agent systems · LLM serving & scheduling · Cloud-edge computing · Batch inference optimisation' },
]
</script>

<template>
  <main class="px-8 md:px-20 pt-36 pb-20 max-w-3xl mx-auto">
    <h1 class="text-4xl font-light text-parchment mb-16 fade-up delay-1">
      {{ t('about.title') }}
    </h1>

    <!-- Education -->
    <section class="mb-16 fade-up delay-2">
      <h2 class="text-xs text-steel tracking-[0.2em] uppercase mb-6">
        {{ t('about.education') }}
      </h2>
      <div class="space-y-6">
        <div
          v-for="edu in education"
          :key="edu.institution"
          class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4 pb-6 divider"
        >
          <div>
            <p class="text-parchment">{{ edu.degree }}</p>
            <p class="text-oak text-sm">{{ edu.institution }}</p>
          </div>
          <div class="flex items-baseline gap-4 shrink-0">
            <span class="text-steel text-sm">{{ edu.grade }}</span>
            <span class="text-oak text-sm">{{ edu.period }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Research -->
    <section class="mb-16 fade-up delay-3">
      <h2 class="text-xs text-steel tracking-[0.2em] uppercase mb-6">
        {{ t('about.research') }}
      </h2>
      <div class="border border-oak/20 p-6">
        <p class="text-parchment mb-1 italic">
          Efficient Routing of Inference Requests across LLM Instances in Cloud-Edge Computing
        </p>
        <p class="text-steel text-sm mb-4">Supervisor: Dr. Mohammad Goudarzi · Monash University</p>

        <button
          class="text-copper text-sm hover:text-copper-dark transition-colors duration-200 flex items-center gap-2"
          @click="researchOpen = !researchOpen"
        >
          {{ researchOpen ? t('about.research_collapse') : t('about.research_expand') }}
          <span class="text-xs">{{ researchOpen ? '↑' : '↓' }}</span>
        </button>

        <Transition name="expand">
          <div v-if="researchOpen" class="mt-5 space-y-3 text-oak text-sm leading-relaxed">
            <p>
              <span class="text-parchment">Core problem:</span>
              How to intelligently dispatch a batch of heterogeneous LLM inference requests across multiple model instances distributed across cloud and edge nodes, minimising latency and cost while respecting SLA constraints.
            </p>
            <p>
              <span class="text-parchment">Approach:</span>
              Memetic Algorithm (MA) — evolutionary optimisation hybridised with local search, applied to the batch routing decision problem across heterogeneous LLM instances on cloud and edge nodes.
            </p>
            <p>
              <span class="text-parchment">Key topics:</span>
              Batch inference scheduling · LLM serving systems (vLLM-style) · Metaheuristic optimisation · Cloud-edge offloading · Throughput/latency trade-offs
            </p>
          </div>
        </Transition>
      </div>
    </section>

    <!-- Certifications -->
    <section class="mb-16 fade-up delay-3">
      <h2 class="text-xs text-steel tracking-[0.2em] uppercase mb-6">
        {{ t('about.certifications') }}
      </h2>
      <p class="text-parchment">AWS Solutions Architect – Associate</p>
    </section>

    <!-- Languages -->
    <section class="mb-16 fade-up delay-4">
      <h2 class="text-xs text-steel tracking-[0.2em] uppercase mb-6">
        {{ t('about.languages') }}
      </h2>
      <div class="space-y-3">
        <div
          v-for="l in languages"
          :key="l.lang"
          class="flex items-baseline justify-between pb-3 divider"
        >
          <span class="text-parchment">{{ l.lang }}</span>
          <div class="flex gap-6">
            <span class="text-oak text-sm">{{ l.level }}</span>
            <span class="text-steel text-sm">{{ l.cert }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="fade-up delay-5">
      <h2 class="text-xs text-steel tracking-[0.2em] uppercase mb-6">
        {{ t('about.skills') }}
      </h2>
      <div class="space-y-4">
        <div
          v-for="s in skills"
          :key="s.category"
          class="flex flex-col md:flex-row gap-2 md:gap-8 pb-4 divider"
        >
          <span class="text-steel text-sm shrink-0 w-28">{{ s.category }}</span>
          <span class="text-oak text-sm">{{ s.items }}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.3s ease;
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
}
</style>
