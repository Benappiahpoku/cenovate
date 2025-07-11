<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/components/common/AboutSection.vue -->
<template>
  <!-- ===== NAACHIAA ESTATES ABOUT SECTION START ===== -->
  <!-- 
    Simplified about section for homepage - showcases company credibility
    Mobile-first design with touch-friendly elements for Ghana's market
  -->
  <section class="py-16 px-4 bg-white">
    <div class="container mx-auto max-w-6xl">
      
      <!-- ===== SECTION HEADER ===== -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About Naachiaa Estates
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Ghana's leading concrete products manufacturer with 30+ years of excellence
        </p>
      </div>

      <!-- ===== MAIN CONTENT GRID ===== -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- ===== COMPANY STORY (LEFT COLUMN) ===== -->
        <div class="space-y-6">
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-gray-900">
              Building Ghana's Future Since 1990
            </h3>
            <p class="text-gray-700 leading-relaxed">
              For over three decades, Naachiaa Estates has been at the forefront of Ghana's 
              construction industry, providing premium concrete products that have shaped our 
              nation's infrastructure.
            </p>
            <p class="text-gray-700 leading-relaxed">
              From residential developments in Accra to major highways across all 16 regions, 
              our concrete blocks, tiles, and construction materials have built the foundation 
              of modern Ghana.
            </p>
          </div>
          
          <!-- ===== KEY ACHIEVEMENTS ===== -->
          <div class="grid grid-cols-2 gap-4">
            <div class="text-center p-4 bg-blue-50 rounded-lg">
              <div class="text-3xl font-bold text-blue-600">5,000+</div>
              <div class="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div class="text-center p-4 bg-green-50 rounded-lg">
              <div class="text-3xl font-bold text-green-600">16</div>
              <div class="text-sm text-gray-600">Regions Served</div>
            </div>
            <div class="text-center p-4 bg-purple-50 rounded-lg">
              <div class="text-3xl font-bold text-purple-600">1,200+</div>
              <div class="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div class="text-center p-4 bg-orange-50 rounded-lg">
              <div class="text-3xl font-bold text-orange-600">30+</div>
              <div class="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
          
          <!-- ===== CTA BUTTON ===== -->
          <div class="pt-4">
            <button
              @click="openWhatsApp"
              class="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px]"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Chat with Us</span>
            </button>
          </div>
        </div>

        <!-- ===== COMPANY FEATURES (RIGHT COLUMN) ===== -->
        <div class="space-y-6">
          
          <!-- ===== QUALITY PROMISE ===== -->
          <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h4>
                <p class="text-gray-700 text-sm">
                  Every concrete product meets international standards with rigorous quality control 
                  and testing procedures.
                </p>
              </div>
            </div>
          </div>

          <!-- ===== NATIONWIDE DELIVERY ===== -->
          <div class="bg-green-50 p-6 rounded-xl border border-green-200">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">Nationwide Delivery</h4>
                <p class="text-gray-700 text-sm">
                  Fast, reliable delivery to all 16 regions of Ghana with flexible scheduling 
                  to meet your project timelines.
                </p>
              </div>
            </div>
          </div>

          <!-- ===== EXPERT SUPPORT ===== -->
          <div class="bg-purple-50 p-6 rounded-xl border border-purple-200">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 12a6 6 0 016 6H3a6 6 0 016-6z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">Expert Support</h4>
                <p class="text-gray-700 text-sm">
                  Our experienced team provides technical guidance and support throughout 
                  your construction project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ===== NAACHIAA ESTATES ABOUT SECTION END ===== -->
</template>

<script setup lang="ts">
// ===== Simple WhatsApp Integration =====
/**
 * Opens WhatsApp chat with pre-filled message about company inquiry
 * Used for immediate customer engagement from about section
 */
function openWhatsApp(): void {
  const message = 'Hello Naachiaa Estates! I read about your company and would like to learn more about your concrete products and services.'
  const phoneNumber = '+233244123456'
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
  
  // Open WhatsApp in new tab
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
}
</script>

<!-- 
  ===== SIMPLIFIED DESIGN NOTES =====
  
  WHAT WE KEPT:
  - All content and professional design
  - Mobile-first responsive layout
  - WhatsApp integration for Ghana market
  - Company statistics and achievements
  - Three key value propositions
  - Professional construction industry styling
  
  WHAT WE SIMPLIFIED:
  - Removed complex state management
  - Single simple function for WhatsApp
  - No complicated animations or interactions
  - Straightforward grid layout
  - Minimal JavaScript for better performance
  - Clean, easy-to-understand code structure
  
  LEARNING NOTES:
  - This shows how to create a professional about section with minimal code
  - Notice how we use Tailwind classes for all styling
  - The WhatsApp function is simple but effective
  - Content is organized in clear sections with semantic HTML
-->