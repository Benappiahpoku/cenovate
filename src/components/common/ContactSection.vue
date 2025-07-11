<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/components/common/ContactSection.vue -->
<template>
  <!-- ===== NAACHIAA ESTATES CONTACT SECTION START ===== -->
  <!-- 
    Simplified contact section for homepage - provides easy ways to contact company
    Mobile-first design with WhatsApp priority for Ghana's market
  -->
  <section class="py-16 px-4 bg-blue-50">
    <div class="container mx-auto max-w-6xl">
      
      <!-- ===== SECTION HEADER ===== -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get In Touch
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to start your construction project? Contact us for quotes and expert advice
        </p>
      </div>

      <!-- ===== CONTACT OPTIONS GRID ===== -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- ===== WHATSAPP CONTACT ===== -->
        <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">WhatsApp Chat</h3>
          <p class="text-gray-600 mb-6 text-sm">
            Quick responses and instant quotes via WhatsApp
          </p>
          <button
            @click="openWhatsApp"
            class="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 min-h-[48px]"
          >
            Chat Now
          </button>
          <p class="text-xs text-gray-500 mt-2">+233 24 412 3456</p>
        </div>

        <!-- ===== PHONE CONTACT ===== -->
        <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
          <p class="text-gray-600 mb-6 text-sm">
            Speak directly with our construction experts
          </p>
          <a
            href="tel:+233244123456"
            class="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 min-h-[48px] flex items-center justify-center"
          >
            Call Now
          </a>
          <p class="text-xs text-gray-500 mt-2">Mon-Sat: 7AM - 6PM</p>
        </div>

        <!-- ===== LOCATION INFO ===== -->
        <div class="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
          <p class="text-gray-600 mb-6 text-sm">
            Industrial Area, Tema<br>
            Greater Accra Region<br>
            Ghana
          </p>
          <button
            @click="openDirections"
            class="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 min-h-[48px]"
          >
            Get Directions
          </button>
        </div>
      </div>
    </div>
  </section>
  <!-- ===== NAACHIAA ESTATES CONTACT SECTION END ===== -->
</template>

<script setup lang="ts">
// ===== Constants & Config =====
/**
 * Business contact information for Naachiaa Estates
 */
const businessInfo = {
  phone: '+233244123456',
  whatsappNumber: '+233244123456',
  address: 'Industrial Area, Tema, Greater Accra Region, Ghana',
  companyName: 'Naachiaa Estates'
}

// ===== Main Logic =====
/**
 * Opens WhatsApp chat with pre-filled construction inquiry message
 * Primary contact method for Ghana's mobile-first users
 */
function openWhatsApp(): void {
  const message = 'Hello Naachiaa Estates! I\'m interested in your concrete products for my construction project. Could you provide me with quotes and more information?'
  
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
  
  try {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error('Failed to open WhatsApp:', error)
    alert(`WhatsApp failed to open. Please call us at: ${businessInfo.phone}`)
  }
}

/**
 * Opens Google Maps directions to company location
 * Helps customers find the physical location in Tema
 */
function openDirections(): void {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address)}`
  
  try {
    window.open(mapsUrl, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error('Failed to open maps:', error)
    alert(`Maps failed to open. Address: ${businessInfo.address}`)
  }
}
</script>

<!-- 
  ===== SIMPLIFIED DESIGN NOTES =====
  
  WHAT WE KEPT:
  - All essential contact options (WhatsApp, phone, location)
  - Professional construction industry design
  - Mobile-first responsive layout
  - WhatsApp priority for Ghana market
  - Touch-friendly buttons (48px minimum height)
  - Error handling with fallbacks
  
  WHAT WE REMOVED & SIMPLIFIED:
  - Removed entire Quick Quote Request form section
  - Removed form-related reactive state (form, isSubmitting, showSuccess)
  - Removed form submission logic (handleSubmit function)
  - Removed ContactForm interface (no longer needed)
  - Removed Vue imports (ref) - no reactive state needed now
  - Simplified script to only essential functions
  - Clean, minimal code structure
  
  BENEFITS OF REMOVAL:
  - 70% less JavaScript code (from ~150 lines to ~45 lines)
  - No complex form state management
  - No form validation logic needed  
  - Users get direct contact via WhatsApp/phone (faster for Ghana market)
  - Simpler maintenance and fewer potential bugs
  - Faster page loading with less JavaScript
  
  LEARNING NOTES:
  - This shows how to create effective contact sections with minimal code
  - Focus on direct communication methods (WhatsApp/phone) instead of forms
  - Simple error handling provides fallbacks when features fail
  - Mobile-first design works perfectly for Ghana's smartphone users
  - Static contact information loads instantly on slow connections
-->