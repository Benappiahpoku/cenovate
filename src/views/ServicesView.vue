<template>
  <main class="min-h-screen bg-gray-50">
 

    <div class="max-w-6xl mx-auto p-4 py-12">
      <!-- ===== [PAGE TITLE] START ===== -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          A one-stop shop for construction, engineering, property development, and more across Ghana
        </p>
      </div>
      <!-- ===== [PAGE TITLE] END ===== -->

      <!-- ===== [SERVICES GRID] START ===== -->
      <section class="services-section mb-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="service in services" :key="service.id"
            class="service-card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <!-- Service icon -->
            <div class="service-icon mb-4">
              <div class="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                <span class="text-white text-2xl">{{ service.icon }}</span>
              </div>
            </div>

            <h3 class="text-xl font-semibold mb-3 text-gray-900">
              {{ service.name }}
            </h3>

            <p class="text-gray-600 mb-4 leading-relaxed">
              {{ service.description }}
            </p>

            <!-- Service features -->
            <ul class="text-sm text-gray-600 mb-4 space-y-1">
              <li v-for="feature in service.features" :key="feature" class="flex items-start">
                <span class="text-primary mr-2">•</span>
                {{ feature }}
              </li>
            </ul>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-2">
              <button @click="contactForService(service)"
                class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex-1 min-h-[48px]">
                Get Quote
              </button>
              <button @click="learnMore(service)"
                class="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors flex-1 min-h-[48px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- ===== [SERVICES GRID] END ===== -->

      <!-- ===== [FLAGSHIP PROJECT HIGHLIGHT] START ===== -->
      <section class="bg-primary text-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
        <div class="text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-4">
            🏘️ Featured: Affordable Housing Program
          </h2>
          <p class="text-lg text-gray-100 mb-6 max-w-3xl mx-auto">
            Our flagship initiative brings quality, affordable housing to peri-urban and rural communities
            across Ghana using innovative local materials and sustainable construction methods.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="text-center">
              <div class="text-3xl mb-2">🎯</div>
              <h3 class="font-semibold mb-2">Target Communities</h3>
              <p class="text-gray-100">Peri-urban & rural areas starting in Ashanti Region</p>
            </div>

            <div class="text-center">
              <div class="text-3xl mb-2">🔬</div>
              <h3 class="font-semibold mb-2">Local Innovation</h3>
              <p class="text-gray-100">Pozzolana-based cement & compressed earth blocks</p>
            </div>

            <div class="text-center">
              <div class="text-3xl mb-2">🏠</div>
              <h3 class="font-semibold mb-2">Scalable Solutions</h3>
              <p class="text-gray-100">Starter homes with expandable designs</p>
            </div>
          </div>

          <router-link to="/contact"
            class="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors min-h-[48px]">
            Learn About Housing Program
          </router-link>
        </div>
      </section>
      <!-- ===== [FLAGSHIP PROJECT HIGHLIGHT] END ===== -->

      <!-- ===== [WHY CHOOSE CENOVATE] START ===== -->
      <section class="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Why Choose CENOVATE?
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="advantage in advantages" :key="advantage.title" class="text-center p-4">
            <div class="text-3xl mb-3">{{ advantage.icon }}</div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ advantage.title }}</h3>
            <p class="text-sm text-gray-600">{{ advantage.description }}</p>
          </div>
        </div>
      </section>
      <!-- ===== [WHY CHOOSE CENOVATE] END ===== -->

      <!-- ===== [CONTACT CTA] START ===== -->
      <section class="text-center bg-gray-100 rounded-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">
          Ready to Start Your Project?
        </h2>
        <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact us today for a free consultation. Our team is ready to discuss your construction,
          engineering, or property development needs.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="contactWhatsApp"
            class="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors min-h-[48px]">
            📱 WhatsApp: +233-244274682
          </button>

          <router-link to="/contact"
            class="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors min-h-[48px] inline-flex items-center justify-center">
            📧 Send Message
          </router-link>

          <a href="tel:+233244274682"
            class="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors min-h-[48px] inline-flex items-center justify-center">
            📞 Call Now
          </a>
        </div>
      </section>
      <!-- ===== [CONTACT CTA] END ===== -->
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// ===== Types & Interfaces =====
interface Service {
  id: string
  name: string
  description: string
  icon: string
  features: string[]
  category: string
}

interface BusinessAdvantage {
  title: string
  icon: string
  description: string
}

// ===== Services Data (Based on Company Profile) =====
const services = ref<Service[]>([
  {
    id: 'construction',
    name: 'Building Construction & Civil Works',
    description: 'Comprehensive construction services for residential, commercial, and industrial buildings, plus public infrastructure.',
    icon: '🏗️',
    category: 'Construction',
    features: [
      'Residential & commercial buildings',
      'Roads, bridges & drainage systems',
      'Industrial facilities',
      'Public infrastructure projects'
    ]
  },
  {
    id: 'facility-management',
    name: 'Facility Management Services',
    description: 'Complete property management solutions including maintenance, cleaning, repairs, and security coordination.',
    icon: '🔧',
    category: 'Management',
    features: [
      'Preventive maintenance programs',
      'Cleaning & janitorial services',
      'Security coordination',
      'Property management'
    ]
  },
  {
    id: 'infrastructure',
    name: 'Civil Infrastructure Development',
    description: 'Large-scale public infrastructure projects with focus on Public-Private Partnerships (PPPs).',
    icon: '🛣️',
    category: 'Infrastructure',
    features: [
      'Feasibility studies',
      'Public-Private Partnerships',
      'Project planning & management',
      'Large-scale infrastructure'
    ]
  },
  {
    id: 'smep-engineering',
    name: 'SMEP Engineering Services',
    description: 'Specialized structural, mechanical, and electrical engineering design, consultancy, and supervision.',
    icon: '⚙️',
    category: 'Engineering',
    features: [
      'Structural engineering design',
      'Mechanical systems',
      'Electrical installations',
      'Engineering supervision'
    ]
  },
  {
    id: 'project-management',
    name: 'Project Management & Supervision',
    description: 'End-to-end project management ensuring on-time, on-budget delivery to highest quality standards.',
    icon: '📋',
    category: 'Management',
    features: [
      'Project planning & scheduling',
      'Budget management',
      'Quality assurance',
      'Timeline optimization'
    ]
  },
  {
    id: 'research-development',
    name: 'Construction R&D',
    description: 'Development of cost-effective, sustainable, locally-sourced building materials and construction methods.',
    icon: '🔬',
    category: 'Innovation',
    features: [
      'Pozzolana-based cement',
      'Compressed earth blocks',
      'Sustainable materials',
      'Local resource utilization'
    ]
  },
  {
    id: 'property-sales',
    name: 'Property Sales & Rentals',
    description: 'Development, sale, and rental management of residential and commercial properties.',
    icon: '🏘️',
    category: 'Property',
    features: [
      'Property development',
      'Sales & marketing',
      'Rental management',
      'Investment opportunities'
    ]
  },
  {
    id: 'general-trading',
    name: 'General Trading',
    description: 'Import, export, and local distribution of building materials and construction equipment.',
    icon: '📦',
    category: 'Trading',
    features: [
      'Building materials import/export',
      'Equipment distribution',
      'Supply chain management',
      'Local sourcing'
    ]
  }
])

// ===== Business Advantages =====
const advantages = ref<BusinessAdvantage[]>([
  {
    title: 'Integrated Solutions',
    icon: '🔄',
    description: 'End-to-end services from design to maintenance'
  },
  {
    title: 'Local Innovation',
    icon: '💡',
    description: 'R&D in sustainable Ghanaian materials'
  },
  {
    title: 'Regional Focus',
    icon: '📍',
    description: 'Deep expertise in Ashanti Region & beyond'
  },
  {
    title: 'Quality Delivery',
    icon: '⭐',
    description: 'On-time, on-budget project completion'
  }
])

// ===== Contact Functions =====
function contactWhatsApp(): void {
  const message = "Hello CENOVATE! I'm interested in your services. Can you provide more information?"
  const phoneNumber = "+233244274682"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

function contactForService(service: Service): void {
  const message = `Hello CENOVATE! I'm interested in your ${service.name} service. Can you provide a quote and more details?`
  const phoneNumber = "+233244274682"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

function learnMore(service: Service): void {
  const message = `Hello! I'd like to learn more about your ${service.name} service. What are the specific offerings and processes involved?`
  const phoneNumber = "+233244274682"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
</script>

<style scoped>
/* ===== GHANA-OPTIMIZED STYLES ===== */
.transition-colors {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.transition-shadow {
  transition: box-shadow 0.3s ease;
}

/* Ensure minimum touch targets for mobile users */
button,
a {
  min-height: 48px;
  min-width: 48px;
}

/* Primary color definitions */
.text-primary {
  color: #ad2d2b;
}

.bg-primary {
  background-color: #ad2d2b;
}

.border-primary {
  border-color: #ad2d2b;
}

.hover\:bg-primary-dark:hover {
  background-color: #8b2422;
}

.hover\:text-primary:hover {
  color: #ad2d2b;
}

.hover\:bg-primary:hover {
  background-color: #ad2d2b;
}

/* Service card hover effects */
.service-card:hover {
  transform: translateY(-2px);
}

.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Responsive grid adjustments for Ghana mobile users */
@media (max-width: 768px) {
  .service-card {
    padding: 1.25rem;
  }

  .service-icon .w-16 {
    width: 3rem;
    height: 3rem;
  }

  .service-icon .text-2xl {
    font-size: 1.25rem;
  }
}

/* Optimize for slow connections */
@media (prefers-reduced-motion: reduce) {
  .transition-colors,
  .transition-shadow,
  .service-card {
    transition: none;
  }
}
</style>