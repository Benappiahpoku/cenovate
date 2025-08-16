<template>
    <!-- Flagship Project - Enhanced with Matching Gradient -->
    <section
        class="flagship-project py-20 bg-gradient-to-br from-white via-red-50 to-red-200 text-gray-900 relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5 pointer-events-none">
            <div class="absolute inset-0"
                style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;><rect width=&quot;100&quot; height=&quot;100&quot; fill=&quot;%23ad2d2b&quot; opacity=&quot;0.05&quot;/><circle cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;30&quot; fill=&quot;none&quot; stroke=&quot;%23ad2d2b&quot; stroke-width=&quot;0.5&quot; opacity=&quot;0.1&quot;/></svg>');">
            </div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <!-- Content (left on desktop, top on mobile) -->
                    <div class="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <div
                            class="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            🏠 Flagship Initiative
                        </div>

                        <h2 class="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                            Affordable Housing for
                            <span class="text-primary-600">Every Ghanaian</span>
                        </h2>



                        <!-- Features List -->
                        <div class="space-y-4 w-full max-w-md">
                            <div class="flex items-start space-x-3">
                                <div
                                    class="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900 text-left ">Sustainable Local Materials</h4>
                                    <p class="text-gray-600 text-sm  text-left">Pozzolana-based cement and compressed
                                        earth
                                        blocks</p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-3">
                                <div
                                    class="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900 text-left">Community-Focused Development</h4>
                                    <p class="text-gray-600 text-sm text-left">Built with and for local communities</p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-3">
                                <div
                                    class="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900 text-left">Expandable Housing Units</h4>
                                    <p class="text-gray-600 text-sm text-left">Designs that grow with families' needs
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- CTA -->
                        <div class="pt-4">
                            <button @click="contactForHousing"
                                class="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[48px]">
                                Learn More About Housing
                                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Image Visual (right on desktop, bottom on mobile) -->
                    <div class="flex justify-center">
                        <div class="relative w-full max-w-lg">
                            <div class="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                                <img src="/affordablehousing.webp"
                                    alt="CENOVATE Affordable Housing Project - Community Development in Ghana"
                                    class="w-full h-full object-cover" loading="lazy" width="600" height="400" />

                                <!-- Overlay with project info -->
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                                    <div class="absolute bottom-4 left-4 text-white">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                                            <span class="text-sm font-medium">Active Development</span>
                                        </div>
                                        <p class="text-xs opacity-90">Sustainable Housing Solutions</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Decorative elements -->
                            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-600 rounded-full opacity-20">
                            </div>
                            <div class="absolute -top-6 -left-6 w-16 h-16 bg-gray-900 rounded-full opacity-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

// ===== Helper Functions =====
function contactForHousing() {
    const message = encodeURIComponent("Hello CENOVATE! I'm interested in learning more about your Affordable Housing initiative. Can you provide details about pricing, locations, and timeline?")
    const whatsappUrl = `https://wa.me/233244274682?text=${message}`
    window.open(whatsappUrl, '_blank')
}
</script>

<style scoped>
/* Flagship Section Optimization */
.flagship-project {
  position: relative;
  background-attachment: scroll; /* Better performance on mobile */
}

/* CTA Button Enhancement */
.flagship-project button {
  position: relative;
  overflow: hidden;
}

.flagship-project button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.flagship-project button:hover::before {
  left: 100%;
}

/* Mobile Optimizations for Ghana Networks */
@media (max-width: 768px) {
  .flagship-project {
    background-attachment: scroll;
    padding: 3rem 0;
  }
  
  .flagship-project img {
    max-width: 100%;
    height: auto;
  }
}

/* Reduced Motion for Accessibility */
@media (prefers-reduced-motion: reduce) {
  .flagship-project button {
    transition: none;
  }
  
  .flagship-project button:hover {
    transform: none;
  }
}

/* High Contrast Mode Support */
@media (prefers-contrast: high) {
  .flagship-project {
    background: white;
  }
  
  .flagship-project h2,
  .flagship-project p {
    color: black;
  }
}
</style>