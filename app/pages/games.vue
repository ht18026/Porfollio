<script setup lang="ts">
const { t } = useI18n()

const games = [
  {
    title: '失眠俱乐部',
    titleEn: 'Insomnia Club',
    engine: "Ren'Py",
    genre: 'Emotional · Modern Urban Visual Novel',
    status: 'Demo Ready',
    statusColor: 'copper',
    lang: 'Chinese (English localization planned)',
    story: '2025, a late-night insomnia support group. A 24-year-old product manager searching for genuine human connection.',
    highlights: [
      'AI-assisted dialogue via SillyTavern + Character Cards',
      'Phone & social timeline system',
      'Day/night cycle with collectibles and cross-save',
      'Hidden attribute system across 3 heroines',
      '94 WebP images · AI-generated backgrounds · Original BGM',
      'Prologue + Chapter 1 complete (2200+ lines)',
    ],
    tech: ["Ren'Py", 'Stable Diffusion', 'Midjourney', 'SillyTavern'],
  },
  {
    title: 'Chaos Brawler',
    titleEn: 'Chaos Brawler',
    engine: 'Godot 4',
    genre: 'Chaotic · Comedic · Local Multiplayer',
    status: 'Design Phase',
    statusColor: 'steel',
    lang: 'English / Chinese',
    story: '越离谱越好 — The more absurd, the better. A 2D party brawler where nothing makes sense and that\'s the point.',
    highlights: [
      'Toilet vehicles · Black hole grenades · Screen-flip bombs',
      'Destructible environments',
      'Gravity-flip stages',
      'In-match economy system',
      'Local multiplayer focus',
    ],
    tech: ['Godot 4', 'GDScript'],
  },
]
</script>

<template>
  <main class="px-8 md:px-20 pt-36 pb-20">
    <h1 class="text-4xl font-light text-parchment mb-16 fade-up delay-1">
      {{ t('games.title') }}
    </h1>

    <div class="space-y-1">
      <article
        v-for="(game, i) in games"
        :key="game.title"
        class="bg-card p-8 md:p-12 fade-up"
        :class="`delay-${i + 2}`"
      >
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h2 class="text-parchment text-2xl font-light mb-1">
              {{ game.title }}
              <span v-if="game.title !== game.titleEn" class="text-oak text-base ml-3">
                {{ game.titleEn }}
              </span>
            </h2>
            <p class="text-copper text-sm">{{ game.genre }}</p>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <span
              class="text-xs px-3 py-1 tracking-wide"
              :class="game.statusColor === 'copper' ? 'text-copper bg-copper/10' : 'text-steel bg-steel/10'"
            >
              {{ game.status }}
            </span>
            <span class="text-oak text-sm">{{ game.engine }}</span>
          </div>
        </div>

        <p class="text-oak leading-relaxed mb-8 max-w-2xl italic">
          {{ game.story }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          <div
            v-for="h in game.highlights"
            :key="h"
            class="text-oak text-sm pl-4 relative before:absolute before:left-0 before:top-2.5 before:w-1 before:h-px before:bg-copper/40"
          >
            {{ h }}
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in game.tech"
            :key="tag"
            class="text-steel text-xs px-2.5 py-1 bg-steel/10"
          >
            {{ tag }}
          </span>
        </div>
      </article>
    </div>
  </main>
</template>
