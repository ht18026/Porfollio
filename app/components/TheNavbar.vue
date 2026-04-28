<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const route = useRoute()
const mobileOpen = ref(false)

const navLinks = [
  { to: '/about', key: 'nav.about' },
  { to: '/experience', key: 'nav.experience' },
  { to: '/projects', key: 'nav.projects' },
  { to: '/games', key: 'nav.games' },
  { to: '/blog', key: 'nav.blog' },
  { to: '/media', key: 'nav.media' },
  { to: '/contact', key: 'nav.contact' },
]

const otherLocale = computed(() => (locale.value === 'en' ? 'zh' : 'en'))
const toggleLabel = computed(() => (locale.value === 'en' ? '中文' : 'EN'))

function isActive(path: string) {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

<template>
  <nav class="nav-root fixed top-0 left-0 right-0 z-50 bg-shadow">
    <div class="flex items-center justify-between px-8 md:px-20 py-5">

      <!-- Logo -->
      <NuxtLink to="/" class="nav-logo text-sm font-light tracking-[0.2em]" @click="mobileOpen = false">
        XW
      </NuxtLink>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-7">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link text-sm"
          :class="{ 'nav-link--active': isActive(link.to) }"
        >
          {{ t(link.key) }}
        </NuxtLink>

        <!-- Visual separator -->
        <span class="nav-divider" />

        <!-- Language toggle -->
        <button class="nav-lang text-xs tracking-[0.2em] uppercase" @click="setLocale(otherLocale)">
          {{ toggleLabel }}
        </button>
      </div>

      <!-- Mobile hamburger -->
      <button class="nav-ham md:hidden text-xl leading-none" @click="mobileOpen = !mobileOpen">
        {{ mobileOpen ? '×' : '≡' }}
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide">
      <div v-if="mobileOpen" class="md:hidden px-8 pb-6 flex flex-col gap-5 nav-mobile">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link text-sm"
          :class="{ 'nav-link--active': isActive(link.to) }"
          @click="mobileOpen = false"
        >
          {{ t(link.key) }}
        </NuxtLink>
        <span class="nav-mobile-divider" />
        <button class="nav-lang text-xs tracking-[0.2em] uppercase text-left" @click="setLocale(otherLocale); mobileOpen = false">
          {{ toggleLabel }}
        </button>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
/* Root bar */
.nav-root {
  border-bottom: 1px solid rgba(201, 185, 168, 0.1);
}

/* Logo */
.nav-logo {
  color: #F4F1EC;
  transition: color 0.2s;
}
.nav-logo:hover { color: #B5845A; }

/* Nav links */
.nav-link {
  color: #C9B9A8;
  transition: color 0.2s;
  position: relative;
}
.nav-link:hover { color: #F4F1EC; }
.nav-link--active { color: #B5845A; }
.nav-link--active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 1px;
  background: #B5845A;
}

/* Visual separator between links and lang toggle */
.nav-divider {
  display: block;
  width: 1px;
  height: 14px;
  background: rgba(201, 185, 168, 0.2);
}

/* Language toggle */
.nav-lang {
  color: #8E9EAD;
  transition: color 0.2s;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.nav-lang:hover { color: #F4F1EC; }

/* Mobile hamburger */
.nav-ham {
  color: #C9B9A8;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
}
.nav-ham:hover { color: #F4F1EC; }

/* Mobile menu divider */
.nav-mobile-divider {
  display: block;
  height: 1px;
  background: rgba(201, 185, 168, 0.15);
}

/* Animations */
.slide-enter-active,
.slide-leave-active { transition: opacity 0.2s ease; }
.slide-enter-from,
.slide-leave-to { opacity: 0; }
</style>
