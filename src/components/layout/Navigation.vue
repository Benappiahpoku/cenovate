<template>
  <nav class="navigation bg-primary text-white shadow-lg fixed w-full top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16 md:h-20">
        <!-- Logo -->
        <router-link to="/" class="flex-shrink-0">
          <img src="/cenovatelogo.png" alt="CENOVATE Logo" class="h-10 md:h-12" loading="eager" />
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link text-white hover:text-gray-100 font-semibold transition-colors min-h-[48px] min-w-[48px] flex items-center"
            :class="{ 'is-active': isActiveRoute(item.path) }"
          >
            {{ item.name }}
          </router-link>

          <!-- WhatsApp Quick Contact -->
          <a
            :href="whatsappLink"
            class="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center min-h-[48px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="mr-2">📱</span>
            WhatsApp
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          aria-label="Toggle navigation menu"
          class="text-white focus:outline-none focus:ring-2 focus:ring-white rounded p-2 md:hidden min-h-[48px] min-w-[48px]"
        >
          <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden border-t border-primary-700 py-4 space-y-4 bg-primary text-white"
      >
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link text-white hover:text-gray-100 font-semibold transition-colors py-2 min-h-[48px] flex items-center"
          :class="{ 'is-active': isActiveRoute(item.path) }"
          @click="closeMobileMenu"
        >
          {{ item.name }}
        </router-link>

        <!-- Mobile WhatsApp Button -->
        <a
          :href="whatsappLink"
          class="block bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center min-h-[48px]"
          target="_blank"
          rel="noopener noreferrer"
          @click="closeMobileMenu"
        >
          <span class="mr-2">📱</span>
          WhatsApp
        </a>
      </div>
    </div>
  </nav>

  <!-- Spacer to prevent content from hiding under fixed nav -->
  <div class="h-16 md:h-20"></div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

// ===== Navigation State =====
const isMobileMenuOpen = ref(false)
const $route = useRoute()

// ===== Navigation Items =====
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

// ===== WhatsApp Integration (Ghana-optimized) =====
const whatsappLink = computed(() => {
  const message = encodeURIComponent("Hello CENOVATE! I'm interested in your construction and development services in Ghana.")
  return `https://wa.me/233244274682?text=${message}`
})

// ===== Active Route Detection =====
function isActiveRoute(path: string): boolean {
  if (path === '/') {
    // Home is only active when exactly on home page
    return $route.path === '/'
  }
  // Other routes are active when current path starts with the route path
  return $route.path === path
}

// ===== Mobile Menu Functions =====
function toggleMobileMenu(): void {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu(): void {
  isMobileMenuOpen.value = false
}

// ===== Close mobile menu on resize (Ghana mobile optimization) =====
function handleResize(): void {
  if (window.innerWidth >= 768) {
    isMobileMenuOpen.value = false
  }
}

// ===== Lifecycle =====
onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* ===== GHANA-OPTIMIZED STYLES ===== */
.navigation {
  background-color: #ad2d2b !important;
}

.nav-link {
  position: relative;
  color: #fff !important;
  text-decoration: none;
  font-weight: normal;
}

/* Only one underline: active or hover */
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 2px;
  background-color: #fff;
  width: 0;
  transition: width 0.3s cubic-bezier(.4,0,.2,1);
}

.nav-link.is-active::after,
.nav-link:hover::after {
  width: 100%;
}

.nav-link.is-active {
  font-weight: bold;
}

/* Remove underline effect on mobile for performance */
@media (max-width: 767px) {
  .nav-link::after {
    display: block !important;
  }
}

/* Ensure minimum touch targets for Ghana mobile users */
.nav-link,
button,
a {
  min-height: 48px;
  min-width: 48px;
}

/* Optimize for slow connections - reduce animations */
@media (prefers-reduced-motion: reduce) {
  .nav-link::after,
  .transition-colors {
    transition: none;
  }
}


</style>