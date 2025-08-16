<template>
  <!-- Hero Section - Mobile First with Video Support -->
  <section
    class="hero-section min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-red-50 to-red-200 text-gray-900 overflow-hidden py-8 lg:py-12">
    <!-- Background Pattern for Visual Interest -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="absolute inset-0"
        style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;><rect width=&quot;100&quot; height=&quot;100&quot; fill=&quot;%23ad2d2b&quot; opacity=&quot;0.05&quot;/><circle cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;30&quot; fill=&quot;none&quot; stroke=&quot;%23ad2d2b&quot; stroke-width=&quot;0.5&quot; opacity=&quot;0.1&quot;/></svg>');">
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Mobile Layout: Video Top, Text Bottom -->
      <div class="flex flex-col lg:hidden items-center justify-center space-y-6 w-full">
        <!-- Video Section - Mobile -->
        <div class="hero-video-container w-full max-w-md">
          <div class="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <video ref="heroVideoMobile" :poster="fallbackImage" class="w-full h-full object-cover" autoplay muted loop
              playsinline preload="metadata" @error="handleVideoError" @loadstart="handleVideoLoadStart"
              @canplay="handleVideoCanPlay">
              <source src="/Herovid.mp4" type="video/mp4">
              <!-- Fallback image when video fails -->
              <img :src="fallbackImage" alt="CENOVATE Construction Projects" class="w-full h-full object-cover"
                loading="eager" />
            </video>

            <!-- Video Loading Indicator -->
            <div v-if="videoLoading" class="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
          </div>
        </div>

        <!-- Text Content - Mobile -->
        <div class="text-content text-center space-y-4">
          <!-- Main Headline -->
          <h1 class="text-2xl md:text-3xl font-bold leading-tight text-gray-900">
            Building Ghana's
            <span class="text-primary-600">Future</span>,
            <br>
            One Project at a Time
          </h1>

          <!-- Value Proposition -->
          <p class="text-md text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Integrated construction, engineering, and property development solutions for Ghana's growing infrastructure
            needs.
          </p>

          <!-- CTA Buttons - Mobile Optimized -->
          <div class="flex flex-col gap-4 pt-4 w-full max-w-sm mx-auto">
            <a :href="whatsappLink"
              class="cta-primary bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[48px] flex items-center justify-center"
              target="_blank" rel="noopener noreferrer">
              <span class="mr-2">📱</span>
              WhatsApp +233-244274682
            </a>

            <a href="tel:+233244274682"
              class="cta-secondary border-2 border-primary-600 text-primary-600 px-6 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 min-h-[48px] flex items-center justify-center">
              <span class="mr-2">📞</span>
              Call Now
            </a>
          </div>
        </div>
      </div>

      <!-- Desktop Layout: Text Left, Video Right -->
      <div class="hidden lg:flex items-center justify-between space-x-12 w-full">
        <!-- Text Content - Desktop Left -->
        <div class="text-content flex-1 space-y-6">
          <!-- Main Headline -->
          <h1 class="text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
            Building Ghana's
            <span class="text-primary-600">Future</span>,
            <br>
            One Project at a Time
          </h1>

          <!-- Value Proposition -->
          <p class="text-lg text-gray-700 leading-relaxed max-w-lg">
            Integrated construction, engineering, and property development solutions for Ghana's growing infrastructure
            needs.
          </p>

          <!-- CTA Buttons - Desktop -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a :href="whatsappLink"
              class="cta-primary bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[48px] flex items-center justify-center"
              target="_blank" rel="noopener noreferrer">
              <span class="mr-2">📱</span>
              WhatsApp +233-244274682
            </a>

            <a href="tel:+233244274682"
              class="cta-secondary border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 min-h-[48px] flex items-center justify-center">
              <span class="mr-2">📞</span>
              Call Now
            </a>
          </div>
        </div>

        <!-- Video Section - Desktop Right -->
        <div class="hero-video-container flex-1 max-w-2xl">
          <div class="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <video ref="heroVideoDesktop" :poster="fallbackImage" class="w-full h-full object-cover" autoplay muted loop
              playsinline preload="metadata" @error="handleVideoError" @loadstart="handleVideoLoadStart"
              @canplay="handleVideoCanPlay">
              <source src="/Herovid.mp4" type="video/mp4">
              <!-- Fallback image when video fails -->
              <img :src="fallbackImage" alt="CENOVATE Construction Projects" class="w-full h-full object-cover"
                loading="eager" />
            </video>

            <!-- Video Loading Indicator -->
            <div v-if="videoLoading" class="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>

            <!-- Play/Pause Control for Desktop -->
            <button v-if="!videoLoading" @click="toggleVideo"
              class="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
              :aria-label="videoPlaying ? 'Pause video' : 'Play video'">
              <span v-if="videoPlaying">⏸️</span>
              <span v-else">▶️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from 'vue'

// ===== Video State Management =====
const heroVideoMobile = ref<HTMLVideoElement | null>(null)
const heroVideoDesktop = ref<HTMLVideoElement | null>(null)
const videoLoading = ref(true)
const videoPlaying = ref(true)

// ===== Configuration =====
const fallbackImage = '/heropicCenovate.webp'

// ===== WhatsApp Integration =====
const whatsappLink = computed(() => {
  const message = encodeURIComponent("Hello CENOVATE! I'm interested in your construction and engineering services. Can you provide more information about your projects and pricing?")
  return `https://wa.me/233244274682?text=${message}`
})

// ===== Video Event Handlers =====
function handleVideoError(event: Event) {
  console.warn('Video failed to load:', event)
  videoLoading.value = false
  // Fallback to image is handled by the <img> tag inside <video>
}

function handleVideoLoadStart() {
  videoLoading.value = true
}

function handleVideoCanPlay() {
  videoLoading.value = false
}

function toggleVideo() {
  const video = heroVideoDesktop.value
  if (video) {
    if (video.paused) {
      video.play()
      videoPlaying.value = true
    } else {
      video.pause()
      videoPlaying.value = false
    }
  }
}

// ===== Performance Optimization for Ghana Networks =====
onMounted(async () => {
  await nextTick()
  
  // Optimize video loading for slower networks
  const videos = [heroVideoMobile.value, heroVideoDesktop.value].filter(Boolean)
  
  videos.forEach(video => {
    if (video) {
      // Reduce video quality on slower connections
      if ('connection' in navigator && (navigator as any).connection) {
        const connection = (navigator as any).connection
        if (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
          // For very slow connections, show image instead
          video.style.display = 'none'
          videoLoading.value = false
        }
      }
      
      // Preload only metadata to save bandwidth
      video.preload = 'metadata'
    }
  })
})
</script>

<style scoped>
/* Hero Section Optimization */
.hero-section {
  position: relative;
  background-attachment: scroll;
  /* Better performance on mobile */
}

/* Video Container Styling */
.hero-video-container {
  position: relative;
}

/* CTA Button Animations */
.cta-primary,
.cta-secondary {
  position: relative;
  overflow: hidden;
}

.cta-primary::before,
.cta-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.cta-primary:hover::before,
.cta-secondary:hover::before {
  left: 100%;
}

/* Video Loading Animation */
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.video-loading {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Responsive Optimizations for Ghana Mobile Networks */
@media (max-width: 768px) {
  .hero-section {
    background-attachment: scroll;
    min-height: 80vh;
    padding: 1.5rem 0;
  }

  .hero-video-container {
    max-width: 100%;
  }
}

/* Reduced Motion for Accessibility */
@media (prefers-reduced-motion: reduce) {

  .cta-primary,
  .cta-secondary {
    transition: none;
  }

  .cta-primary:hover,
  .cta-secondary:hover {
    transform: none;
  }
}

/* High Contrast Mode Support */
@media (prefers-contrast: high) {
  .hero-section {
    background: white;
    color: black;
  }

  .cta-primary {
    border: 2px solid currentColor;
  }
}
</style>
