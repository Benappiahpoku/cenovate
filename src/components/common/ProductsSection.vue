<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/components/common/ProductsSection.vue -->
<template>
  <!-- ===== NAACHIAA ESTATES PRODUCTS SECTION START ===== -->
  <!-- 
    Simplified products section - mobile-first design for Ghana's market
    Follows TekLumen guidelines: 48px touch targets, WhatsApp integration, offline-aware
  -->
  <section class="py-16 px-4 bg-gray-50">
    <div class="container mx-auto max-w-6xl">
      
      <!-- ===== SECTION HEADER ===== -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Products
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Premium concrete products for Ghana's construction industry
        </p>
      </div>

      <!-- ===== PRODUCTS GRID ===== -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        
        <!-- ===== PRODUCT CARD ===== -->
        <div
          v-for="product in products"
          :key="product.id"
          @click="viewProduct(product)"
          class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95 min-h-[280px] flex flex-col"
          :aria-label="`Learn more about ${product.name}`"
          tabindex="0"
          @keydown.enter="viewProduct(product)"
          @keydown.space="viewProduct(product)"
        >
          
          <!-- ===== PRODUCT IMAGE PLACEHOLDER ===== -->
          <div class="relative h-48 bg-gradient-to-br from-blue-100 to-gray-100 rounded-t-xl flex items-center justify-center">
            <div class="text-6xl opacity-70 hover:opacity-100 transition-opacity duration-300">
              {{ product.icon }}
            </div>
            
            <!-- Popular Badge -->
            <div
              v-if="product.isPopular"
              class="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md"
            >
              Popular
            </div>
          </div>
          
          <!-- ===== PRODUCT INFO ===== -->
          <div class="p-6 flex-1 flex flex-col">
            <h3 class="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
              {{ product.name }}
            </h3>
            
            <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
              {{ product.description }}
            </p>
            
            <!-- Key Features -->
            <div class="space-y-2 mb-4">
              <div
                v-for="feature in product.keyFeatures"
                :key="feature"
                class="flex items-center text-sm text-gray-700"
              >
                <span class="text-green-500 mr-2">✓</span>
                {{ feature }}
              </div>
            </div>
            
            <!-- Learn More Arrow -->
            <div class="flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
              Learn More
              <svg class="w-4 h-4 ml-1 transform hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== VIEW ALL PRODUCTS CTA ===== -->
      <div class="text-center">
        <button
          @click="viewAllProducts"
          class="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 min-h-[48px]"
          aria-label="View complete product catalog"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
          </svg>
          <span>View All Products</span>
        </button>
      </div>
    </div>
  </section>
  <!-- ===== NAACHIAA ESTATES PRODUCTS SECTION END ===== -->
</template>

<script setup lang="ts">
// ===== Types & Interfaces =====
/**
 * Simple product structure for concrete products showcase
 * Contains essential information for construction customers
 */
interface Product {
  id: string
  name: string
  description: string
  icon: string
  keyFeatures: string[]
  isPopular?: boolean
  category: string
}

// ===== Constants & Config =====
/**
 * Product catalog data for Naachiaa Estates
 * Static data for fast loading on Ghana's slower networks
 */
const products: Product[] = [
  {
    id: 'concrete-blocks',
    name: 'Concrete Blocks',
    description: 'High-strength concrete blocks for residential and commercial construction. Available in various sizes.',
    icon: '🧱',
    keyFeatures: [
      'Multiple sizes available',
      'High compressive strength',
      'Weather resistant'
    ],
    isPopular: true,
    category: 'blocks'
  },
  {
    id: 'paving-tiles',
    name: 'Paving Tiles',
    description: 'Durable interlocking paving tiles for driveways, walkways, and outdoor spaces.',
    icon: '🔲',
    keyFeatures: [
      'Interlocking design',
      'Slip-resistant surface',
      'Easy installation'
    ],
    isPopular: true,
    category: 'tiles'
  },
  {
    id: 'road-kerbs',
    name: 'Road Kerbs',
    description: 'Precast concrete kerbs for road construction and drainage systems. Built to municipal standards.',
    icon: '🛣️',
    keyFeatures: [
      'Municipal standards',
      'Precise dimensions',
      'Durable construction'
    ],
    category: 'kerbs'
  },
  {
    id: 'culverts',
    name: 'Culverts',
    description: 'Reinforced concrete culverts for drainage and water management infrastructure projects.',
    icon: '🚇',
    keyFeatures: [
      'Reinforced design',
      'Various diameters',
      'Long-lasting durability'
    ],
    category: 'culverts'
  }
]

/**
 * Business contact info for product inquiries
 * Following TekLumen guidelines: WhatsApp integration required
 */
const businessInfo = {
  whatsappNumber: '+233244123456',
  companyName: 'Naachiaa Estates'
}

// ===== Main Logic =====
/**
 * Handle individual product click
 * Opens WhatsApp with product-specific inquiry for immediate engagement
 * WhatsApp integration required by TekLumen guidelines
 */
function viewProduct(product: Product): void {
  const message = `Hello ${businessInfo.companyName}! I'm interested in your ${product.name}. ${product.description} Could you provide me with pricing, specifications, and availability information?`
  
  const encodedMessage = encodeURIComponent(message)
  const cleanNumber = businessInfo.whatsappNumber.replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`
  
  // Open WhatsApp with error handling
  try {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error('Failed to open WhatsApp:', error)
    // Fallback: Show product info with phone number
    alert(`${product.name}\n\n${product.description}\n\nFeatures:\n${product.keyFeatures.map(f => `• ${f}`).join('\n')}\n\nWhatsApp failed to open. Please call us at: ${businessInfo.whatsappNumber}`)
  }
}

/**
 * Handle "View All Products" button click
 * Navigates to complete product catalog page
 */
function viewAllProducts(): void {
  // Navigate to products page
  try {
    window.location.href = '/products'
  } catch (error) {
    console.error('Navigation failed:', error)
    // Fallback: WhatsApp contact for product catalog
    const message = `Hello ${businessInfo.companyName}! I'd like to see your complete product catalog with pricing information. Could you send me the full details?`
    const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }
}
</script>

<!-- 
  ===== SIMPLIFIED DESIGN NOTES =====
  
  TEKLUMEN COMPLIANCE:
  - Mobile-first responsive design (grid-cols-1 md:grid-cols-2 lg:grid-cols-4) ✓
  - Touch targets minimum 48px (min-h-[48px]) ✓
  - WhatsApp integration for product inquiries ✓
  - Simple English error messages with clear recovery steps ✓
  - Bundle size optimization: minimal JavaScript ✓
  - Accessibility features (ARIA labels, keyboard navigation) ✓

  WHAT WE KEPT:
  - All 4 product cards with complete information
  - Professional construction industry design
  - Mobile-first responsive grid layout
  - Product cards with hover effects and visual feedback
  - Popular badges and key features display
  - "View All Products" call-to-action button
  - Touch-friendly interaction targets
  - Visual hierarchy with clear product names and descriptions

  WHAT WE SIMPLIFIED:
  - Removed complex class concatenations - simplified Tailwind classes
  - Simple WhatsApp integration for product inquiries
  - Basic navigation function with fallback error handling
  - Static product data - no dynamic loading or API calls
  - Minimal JavaScript - only 2 simple functions
  - Clean, easy-to-understand code structure
  - Streamlined error handling with user-friendly fallbacks

  GHANA-SPECIFIC OPTIMIZATIONS:
  - WhatsApp as primary contact method for product inquiries
  - Static data loading for fast performance on slow networks
  - Large touch targets for reliable mobile interaction
  - Clear messaging appropriate for varying digital literacy
  - Error handling provides fallbacks when features fail
  - Professional design builds credibility for B2B customers

  LEARNING NOTES:
  - This shows how to create effective product showcases with minimal code
  - Notice how product data is structured simply but comprehensively
  - WhatsApp integration provides immediate customer engagement
  - Card-based design works well on all screen sizes
  - All functionality works without complex backend systems
  - Error handling provides clear fallbacks for users
  - Static data approach ensures fast loading on slow connections
-->