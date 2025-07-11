<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/components/common/FeaturedProjects.vue -->
<template>
  <!-- ===== NAACHIAA ESTATES FEATURED PROJECTS SECTION START ===== -->
  <!-- 
    Simplified featured projects section for homepage - showcases key projects
    Mobile-first design with touch-friendly cards for Ghana's market
  -->
  <section class="py-16 px-4 bg-gray-50">
    <div class="container mx-auto max-w-6xl">
      
      <!-- ===== SECTION HEADER ===== -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Showcasing our finest construction work across Ghana
        </p>
      </div>

      <!-- ===== PROJECTS GRID ===== -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        
        <!-- ===== PROJECT CARD ===== -->
        <div
          v-for="project in featuredProjects"
          :key="project.id"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
          @click="viewProject(project)"
          role="button"
          :aria-label="`View ${project.title} project details`"
          tabindex="0"
          @keydown.enter="viewProject(project)"
          @keydown.space="viewProject(project)"
        >
          
          <!-- ===== PROJECT IMAGE PLACEHOLDER ===== -->
          <div class="relative aspect-[4/3] bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
            <div class="text-center text-gray-500">
              <svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
              </svg>
              <p class="text-sm font-medium">{{ project.title }}</p>
              <p class="text-xs">{{ project.location }}</p>
            </div>
            
            <!-- ===== PROJECT STATUS BADGE ===== -->
            <div class="absolute top-4 right-4">
              <span 
                class="px-3 py-1 rounded-full text-xs font-medium"
                :class="project.status === 'completed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'"
              >
                {{ project.status === 'completed' ? 'Completed' : 'Ongoing' }}
              </span>
            </div>
            
            <!-- ===== HOVER OVERLAY ===== -->
            <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div class="opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div class="bg-white rounded-full p-3 shadow-lg">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <!-- ===== PROJECT INFO ===== -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-3">
              <h3 class="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                {{ project.title }}
              </h3>
              <div class="text-sm text-gray-500">
                {{ project.year }}
              </div>
            </div>
            
            <!-- ===== PROJECT DETAILS ===== -->
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
              
              <!-- Description -->
              <p class="text-gray-600 text-sm leading-relaxed">
                {{ project.description }}
              </p>
            </div>
            
            <!-- ===== VIEW DETAILS BUTTON ===== -->
            <div class="mt-4 pt-4 border-t border-gray-100">
              <div class="flex items-center justify-between">
                <div class="text-sm text-gray-500">
                  {{ project.duration }} project
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

      <!-- ===== VIEW ALL PROJECTS CTA ===== -->
      <div class="text-center">
        <button
          @click="viewAllProjects"
          class="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px]"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
          </svg>
          <span>View All Projects</span>
        </button>
      </div>
    </div>
  </section>
  <!-- ===== NAACHIAA ESTATES FEATURED PROJECTS SECTION END ===== -->
</template>

<script setup lang="ts">
// ===== Types & Interfaces =====
/**
 * Simple project structure for featured projects display
 * Contains essential information for construction project showcase
 */
interface FeaturedProject {
  id: string
  title: string
  description: string
  location: string
  client: string
  year: number
  status: 'completed' | 'ongoing'
  duration: string
}

// ===== Constants & Config =====
/**
 * Featured projects data for Naachiaa Estates
 * Showcases variety of construction work across Ghana
 */
const featuredProjects: FeaturedProject[] = [
  {
    id: 'proj-001',
    title: 'Tema Community Housing',
    description: 'Large-scale residential development featuring 200 housing units using premium concrete blocks and tiles.',
    location: 'Tema, Greater Accra',
    client: 'Ghana Real Estate Developers',
    year: 2023,
    status: 'completed',
    duration: '18-month'
  },
  {
    id: 'proj-002',
    title: 'Accra Mall Extension',
    description: 'Commercial mall extension requiring specialized concrete products for high-traffic areas.',
    location: 'Accra, Greater Accra',
    client: 'AttridgeMills Shopping Centers',
    year: 2023,
    status: 'completed',
    duration: '12-month'
  },
  {
    id: 'proj-003',
    title: 'Cape Coast University Housing',
    description: 'Modern student accommodation featuring aesthetic concrete products for educational infrastructure.',
    location: 'Cape Coast, Central Region',
    client: 'University of Cape Coast',
    year: 2024,
    status: 'ongoing',
    duration: '15-month'
  }
]

/**
 * Business contact info for WhatsApp project inquiries
 */
const businessInfo = {
  whatsappNumber: '+233244123456',
  companyName: 'Naachiaa Estates'
}

// ===== Main Logic =====
/**
 * Handles individual project viewing
 * Opens WhatsApp with project-specific inquiry for immediate engagement
 */
function viewProject(project: FeaturedProject): void {
  const message = `Hello Naachiaa Estates! I'm interested in learning more about your ${project.title} project in ${project.location}. Could you provide more details about similar work you can do for my construction project?`
  
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
}

/**
 * Navigates to full projects page
 * Uses Vue Router to show complete project portfolio
 */
function viewAllProjects(): void {
  // Navigate to projects page using Vue Router
  // This assumes you have Vue Router set up with a '/projects' route
  window.location.href = '/projects'
}
</script>

<!-- 
  ===== SIMPLIFIED DESIGN NOTES =====
  
  WHAT WE KEPT:
  - All featured project content and professional design
  - Mobile-first responsive grid layout
  - Project cards with hover effects and visual feedback
  - WhatsApp integration for project inquiries
  - Professional construction industry styling
  - Touch-friendly interaction targets (48px minimum)
  - Accessibility features (ARIA labels, keyboard navigation)
  
  WHAT WE SIMPLIFIED:
  - Removed complex state management and reactive variables
  - Simple static project data array instead of API calls
  - Basic WhatsApp integration without complex message building
  - Simple navigation function instead of complex routing logic
  - Minimal JavaScript - just 2 simple functions
  - Clean, easy-to-understand code structure
  
  LEARNING NOTES:
  - This shows how to create effective project showcases with minimal code
  - Notice how project data is structured simply but comprehensively
  - The WhatsApp integration provides immediate customer engagement
  - Card-based design works well on all screen sizes
  - All functionality works without complex backend systems
  - Hover effects and visual feedback enhance user experience
-->