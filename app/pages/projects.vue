<script setup lang="ts">
const { t } = useI18n()

const projects = [
  {
    title: 'WoHub',
    subtitle: "Women's Health Platform",
    type: 'Full-Stack · Vue.js 3 + Firebase',
    grade: 'HD 92/100',
    demo: 'https://fit5032-wohub.web.app/',
    github: 'https://github.com/ht18026/FIT5032-women-health',
    summary: 'Google OAuth + RBAC, bulk email with AI assistant, admin analytics, geo-located hospital lookup, WCAG compliant.',
    tech: ['Vue.js 3', 'Firebase', 'Firestore', 'Cloud Functions', 'Gemini API'],
  },
  {
    title: 'BirdTag',
    subtitle: 'AWS Serverless Media System',
    type: 'Cloud · AWS (team of 4)',
    grade: null,
    demo: null,
    github: null,
    summary: 'ML-powered bird species detection on upload, tag-based search, Cognito auth, VPC network. My role: S3 pipeline, Lambda, DynamoDB schema, API Gateway.',
    tech: ['AWS S3', 'Lambda', 'DynamoDB', 'API Gateway', 'Cognito', 'SNS'],
  },
  {
    title: 'CloudPoseDetection',
    subtitle: 'Containerized ML Service',
    type: 'Backend · Python + Docker',
    grade: null,
    demo: null,
    github: null,
    summary: 'Pose estimation REST API via TFLite MoveNet. Containerized deployment with Locust load testing.',
    tech: ['Python', 'Docker', 'TFLite', 'MoveNet', 'Locust'],
  },
]
</script>

<template>
  <main class="px-8 md:px-20 pt-36 pb-20 max-w-4xl mx-auto">
    <h1 class="text-parchment text-4xl font-light mb-16 fade-up delay-1">
      {{ t('projects.title') }}
    </h1>

    <div class="space-y-0">
      <article
        v-for="(project, i) in projects"
        :key="project.title"
        class="group py-10 divider fade-up"
        :class="`delay-${i + 2}`"
      >
        <div class="flex flex-col md:flex-row md:gap-16">
          <!-- Left: title block -->
          <div class="md:w-56 shrink-0 mb-4 md:mb-0">
            <h2 class="text-parchment text-xl font-light mb-1">{{ project.title }}</h2>
            <p class="text-copper text-sm">{{ project.subtitle }}</p>
            <p class="text-steel text-xs mt-1">{{ project.type }}</p>
            <span v-if="project.grade" class="text-steel text-xs mt-1 block">{{ project.grade }}</span>
          </div>

          <!-- Right: detail block -->
          <div class="flex-1">
            <p class="text-oak text-sm leading-relaxed mb-5">{{ project.summary }}</p>

            <div class="flex flex-wrap gap-2 mb-5">
              <span
                v-for="tag in project.tech"
                :key="tag"
                class="text-steel text-xs px-2.5 py-1 bg-steel\/10"
              >
                {{ tag }}
              </span>
            </div>

            <div class="flex gap-5">
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener"
                class="text-copper text-sm hover:text-copper-dark transition-colors duration-200"
              >
                {{ t('projects.demo') }} ↗
              </a>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener"
                class="text-oak text-sm hover:text-parchment transition-colors duration-200"
              >
                {{ t('projects.code') }} ↗
              </a>
              <span v-if="!project.demo && !project.github" class="text-steel text-xs mt-0.5">Private repo</span>
            </div>
          </div>
        </div>
      </article>

      <!-- Terminal divider after last item -->
      <div class="divider" />
    </div>
  </main>
</template>

<style scoped>
.bg-steel\/10 { background-color: rgba(142, 158, 173, 0.10); }
</style>
