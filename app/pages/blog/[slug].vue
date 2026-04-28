<script setup lang="ts">
const route = useRoute()
const path = `/blog/${route.params.slug}`

const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryCollection('content').path(path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}
</script>

<template>
  <main class="px-8 md:px-20 pt-36 pb-20 max-w-2xl mx-auto">
    <NuxtLink
      to="/blog"
      class="text-steel text-sm hover:text-parchment transition-colors duration-200 inline-block mb-12"
    >
      ← Blog
    </NuxtLink>

    <header class="mb-12 fade-up delay-1">
      <h1 class="text-3xl font-light text-parchment mb-3 leading-snug">
        {{ post?.title }}
      </h1>
      <div class="flex items-center gap-4">
        <span class="text-oak text-sm">{{ post?.date }}</span>
        <span
          v-for="tag in post?.tags"
          :key="tag"
          class="text-steel text-xs px-2 py-0.5 bg-steel/10"
        >
          {{ tag }}
        </span>
      </div>
    </header>

    <div class="prose fade-up delay-2">
      <ContentRenderer v-if="post" :value="post" />
    </div>
  </main>
</template>

<style>
.prose {
  color: #C9B9A8;
  line-height: 1.8;
}
.prose h1,
.prose h2,
.prose h3 {
  color: #F4F1EC;
  font-weight: 300;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}
.prose p {
  margin-bottom: 1.25rem;
}
.prose a {
  color: #B5845A;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.prose a:hover {
  color: #9A6E48;
}
.prose code {
  background: rgba(142, 158, 173, 0.1);
  padding: 0.1em 0.4em;
  font-size: 0.875em;
}
.prose blockquote {
  border-left: 2px solid #B5845A;
  padding-left: 1rem;
  color: #8E9EAD;
  margin: 1.5rem 0;
}
</style>
