<template>
    <!-- Flagship Project - Enhanced -->
    <section class="flagship-project py-20 bg-primary text-white relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10 pointer-events-none">
            <div class="absolute inset-0"
                style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;><rect width=&quot;50&quot; height=&quot;50&quot; fill=&quot;%23ffffff&quot; opacity=&quot;0.05&quot;/><rect x=&quot;50&quot; y=&quot;50&quot; width=&quot;50&quot; height=&quot;50&quot; fill=&quot;%23ffffff&quot; opacity=&quot;0.05&quot;/></svg>');">
            </div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-6xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <!-- Content (left on desktop, top on mobile) -->
                    <div class="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
                        <div
                            class="inline-block bg-yellow-300 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold">
                            🏠 Flagship Initiative
                        </div>

                        <h2 class="text-3xl md:text-4xl font-bold leading-tight">
                            Affordable Housing for
                            <span class="text-yellow-300">Every Ghanaian</span>
                        </h2>

                        <p class="text-lg text-primary-100 leading-relaxed max-w-xl">
                            Our innovative housing program addresses Ghana's housing deficit through scalable,
                            community-based development. Using locally-sourced materials and sustainable construction
                            methods, we're making quality housing accessible to peri-urban and rural communities.
                        </p>

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
                                    <h4 class="font-semibold text-white">Sustainable Local Materials</h4>
                                    <p class="text-primary-100 text-sm">Pozzolana-based cement and compressed earth
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
                                    <h4 class="font-semibold text-white">Community-Focused Development</h4>
                                    <p class="text-primary-100 text-sm">Built with and for local communities</p>
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
                                    <h4 class="font-semibold text-white">Expandable Housing Units</h4>
                                    <p class="text-primary-100 text-sm">Designs that grow with families' needs</p>
                                </div>
                            </div>
                        </div>

                        <!-- CTA -->
                        <div class="pt-4">
                            <button @click="contactForHousing"
                                class="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[48px]">
                                Learn More About Housing
                                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Visual (right on desktop, bottom on mobile) -->
                    <div class="flex justify-center">
                        <div class="relative w-full max-w-lg h-64 md:h-80 lg:h-96">
                            <!-- Responsive rectangle with background and icon -->
                            <div
                                class="w-full h-full bg-primary-700 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden">
                                <div class="flex flex-col items-center justify-center w-full h-full">
                                    <div class="text-6xl mb-2">🏠</div>
                                    <p class="text-white/80 text-lg font-semibold">Image Placeholder</p>
                                    <p class="text-white/50 text-xs">Affordable Housing Project</p>
                                </div>
                            </div>
                            <!-- Decorative elements -->
                            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-300 rounded-full opacity-30">
                            </div>
                            <div class="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-full opacity-20"></div>
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