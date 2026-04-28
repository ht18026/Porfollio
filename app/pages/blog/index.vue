<script setup lang="ts">
const { t } = useI18n()

const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('content')
    .where('path', 'LIKE', '/blog/%')
    .order('date', 'DESC')
    .all()
)
</script>

<template>
  <main class="px-8 md:px-20 pt-36 pb-20 max-w-2xl mx-auto">
    <h1 class="text-4xl font-light text-parchment mb-16 fade-up delay-1">
      {{ t('blog.title') }}
    </h1>

    <div v-if="!posts || posts.length === 0" class="fade-up delay-2">
      <p class="text-oak">{{ t('blog.empty') }}</p>
    </div>

    <div v-else class="space-y-0">
      <article
        v-for="(post, i) in posts"
        :key="post.path"
        class="py-8 divider fade-up"
        :class="`delay-${i + 2}`"
      >
        <NuxtLink :to="post.path" class="group block">
          <div class="flex items-baseline justify-between gap-4 mb-2">
            <h2 class="text-parchment font-light group-hover:text-copper transition-colors duration-200">
              {{ post.title }}
            </h2>
            <span class="text-steel text-xs shrink-0">{{ post.date }}</span>
          </div>
          <p v-if="post.excerpt" class="text-oak text-sm leading-relaxed mb-3">
            {{ post.excerpt }}
          </p>
          <div class="flex items-center gap-3">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="text-steel text-xs px-2 py-0.5 bg-steel/10"
            >
              {{ tag }}
            </span>
            <span
              v-if="post.lang"
              class="text-oak/50 text-xs ml-auto"
            >
              {{ post.lang === 'zh' ? '中文' : 'EN' }}
            </span>
          </div>
        </NuxtLink>
      </article>
    </div>
  </main>
</template>
