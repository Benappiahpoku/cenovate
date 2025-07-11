<template>
  <!-- Hero Section - Centered for all screens -->
  <section class="hero-section min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-800 to-primary-600 text-white overflow-hidden">
    <!-- Background Pattern for Visual Interest -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute inset-0"
        style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;><rect width=&quot;100&quot; height=&quot;100&quot; fill=&quot;%23ffffff&quot; opacity=&quot;0.05&quot;/><circle cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;30&quot; fill=&quot;none&quot; stroke=&quot;%23ffffff&quot; stroke-width=&quot;0.5&quot; opacity=&quot;0.1&quot;/></svg>');">
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col items-center justify-center text-center space-y-8 w-full">
        <!-- Logo (optional, uncomment if needed) -->
        <!--
        <div class="hero-logo mb-4">
          <img 
            src="/cenovatelogo.png" 
            alt="CENOVATE Limited Company" 
            class="h-16 md:h-20 mx-auto"
            loading="eager"
            width="200"
            height="80"
          />
        </div>
        -->

        <!-- Main Headline -->
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Building Ghana's
          <span class="text-yellow-300">Future</span>,
          <br class="hidden sm:block">
          One Project at a Time
        </h1>

        <!-- Value Proposition -->
        <p class="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
          Integrated construction, engineering, and property development solutions
          for Ghana's growing infrastructure needs. Based in Kumasi, serving the Ashanti Region with excellence.
        </p>

        <!-- Trust Indicators -->
        <div class="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-200">
          <div class="flex items-center">
            <span class="mr-2">🏗️</span>
            <span>8+ Core Services</span>
          </div>
          <div class="flex items-center">
            <span class="mr-2">🇬🇭</span>
            <span>Proudly Ghanaian</span>
          </div>
          <div class="flex items-center">
            <span class="mr-2">⭐</span>
            <span>Local Expertise</span>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center">
          <a :href="whatsappLink"
            class="cta-primary bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[48px] flex items-center justify-center"
            target="_blank" rel="noopener noreferrer">
            <span class="mr-2">📱</span>
            WhatsApp +233-244274682
          </a>

          <a href="tel:+233244274682"
            class="cta-secondary border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 min-h-[48px] flex items-center justify-center">
            <span class="mr-2">📞</span>
            Call Now
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// ===== WhatsApp Integration =====
const whatsappLink = computed(() => {
  const message = encodeURIComponent("Hello CENOVATE! I'm interested in your construction and engineering services. Can you provide more information about your projects and pricing?")
  return `https://wa.me/233244274682?text=${message}`
})
</script>

<style scoped>
.hero-section {
  position: relative;
  background-attachment: fixed;
}
.hero-logo img {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}
/* CTA Button Styles */
.cta-primary, .cta-secondary {
  position: relative;
  overflow: hidden;
}
.cta-primary::before, .cta-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}
.cta-primary:hover::before, .cta-secondary:hover::before {
  left: 100%;
}
/* Responsive Optimizations for Ghana Mobile */
@media (max-width: 768px) {
  .hero-section {
    background-attachment: scroll;
  }
}
</style>