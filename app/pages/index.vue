<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <main class="relative min-h-screen flex flex-col justify-center px-8 md:px-20 pt-28 pb-20">
    <!-- Large decorative letter — text as design -->
    <div
      aria-hidden="true"
      class="absolute right-0 top-1/2 -translate-y-1/2 text-[20vw] font-light leading-none select-none pointer-events-none"
      style="color: rgba(201,185,168,0.04);"
    >
      W
    </div>

    <section class="max-w-2xl relative">
      <p class="text-steel text-xs tracking-[0.25em] uppercase mb-10 fade-up delay-1">
        {{ t('hero.location') }}
      </p>

      <h1
        class="text-parchment font-light leading-[1.0] tracking-tight mb-7 fade-up delay-2"
        style="font-size: clamp(3.5rem, 9vw, 8rem);"
      >
        Xijia<br>Wang
      </h1>

      <p class="text-copper text-base mb-8 fade-up delay-3 leading-relaxed">
        {{ t('hero.title') }}
      </p>

      <p
        class="text-oak leading-relaxed mb-14 fade-up delay-4"
        style="max-width: 42ch;"
      >
        {{ t('hero.bio') }}
      </p>

      <div class="flex flex-wrap gap-4 fade-up delay-5">
        <NuxtLink
          to="/projects"
          class="px-7 py-3 text-sm tracking-wide font-medium transition-colors duration-200"
          style="background-color: #B5845A; color: #2A282C;"
          @mouseover="(e) => (e.currentTarget as HTMLElement).style.backgroundColor = '#9A6E48'"
          @mouseleave="(e) => (e.currentTarget as HTMLElement).style.backgroundColor = '#B5845A'"
        >
          {{ t('hero.cta_projects') }}
        </NuxtLink>
        <a
          href="#"
          target="_blank"
          rel="noopener"
          class="px-7 py-3 text-sm tracking-wide border transition-colors duration-200"
          style="border-color: #B5845A; color: #B5845A;"
          @mouseover="(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = '#B5845A'; el.style.color = '#2A282C'; }"
          @mouseleave="(e) => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'transparent'; el.style.color = '#B5845A'; }"
        >
          {{ t('hero.cta_cv') }}
        </a>
      </div>
    </section>

    <div
      class="absolute bottom-10 left-8 md:left-20 text-xs tracking-[0.35em] fade-up delay-6"
      style="color: rgba(201,185,168,0.35);"
    >
      scroll
    </div>
  </main>
</template>
