<script setup lang="ts">
const { t } = useI18n()

const links = [
  { label: 'Email', value: 'xwan20251113@proton.me', href: 'mailto:xwan20251113@proton.me' },
  { label: 'GitHub', value: 'github.com/ht18026', href: 'https://github.com/ht18026' },
  { label: 'Location', value: 'Melbourne, VIC, Australia', href: null },
]
</script>

<template>
  <main class="px-8 md:px-20 pt-36 pb-20 max-w-2xl mx-auto">
    <h1 class="text-4xl font-light text-parchment mb-16 fade-up delay-1">
      {{ t('contact.title') }}
    </h1>

    <div class="space-y-0 mb-16 fade-up delay-2">
      <div
        v-for="link in links"
        :key="link.label"
        class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 py-5 divider"
      >
        <span class="text-steel text-sm tracking-wide">{{ link.label }}</span>
        <a
          v-if="link.href"
          :href="link.href"
          :target="link.href.startsWith('http') ? '_blank' : undefined"
          :rel="link.href.startsWith('http') ? 'noopener' : undefined"
          class="text-parchment hover:text-copper transition-colors duration-200"
        >
          {{ link.value }}
        </a>
        <span v-else class="text-parchment">{{ link.value }}</span>
      </div>
    </div>

    <section class="fade-up delay-3">
      <h2 class="text-xs text-steel tracking-[0.2em] uppercase mb-4">
        {{ t('contact.open_to') }}
      </h2>
      <p class="text-oak leading-relaxed">{{ t('contact.open_items') }}</p>
    </section>
  </main>
</template>
