<template>
  <nav class="navigation bg-primary text-white shadow-lg fixed w-full top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16 md:h-20">
        <!-- Logo -->
        <router-link to="/" class="flex-shrink-0">
          <img 
            src="/cenovatelogo.png"
            alt="CENOVATE Logo"
            class="h-10 md:h-12"
            loading="eager"
          />
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="nav-link text-white hover:text-gray-100 font-semibold transition-colors"
            :class="{ 'text-white font-bold underline underline-offset-8': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
          
          <!-- WhatsApp Quick Contact -->
          <a
            :href="whatsappLink"
            class="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="mr-2">📱</span>
            WhatsApp
          </a>
        </div>

        <!-- Mobile Menu Button (hidden on desktop) -->
        <button
          @click="toggleMobileMenu"
          aria-label="Toggle navigation menu"
          class="text-white focus:outline-none focus:ring-2 focus:ring-white rounded p-2 md:hidden"
        >
          <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
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
          class="block nav-link text-white hover:text-gray-100 font-semibold transition-colors py-2"
          :class="{ 'text-white font-bold underline underline-offset-8': $route.path === item.path }"
          @click="closeMobileMenu"
        >
          {{ item.name }}
        </router-link>
        
        <!-- Mobile WhatsApp Button -->
        <a
          :href="whatsappLink"
          class="block bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
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

// ===== Navigation State =====
const isMobileMenuOpen = ref(false)

// ===== Navigation Items =====
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

// ===== WhatsApp Integration =====
const whatsappLink = computed(() => {
  const message = encodeURIComponent("Hello! I'm interested in CENOVATE's services.")
  return `https://wa.me/233244274682?text=${message}`
})

// ===== Mobile Menu Functions =====
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

// ===== Close mobile menu on resize =====
function handleResize() {
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
.navigation {
  background-color: #ad2d2b !important;
}
.nav-link {
  position: relative;
  color: #fff !important;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #fff;
  transition: width 0.3s ease;
}
.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}
.text-primary {
  color: #fff !important;
}
.hover\:text-primary:hover {
  color: #fff !important;
}
</style>