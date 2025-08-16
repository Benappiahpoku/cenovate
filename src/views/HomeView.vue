<template>
  <div class="home-page">
    
<HeroSection />
    <!-- About Preview Section - Enhanced -->
    <section class="about-preview py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About CENOVATE
            </h2>
            <div class="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Cenovate Company is a Ghanaian enterprise delivering sustainable solutions 
              in the built environment. With our strategic focus on Kumasi and the Ashanti Region, 
              we provide comprehensive services from construction and engineering to property development.
            </p>
          </div>

          <!-- Service Highlights Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div 
              v-for="(highlight, index) in serviceHighlights" 
              :key="index"
              class="service-highlight text-center p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div class="service-icon w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-3xl">{{ highlight.icon }}</span>
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-900">{{ highlight.title }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ highlight.description }}</p>
            </div>
          </div>

          <!-- Stats Row -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 py-8 bg-gray-50 rounded-xl">
            <div class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary mb-2">8+</div>
              <div class="text-sm text-gray-600">Core Services</div>
            </div>
            <div class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary mb-2">100%</div>
              <div class="text-sm text-gray-600">Ghanaian Owned</div>
            </div>
            <div class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
              <div class="text-sm text-gray-600">WhatsApp Support</div>
            </div>
            <div class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-primary mb-2">⭐⭐⭐⭐⭐</div>
              <div class="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          <!-- CTA -->
          <div class="text-center">
            <router-link 
              to="/about" 
              class="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[48px]"
            >
              Learn More About Us
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview - Redesigned -->
    <section class="services-overview py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Complete Service Portfolio
            </h2>
            <div class="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p class="text-lg text-gray-700 max-w-3xl mx-auto">
              From concept to completion, we offer integrated solutions for all your built environment needs. 
              A true one-stop shop for construction, engineering, and property services in Ghana.
            </p>
          </div>

          <!-- Services Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div 
              v-for="service in services" 
              :key="service.id"
              class="service-card group bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-primary-200"
            >
              <div class="service-icon w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span class="text-2xl">{{ service.icon }}</span>
              </div>
              
              <h3 class="text-lg font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                {{ service.name }}
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                {{ service.description }}
              </p>

              <div class="flex items-center text-primary text-sm font-medium">
                <span>Learn More</span>
                <svg class="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          <!-- View All Services CTA -->
          <div class="text-center">
            <router-link 
              to="/services" 
              class="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[48px]"
            >
              View All Services
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

<FlagShip />

   <!-- Testimonial Section - Enhanced -->
    <section class="testimonial py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Trusted by Ghana's Leading Organizations
            </h2>
            <div class="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div> 
          
         
            <TestimonialsSection />
          <!-- Trust Indicators -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
            <div>
              <div class="text-2xl mb-2">🤝</div>
              <div class="text-sm font-semibold text-gray-900">Trusted Partners</div>
            </div>
            <div>
              <div class="text-2xl mb-2">📍</div>
              <div class="text-sm font-semibold text-gray-900">Accra & Kumasi Based</div>
            </div>
            <div>
              <div class="text-2xl mb-2">🎯</div>
              <div class="text-sm font-semibold text-gray-900">Quality Focused</div>
            </div>
            <div>
              <div class="text-2xl mb-2">⚡</div>
              <div class="text-sm font-semibold text-gray-900">Fast Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Contact CTA -->
    <section class="contact-cta py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;><circle cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;40&quot; fill=&quot;none&quot; stroke=&quot;%23ffffff&quot; stroke-width=&quot;0.5&quot;/></svg>');"></div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <div class="space-y-8">
            <!-- Main CTA -->
            <div>
              <h2 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to Start Your 
                <span class="text-yellow-300">Dream Project?</span>
              </h2>
              <p class="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get in touch with us today to discuss your construction, engineering, or property development needs. 
                We're here to help bring your vision to life with professional excellence and local expertise.
              </p>
            </div>

            <!-- Contact Options -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <!-- WhatsApp -->
              <a
                :href="whatsappLink"
                class="contact-option group bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[120px] flex flex-col items-center justify-center space-y-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="text-3xl mb-2">📱</div>
                <div class="font-semibold">WhatsApp Chat</div>
                <div class="text-sm opacity-90">+233-244274682</div>
                <div class="text-xs opacity-75">Instant Response</div>
              </a>

              <!-- Email -->
              <a
                href="mailto:hello@cenovate.com"
                class="contact-option group bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[120px] flex flex-col items-center justify-center space-y-2"
              >
                <div class="text-3xl mb-2">📧</div>
                <div class="font-semibold">Email Us</div>
                <div class="text-sm opacity-90">hello@cenovate.com</div>
                <div class="text-xs opacity-75">Professional Inquiries</div>
              </a>

              <!-- Contact Page -->
              <router-link
                to="/contact"
                class="contact-option group bg-primary hover:bg-primary-700 text-white p-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[120px] flex flex-col items-center justify-center space-y-2"
              >
                <div class="text-3xl mb-2">📋</div>
                <div class="font-semibold">Contact Form</div>
                <div class="text-sm opacity-90">Detailed Inquiry</div>
                <div class="text-xs opacity-75">Project Details</div>
              </router-link>
            </div>

            <!-- Business Hours -->
            <div class="pt-8 border-t border-gray-700">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div class="text-yellow-300 font-semibold mb-1">Business Hours</div>
                  <div class="text-sm text-gray-300">Mon-Fri: 8:00 AM - 5:00 PM</div>
                </div>
                <div>
                  <div class="text-yellow-300 font-semibold mb-1">Location</div>
                  <div class="text-sm text-gray-300">Kumasi, Ashanti Region</div>
                </div>
                <div>
                  <div class="text-yellow-300 font-semibold mb-1">Response Time</div>
                  <div class="text-sm text-gray-300">Within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import FlagShip from '@/components/common/FlagShip.vue'
import HeroSection from '@/components/common/HeroSection.vue'
import TestimonialsSection from '@/components/common/TestimonialsSection.vue'
import { ref, computed, onMounted } from 'vue'



// ===== Country Configuration =====


// ===== Service Highlights Data =====
const serviceHighlights = ref([
  {
    icon: '🏗️',
    title: 'Construction Excellence',
    description: 'Quality building and civil works with local expertise and international standards.'
  },
  {
    icon: '⚙️',
    title: 'Engineering Solutions',
    description: 'Comprehensive structural, mechanical, and electrical engineering services.'
  },
  {
    icon: '🏘️',
    title: 'Property Development',
    description: 'Complete property sales, rentals, and management solutions.'
  }
])

// ===== Services Data - All 8 Core Services =====
const services = ref([
  {
    id: '1',
    name: 'Building Construction & Civil Works',
    description: 'Construction of buildings, roads, bridges, drainage systems',
    icon: '🏗️'
  },
  {
    id: '2',
    name: 'Facility Management',
    description: 'Maintenance, cleaning, repairs, and security coordination',
    icon: '🔧'
  },
  {
    id: '3',
    name: 'Civil Infrastructure Development',
    description: 'Feasibility, PPPs, and public works management',
    icon: '🛣️'
  },
  {
    id: '4',
    name: 'SMEP Engineering',
    description: 'Structural, mechanical, and electrical design & supervision',
    icon: '⚙️'
  },
  {
    id: '5',
    name: 'Project Management',
    description: 'Full project supervision and delivery coordination',
    icon: '📋'
  },
  {
    id: '6',
    name: 'Construction R&D',
    description: 'Sustainable local materials (pozzolana, compressed blocks)',
    icon: '🔬'
  },
  {
    id: '7',
    name: 'Property Sales & Rentals',
    description: 'Development, sale, and management of properties',
    icon: '🏘️'
  },
  {
    id: '8',
    name: 'General Trading',
    description: 'Import, export, and distribution of building materials',
    icon: '📦'
  }
])

// ===== WhatsApp Integration =====
const whatsappLink = computed(() => {
  const message = encodeURIComponent("Hello CENOVATE! I'm interested in your construction and engineering services. Can you provide more information about your projects and pricing?")
  return `https://wa.me/233244274682?text=${message}`
})


// ===== Performance Monitoring - No tracking, just console logging =====
onMounted(() => {
  // Monitor page load time for Ghana network optimization
  if (typeof window !== 'undefined') {
    const loadTime = performance.now()
    if (loadTime > 3000) { // More than 3s on slow networks
      console.warn('Page load time exceeded 3s - optimize for Ghana networks')
    }
  }
})
</script>

<style scoped>
/* ===== Hero Animations ===== */
.hero-section {
  background-attachment: fixed;
}

.hero-logo img {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

/* ===== CTA Button Styles ===== */
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

/* ===== Service Card Animations ===== */
.service-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  transform: translateY(-8px) scale(1.02);
}

.service-highlight {
  transition: all 0.3s ease;
}

.service-highlight:hover {
  transform: translateY(-4px);
}

/* ===== Contact Option Hover Effects ===== */
.contact-option {
  position: relative;
  overflow: hidden;
}

.contact-option::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-option:hover::before {
  opacity: 1;
}

/* ===== Responsive Optimizations for Ghana Mobile ===== */
@media (max-width: 768px) {
  .hero-section {
    background-attachment: scroll; /* Better performance on mobile */
  }
  
  .service-card:hover {
    transform: translateY(-4px) scale(1.01); /* Reduced animation on mobile */
  }
}

/* ===== Loading States ===== */
.hero-image-container, .service-icon {
  background-size: cover;
  background-position: center;
}

/* ===== Accessibility Improvements ===== */
@media (prefers-reduced-motion: reduce) {
  .service-card, .service-highlight, .contact-option {
    transition: none;
  }
  
  .service-card:hover, .service-highlight:hover, .contact-option:hover {
    transform: none;
  }
}

/* ===== Focus States for Keyboard Navigation ===== */
.cta-primary:focus, .cta-secondary:focus, .contact-option:focus {
  outline: 2px solid #fbbf24;
  outline-offset: 2px;
}
</style>