<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/views/ProductsView.vue -->
<template>
  <!-- ===== NAACHIAA ESTATES PRODUCTS PAGE START ===== -->
  <main class="min-h-screen bg-gray-50">
    
    <!-- ===== HERO SECTION ===== -->
    <section class="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 pt-20 pb-16 px-4">
      <div class="container mx-auto text-center relative z-10 max-w-4xl">
        
        <!-- Products Hero Content -->
        <div class="flex justify-center mb-6">
          <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
            </svg>
          </div>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Products
        </h1>
        <p class="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed mb-6">
          Premium concrete products for Ghana's construction industry
        </p>
        
        <!-- Product Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <div class="text-2xl font-bold text-white">6+</div>
            <div class="text-blue-200 text-sm">Product Types</div>
          </div>
          <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <div class="text-2xl font-bold text-white">Quality</div>
            <div class="text-blue-200 text-sm">Guaranteed</div>
          </div>
          <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <div class="text-2xl font-bold text-white">Fast</div>
            <div class="text-blue-200 text-sm">Delivery</div>
          </div>
        </div>
      </div>
      
      <!-- Decorative bottom curve -->
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gray-50" style="clip-path: ellipse(100% 100% at 50% 100%)"></div>
    </section>

    <!-- ===== MAIN PRODUCTS SECTION ===== -->
    <section class="container mx-auto px-4 py-16 max-w-6xl -mt-8 relative z-20">
      
      <!-- ===== PRODUCT CATEGORIES FILTER ===== -->
      <div class="mb-12">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Product Range
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality concrete products for every construction need
          </p>
        </div>
        
        <!-- Simple Category Filter -->
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="px-6 py-3 rounded-lg font-medium transition-all duration-300 min-h-[48px]"
            :class="selectedCategory === category 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300'"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- ===== PRODUCTS GRID ===== -->
      <div class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Product Card -->
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            
            <!-- Product Image Placeholder -->
            <div class="relative aspect-[4/3] bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
              <div class="text-center text-gray-500">
                <svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5z"/>
                </svg>
                <p class="text-sm font-medium">{{ product.name }}</p>
              </div>
              
              <!-- Category Badge -->
              <div class="absolute top-4 left-4">
                <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {{ product.category }}
                </span>
              </div>
              
              <!-- Stock Status -->
              <div class="absolute bottom-4 right-4">
                <span 
                  class="px-3 py-1 rounded-full text-xs font-medium"
                  :class="product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                >
                  {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
                </span>
              </div>
            </div>
            
            <!-- Product Info -->
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-xl font-bold text-gray-900">
                  {{ product.name }}
                </h3>
                <div class="text-right">
                  <div class="text-lg font-bold text-blue-600">
                    ₵{{ product.price }}
                  </div>
                  <div class="text-xs text-gray-500">
                    {{ product.unit }}
                  </div>
                </div>
              </div>
              
              <!-- Product Description -->
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                {{ product.description }}
              </p>
              
              <!-- Key Features -->
              <div class="mb-4">
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="feature in product.features"
                    :key="feature"
                    class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                  >
                    {{ feature }}
                  </span>
                </div>
              </div>
              
              <!-- Action Buttons -->
              <div class="space-y-3">
                
                <!-- Get Quote Button -->
                <button
                  @click="requestQuote(product)"
                  :disabled="!product.inStock"
                  class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all duration-300 min-h-[48px]"
                  :class="{ 'opacity-50 cursor-not-allowed': !product.inStock }"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span>{{ product.inStock ? 'Get Quote' : 'Out of Stock' }}</span>
                </button>
                
                <!-- WhatsApp Share -->
                <button
                  @click="shareProduct(product)"
                  class="w-full flex items-center justify-center gap-2 px-4 py-2 text-green-600 border-2 border-green-600 hover:bg-green-50 font-medium rounded-lg transition-all duration-300 min-h-[48px]"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span class="text-sm">Share on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== CALL TO ACTION ===== -->
      <div class="text-center">
        <div class="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-blue-600">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Order?
          </h2>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us for quotes and bulk pricing on all concrete products
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <!-- WhatsApp Contact -->
            <button
              @click="openWhatsApp"
              class="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Order via WhatsApp
            </button>
            
            <!-- Phone Contact -->
            <a
              href="tel:+233244123456"
              class="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call for Quotes
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== OFFLINE INDICATOR ===== -->
    <div
      v-if="!isOnline"
      class="fixed bottom-4 left-4 right-4 bg-orange-500 text-white p-4 rounded-lg shadow-xl z-50"
    >
      <div class="flex items-center gap-3">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>
        <div>
          <div class="font-medium">You're offline</div>
          <div class="text-sm">Showing saved products</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// ===== Imports =====
import { ref, computed, onMounted } from 'vue'

// ===== Types & Interfaces =====
/**
 * Simple product structure for Ghana's construction market
 */
interface Product {
  id: string
  name: string
  description: string
  category: string
  price: number
  unit: string
  inStock: boolean
  features: string[]
}

// ===== Constants & Config =====
/**
 * Business contact info for WhatsApp integration
 */
const businessInfo = {
  whatsappNumber: '+233244123456',
  companyName: 'Naachiaa Estates'
}

/**
 * Simple product categories
 */
const categories = ['All Products', 'Blocks', 'Tiles', 'Kerbs', 'Pavers', 'Culverts']

/**
 * Simple products data for Naachiaa Estates
 */
const products: Product[] = [
  {
    id: '1',
    name: 'Standard Hollow Blocks',
    description: 'Premium quality hollow concrete blocks for residential and commercial construction.',
    category: 'Blocks',
    price: 2.50,
    unit: 'per block',
    inStock: true,
    features: ['High strength', 'Easy to handle', 'Cost effective']
  },
  {
    id: '2',
    name: 'Solid Concrete Blocks',
    description: 'Heavy-duty solid blocks for structural applications requiring maximum strength.',
    category: 'Blocks',
    price: 3.20,
    unit: 'per block',
    inStock: true,
    features: ['Maximum strength', 'Load bearing', 'Weather resistant']
  },
  {
    id: '3',
    name: 'Roofing Tiles',
    description: 'Durable concrete roofing tiles designed for Ghana\'s tropical climate.',
    category: 'Tiles',
    price: 8.50,
    unit: 'per tile',
    inStock: true,
    features: ['Weather resistant', 'Thermal insulation', 'Long lasting']
  },
  {
    id: '4',
    name: 'Floor Tiles',
    description: 'High-quality concrete floor tiles with non-slip surface for safety.',
    category: 'Tiles',
    price: 12.00,
    unit: 'per m²',
    inStock: true,
    features: ['Non-slip surface', 'Easy to clean', 'Indoor/outdoor use']
  },
  {
    id: '5',
    name: 'Road Kerbs',
    description: 'Standard concrete road kerbs for highway and street construction.',
    category: 'Kerbs',
    price: 45.00,
    unit: 'per meter',
    inStock: true,
    features: ['Highway grade', 'Weather resistant', 'Standard dimensions']
  },
  {
    id: '6',
    name: 'Interlocking Pavers',
    description: 'Decorative interlocking pavers for driveways and walkways.',
    category: 'Pavers',
    price: 25.00,
    unit: 'per m²',
    inStock: true,
    features: ['Interlocking design', 'Decorative patterns', 'Durable finish']
  },
  {
    id: '7',
    name: 'Box Culverts',
    description: 'Pre-cast concrete box culverts for drainage systems.',
    category: 'Culverts',
    price: 1200.00,
    unit: 'per unit',
    inStock: false,
    features: ['Heavy load capacity', 'Reinforced concrete', 'Long service life']
  }
]

// ===== Reactive State =====
const isOnline = ref(navigator.onLine)
const selectedCategory = ref('All Products')

// ===== Computed Properties =====
/**
 * Filter products based on selected category
 */
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'All Products') {
    return products
  }
  return products.filter(product => product.category === selectedCategory.value)
})

// ===== Main Logic =====
/**
 * Handle product quote request via WhatsApp
 */
function requestQuote(product: Product): void {
  const message = `Hello Naachiaa Estates! I'm interested in getting a quote for ${product.name}. Price: ₵${product.price} ${product.unit}. Please provide more details and bulk pricing.`
  
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
}

/**
 * Share product via WhatsApp
 */
function shareProduct(product: Product): void {
  const message = `Check out ${product.name} from ${businessInfo.companyName}! ${product.description} Price: ₵${product.price} ${product.unit}. Contact them for quotes!`
  
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
}

/**
 * Open general WhatsApp contact
 */
function openWhatsApp(): void {
  const message = 'Hello Naachiaa Estates! I\'m interested in your concrete products and would like to discuss pricing and availability.'
  
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
}

// ===== Lifecycle Hooks =====
onMounted(() => {
  // Monitor network status
  window.addEventListener('online', () => { isOnline.value = true })
  window.addEventListener('offline', () => { isOnline.value = false })
  
  // Track page view
  console.log('Products page loaded:', {
    page: 'products',
    company: businessInfo.companyName,
    productsCount: products.length,
    timestamp: new Date().toISOString()
  })
})
</script>

<!-- 
  ===== SIMPLIFIED DESIGN NOTES =====
  
  STREAMLINED FEATURES:
  - Removed complex filtering system with just simple category buttons
  - Simplified product data structure (removed detailed specifications)
  - Removed bulk order section and quality assurance sections
  - Simplified product cards with essential information only
  - Removed load more functionality (shows all products at once)
  
  MAINTAINED CORE FEATURES:
  - Mobile-first responsive design
  - WhatsApp integration for quotes and sharing
  - Professional construction industry styling
  - Offline indicator
  - Ghana-specific optimizations (WhatsApp priority, local currency)
  
  PERFORMANCE OPTIMIZATIONS:
  - Reduced JavaScript complexity
  - Simpler computed properties
  - Fewer DOM elements to render
  - Streamlined event handlers
-->