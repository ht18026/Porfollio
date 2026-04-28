<script setup lang="ts">
const { t } = useI18n()

const platforms = [
  {
    name: 'Bilibili',
    handle: '@TBD',
    description: 'Game dev logs · Studio updates · Creative process',
    url: null,
    icon: '▶',
  },
  {
    name: '小红书',
    handle: '@TBD',
    description: '生活记录 · 游戏测评 · 创作日常',
    url: null,
    icon: '✦',
  },
]
</script>

<template>
  <main class="px-8 md:px-20 pt-36 pb-20 max-w-2xl mx-auto">
    <h1 class="text-4xl font-light text-parchment mb-4 fade-up delay-1">
      {{ t('media.title') }}
    </h1>
    <p class="text-oak mb-16 fade-up delay-2">{{ t('media.description') }}</p>

    <div class="space-y-px fade-up delay-3">
      <div
        v-for="p in platforms"
        :key="p.name"
        class="flex items-start gap-6 p-6 bg-card hover:bg-card/80 transition-colors duration-200"
      >
        <span class="text-copper text-xl mt-0.5">{{ p.icon }}</span>
        <div class="flex-1">
          <div class="flex items-baseline gap-3 mb-1">
            <h2 class="text-parchment">{{ p.name }}</h2>
            <span class="text-steel text-sm">{{ p.handle }}</span>
          </div>
          <p class="text-oak text-sm">{{ p.description }}</p>
        </div>
        <a
          v-if="p.url"
          :href="p.url"
          target="_blank"
          rel="noopener"
          class="text-copper text-sm hover:text-copper-dark transition-colors duration-200 shrink-0 mt-0.5"
        >
          ↗
        </a>
        <span v-else class="text-steel/30 text-xs mt-1 shrink-0">soon</span>
      </div>
    </div>
  </main>
</template>
