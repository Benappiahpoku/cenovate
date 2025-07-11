<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/views/ProjectsView.vue -->
<template>
  <!-- ===== NAACHIAA ESTATES PROJECTS PAGE START ===== -->
  <!-- 
    Simplified projects showcase - mobile-first design for Ghana's construction market
    Follows TekLumen guidelines: WhatsApp integration, touch-optimized, offline-aware
  -->
  <main class="min-h-screen bg-gray-50">
    
    <!-- ===== HERO SECTION ===== -->
    <section class="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 pt-20 pb-16 px-4">
      <div class="container mx-auto text-center relative z-10 max-w-4xl">
        
        <!-- Projects Hero Content -->
        <div class="flex justify-center mb-6">
          <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
            </svg>
          </div>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Projects
        </h1>
        <p class="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed mb-6">
          Showcasing 30+ years of excellence in concrete construction across Ghana
        </p>
        
        <!-- Project Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <div class="text-2xl font-bold text-white">5,000+</div>
            <div class="text-blue-200 text-sm">Projects Completed</div>
          </div>
          <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <div class="text-2xl font-bold text-white">16</div>
            <div class="text-blue-200 text-sm">Regions Covered</div>
          </div>
          <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <div class="text-2xl font-bold text-white">1,200+</div>
            <div class="text-blue-200 text-sm">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== MAIN PROJECTS SECTION ===== -->
    <section class="container mx-auto px-4 py-16 max-w-6xl">
      
      <!-- ===== PROJECT CATEGORIES FILTER ===== -->
      <div class="mb-12">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Work
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential developments to major infrastructure, see how our concrete products 
            have built Ghana's future
          </p>
        </div>
        
        <!-- Category Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-3 mb-8">
          <button
            v-for="category in projectCategories"
            :key="category.id"
            @click="selectedCategory = category.id"
            class="px-6 py-3 rounded-lg font-medium transition-all duration-300 min-h-[48px] border-2 text-sm md:text-base"
            :class="selectedCategory === category.id 
              ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
              : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600'"
          >
            <div class="flex items-center gap-2">
              <span>{{ category.name }}</span>
              <span 
                class="text-xs px-2 py-1 rounded-full"
                :class="selectedCategory === category.id ? 'bg-blue-500' : 'bg-gray-200 text-gray-600'"
              >
                {{ category.count }}
              </span>
            </div>
          </button>
        </div>
      </div>

      <!-- ===== FEATURED PROJECTS GRID ===== -->
      <div class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Project Card Template -->
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            @click="openProjectModal(project)"
            role="button"
            :aria-label="`View details for ${project.title}`"
            tabindex="0"
            @keydown.enter="openProjectModal(project)"
            @keydown.space="openProjectModal(project)"
          >
            
            <!-- Project Image Placeholder -->
            <div class="relative aspect-[4/3] overflow-hidden">
              <div class="w-full h-full bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
                <div class="text-center text-gray-500">
                  <svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
                  </svg>
                  <p class="text-sm font-medium">{{ project.title }}</p>
                  <p class="text-xs">{{ project.location }}</p>
                </div>
              </div>
              
              <!-- Project Category Badge -->
              <div class="absolute top-4 left-4">
                <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {{ getCategoryName(project.category) }}
                </span>
              </div>
              
              <!-- Project Status Badge -->
              <div class="absolute top-4 right-4">
                <span 
                  class="px-3 py-1 rounded-full text-xs font-medium"
                  :class="project.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-orange-100 text-orange-800'"
                >
                  {{ project.status === 'completed' ? 'Completed' : 'Ongoing' }}
                </span>
              </div>
            </div>
            
            <!-- Project Info -->
            <div class="p-6">
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                  {{ project.title }}
                </h3>
                <div class="text-sm text-gray-500">
                  {{ project.year }}
                </div>
              </div>
              
              <div class="space-y-3">
                <!-- Location -->
                <div class="flex items-center gap-2 text-gray-600">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-sm">{{ project.location }}</span>
                </div>
                
                <!-- Client -->
                <div class="flex items-center gap-2 text-gray-600">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 12a6 6 0 016 6H3a6 6 0 016-6z"/>
                  </svg>
                  <span class="text-sm">{{ project.client }}</span>
                </div>
                
                <!-- Products Used -->
                <div class="flex flex-wrap gap-1 mt-3">
                  <span
                    v-for="product in project.productsUsed.slice(0, 2)"
                    :key="product"
                    class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {{ product }}
                  </span>
                  <span
                    v-if="project.productsUsed.length > 2"
                    class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                  >
                    +{{ project.productsUsed.length - 2 }} more
                  </span>
                </div>
                
                <!-- Description Preview -->
                <p class="text-gray-600 text-sm leading-relaxed mt-3">
                  {{ project.description.substring(0, 120) }}{{ project.description.length > 120 ? '...' : '' }}
                </p>
              </div>
              
              <!-- View Details Button -->
              <div class="mt-4 pt-4 border-t border-gray-100">
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-500">
                    {{ project.duration }} duration
                  </div>
                  <div class="flex items-center gap-2 text-blue-600 font-medium text-sm hover:gap-3 transition-all duration-300">
                    <span>View Details</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== TESTIMONIALS SECTION ===== -->
      <div class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by contractors, developers, and builders across Ghana
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Testimonial Card -->
          <div
            v-for="testimonial in clientTestimonials"
            :key="testimonial.id"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600"
          >
            <!-- Stars Rating -->
            <div class="flex items-center gap-1 mb-4">
              <svg
                v-for="star in 5"
                :key="star"
                class="w-5 h-5"
                :class="star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            
            <!-- Testimonial Quote -->
            <blockquote class="text-gray-700 mb-6 leading-relaxed">
              "{{ testimonial.quote }}"
            </blockquote>
            
            <!-- Client Info -->
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 12a6 6 0 016 6H3a6 6 0 016-6z"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
                <div class="text-sm text-gray-600">{{ testimonial.title }}</div>
                <div class="text-sm text-blue-600">{{ testimonial.company }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== CALL TO ACTION ===== -->
      <div class="text-center">
        <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p class="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Naachiaa Estates 
            for their concrete construction needs.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <!-- WhatsApp Contact -->
            <button
              @click="openWhatsApp"
              class="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px]"
              aria-label="Contact us on WhatsApp"
            >
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Get Quote via WhatsApp
            </button>
            
            <!-- Phone Contact -->
            <a
              href="tel:+233244123456"
              class="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px]"
            >
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== OFFLINE INDICATOR ===== -->
    <div
      v-if="!isOnline"
      class="fixed bottom-4 left-4 right-4 bg-orange-500 text-white p-4 rounded-lg shadow-xl z-50"
      role="alert"
      aria-live="polite"
    >
      <div class="flex items-center gap-3">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>
        <div>
          <div class="font-medium">You're offline</div>
          <div class="text-sm">Showing saved project data</div>
        </div>
      </div>
    </div>
  </main>
  <!-- ===== NAACHIAA ESTATES PROJECTS PAGE END ===== -->
</template>

<script setup lang="ts">
// ===== Imports =====
import { ref, computed, onMounted } from 'vue'

// ===== Types & Interfaces =====
/**
 * Simple project structure for construction industry showcase
 * Contains essential information for Ghana's construction market
 */
interface Project {
  id: string
  title: string
  description: string
  category: string
  location: string
  client: string
  year: number
  duration: string
  status: 'completed' | 'ongoing'
  productsUsed: string[]
}

/**
 * Simple project category definition
 */
interface ProjectCategory {
  id: string
  name: string
  count: number
}

/**
 * Simple client testimonial structure
 */
interface ClientTestimonial {
  id: string
  name: string
  title: string
  company: string
  quote: string
  rating: number
}

// ===== Constants & Config =====
/**
 * Business contact information for Naachiaa Estates
 */
const businessInfo = {
  whatsappNumber: '+233244123456',
  companyName: 'Naachiaa Estates'
}

/**
 * Simple project categories for filtering
 */
const projectCategories: ProjectCategory[] = [
  { id: 'all', name: 'All Projects', count: 0 },
  { id: 'residential', name: 'Residential', count: 0 },
  { id: 'commercial', name: 'Commercial', count: 0 },
  { id: 'infrastructure', name: 'Infrastructure', count: 0 }
]

/**
 * Sample projects data - simplified for learning
 */
const allProjects: Project[] = [
  {
    id: 'res-001',
    title: 'Tema Community Housing Development',
    description: 'Large-scale residential development featuring 200 housing units using our premium concrete blocks and tiles. This project showcases our ability to deliver quality materials for mass housing construction in Ghana.',
    category: 'residential',
    location: 'Tema, Greater Accra',
    client: 'Ghana Real Estate Developers',
    year: 2023,
    duration: '18 months',
    status: 'completed',
    productsUsed: ['Concrete Blocks', 'Roof Tiles', 'Kerbs', 'Pavers']
  },
  {
    id: 'com-001',
    title: 'Accra Mall Extension Project',
    description: 'Commercial mall extension requiring specialized concrete products for high-traffic areas. Our concrete tiles and blocks provided the durability needed for this major commercial development.',
    category: 'commercial',
    location: 'Accra, Greater Accra',
    client: 'AttridgeMills Shopping Centers',
    year: 2023,
    duration: '12 months',
    status: 'completed',
    productsUsed: ['Heavy-duty Concrete Blocks', 'Commercial Tiles', 'Decorative Kerbs']
  },
  {
    id: 'inf-001',
    title: 'Kumasi-Accra Highway Drainage System',
    description: 'Major infrastructure project involving concrete culverts and channels for highway drainage. This project demonstrates our capacity to handle large-scale government infrastructure contracts.',
    category: 'infrastructure',
    location: 'Kumasi-Accra Highway',
    client: 'Ghana Highways Authority',
    year: 2022,
    duration: '24 months',
    status: 'completed',
    productsUsed: ['Concrete Culverts', 'Drainage Channels', 'Road Kerbs']
  },
  {
    id: 'res-002',
    title: 'Cape Coast University Student Housing',
    description: 'Student accommodation project featuring modern dormitory buildings with our aesthetic concrete products. This project combines functionality with visual appeal for educational infrastructure.',
    category: 'residential',
    location: 'Cape Coast, Central Region',
    client: 'University of Cape Coast',
    year: 2023,
    duration: '15 months',
    status: 'ongoing',
    productsUsed: ['Colored Concrete Blocks', 'Decorative Tiles', 'Landscape Kerbs']
  },
  {
    id: 'com-002',
    title: 'Takoradi Market Redevelopment',
    description: 'Market redevelopment project creating modern trading facilities with durable concrete infrastructure. Our products ensure long-lasting performance in high-traffic commercial environments.',
    category: 'commercial',
    location: 'Takoradi, Western Region',
    client: 'Sekondi-Takoradi Metropolitan Assembly',
    year: 2022,
    duration: '20 months',
    status: 'completed',
    productsUsed: ['Anti-slip Tiles', 'Drainage Blocks', 'Commercial Kerbs', 'Pavers']
  }
]

/**
 * Client testimonials - simplified for learning
 */
const clientTestimonials: ClientTestimonial[] = [
  {
    id: 'test-001',
    name: 'Kwame Asante',
    title: 'Project Manager',
    company: 'Ghana Real Estate Developers',
    quote: 'Naachiaa Estates delivered exactly what we needed for our Tema housing project. Their concrete blocks are top quality and their delivery was always on time. Highly recommended for any serious construction project.',
    rating: 5
  },
  {
    id: 'test-002',
    name: 'Akosua Mensah',
    title: 'Construction Engineer',
    company: 'AttridgeMills Shopping Centers',
    quote: 'We have worked with many concrete suppliers, but Naachiaa Estates stands out for their consistency and professionalism. Their products met all our commercial-grade requirements perfectly.',
    rating: 5
  },
  {
    id: 'test-003',
    name: 'Joseph Osei',
    title: 'Site Supervisor',
    company: 'Independent Contractor',
    quote: 'For over 15 years, I have trusted Naachiaa Estates for all my concrete needs. Their quality never disappoints and their prices are fair. They understand the Ghanaian construction market very well.',
    rating: 5
  }
]

// ===== Reactive State =====
/**
 * Simple state management
 */
const isOnline = ref(navigator.onLine)
const selectedCategory = ref('all')

// ===== Computed Properties =====
/**
 * Filter projects based on selected category
 */
const filteredProjects = computed(() => {
  const filtered = selectedCategory.value === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory.value)
  
  // Update category counts
  updateCategoryCounts()
  
  return filtered
})

// ===== Helper Functions =====
/**
 * Get category name by ID
 */
function getCategoryName(categoryId: string): string {
  const category = projectCategories.find(cat => cat.id === categoryId)
  return category?.name || categoryId
}

/**
 * Update category counts based on available projects
 */
function updateCategoryCounts(): void {
  projectCategories.forEach(category => {
    if (category.id === 'all') {
      category.count = allProjects.length
    } else {
      category.count = allProjects.filter(project => project.category === category.id).length
    }
  })
}

/**
 * Open project modal/detail view
 * Opens WhatsApp with project-specific inquiry
 */
function openProjectModal(project: Project): void {
  const message = `Hello ${businessInfo.companyName}! I'm interested in learning more about your ${project.title} project in ${project.location}. Could you provide more details about similar work you can do for my construction project?`
  
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
  
  try {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error('Failed to open WhatsApp:', error)
    alert(`WhatsApp failed to open. Please call us at: ${businessInfo.whatsappNumber}`)
  }
}

// ===== Main Logic =====
/**
 * Handle WhatsApp contact opening
 * Opens WhatsApp with general project inquiry message
 */
function openWhatsApp(): void {
  const message = `Hello ${businessInfo.companyName}! I viewed your impressive project portfolio and would like to discuss how you can help with my construction project. Could we chat about concrete product requirements and pricing?`
  
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
  
  try {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  } catch (error) {
    console.error('Failed to open WhatsApp:', error)
    alert(`WhatsApp failed to open. Please call us at: ${businessInfo.whatsappNumber}`)
  }
}

// ===== Lifecycle Hooks =====
/**
 * Component initialization
 */
onMounted(() => {
  // Monitor network status changes
  window.addEventListener('online', () => {
    isOnline.value = true
  })
  
  window.addEventListener('offline', () => {
    isOnline.value = false
  })
  
  // Initialize category counts
  updateCategoryCounts()
  
  // Track page view
  console.log('Projects page loaded:', {
    page: 'projects',
    company: businessInfo.companyName,
    projectsCount: allProjects.length,
    isOnline: isOnline.value,
    timestamp: new Date().toISOString()
  })
})
</script>

<!-- 
  ===== SIMPLIFIED DESIGN NOTES =====
  
  TEKLUMEN COMPLIANCE:
  - Mobile-first responsive design (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) ✓
  - Touch targets minimum 48px (min-h-[48px]) ✓
  - WhatsApp integration for project inquiries ✓
  - Simple English error messages with clear recovery steps ✓
  - Bundle size optimization: minimal JavaScript ✓
  - Accessibility features (ARIA labels, semantic HTML) ✓

  WHAT WE KEPT:
  - All project showcase content with detailed information
  - Professional construction industry design
  - Category filtering by construction type
  - Client testimonials with ratings for trust building
  - Mobile-first responsive grid layout
  - WhatsApp integration for project inquiries
  - Local project locations (Tema, Accra, Kumasi, Cape Coast, Takoradi)
  - Professional B2B testimonials from Ghana construction industry

  WHAT WE SIMPLIFIED:
  - Removed complex interface definitions - simplified to essential fields only
  - Removed pagination/load more functionality - show all projects at once
  - Simplified category system - removed icons and complex filtering
  - Removed complex project properties (challenges, results, imageLoaded)
  - Minimal JavaScript - only essential functions (4 total functions)
  - Clean, easy-to-understand code structure
  - Streamlined error handling with user-friendly fallbacks

  GHANA-SPECIFIC OPTIMIZATIONS:
  - WhatsApp as primary contact method for project inquiries
  - Static data loading for fast performance on slow networks
  - Large touch targets for reliable mobile interaction
  - Clear messaging appropriate for business decision-makers
  - Error handling provides fallbacks when features fail
  - Professional design builds credibility for B2B customers

  LEARNING NOTES:
  - This shows how to create effective project showcase pages with minimal code
  - Notice how project data includes specific context for B2B credibility
  - WhatsApp integration provides immediate way to get project details
  - Category filtering works without complex state management
  - All functionality works without complex backend systems
  - Error handling provides clear fallbacks for users
  - Static approach ensures fast loading on slow connections
-->