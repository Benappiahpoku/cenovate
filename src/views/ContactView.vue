<template>
  <main class="min-h-screen bg-gray-50">


    <div class="max-w-6xl mx-auto p-4 py-12">
      <!-- ===== [PAGE TITLE] START ===== -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact CENOVATE</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Ready to transform your construction and development project? Get in touch with our team in 
          {{ countryConfig.name }} for professional consultation and quality service delivery.
        </p>
      </div>
      <!-- ===== [PAGE TITLE] END ===== -->

      <!-- ===== [CONTACT METHODS GRID] START ===== -->
      <section class="mb-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- WhatsApp Contact -->
          <div class="contact-card bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl">📱</span>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-900">WhatsApp (Recommended)</h3>
            <p class="text-gray-600 mb-4">Get instant response and quick consultation</p>
            <p class="font-medium text-gray-900 mb-4">{{ formatGhanaianPhone(businessPhone) }}</p>
            <button 
              @click="contactWhatsApp"
              class="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors min-h-[48px]"
            >
              💬 Chat on WhatsApp
            </button>
          </div>

          <!-- Phone Call -->
          <div class="contact-card bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl">📞</span>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-900">Phone Call</h3>
            <p class="text-gray-600 mb-4">Speak directly with our team</p>
            <p class="font-medium text-gray-900 mb-4">{{ formatGhanaianPhone(businessPhone) }}</p>
            <a 
              :href="`tel:${businessPhone}`"
              class="block w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors min-h-[48px] leading-[24px]"
            >
              📞 Call Now
            </a>
          </div>

          <!-- Email -->
          <div class="contact-card bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl">📧</span>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-gray-900">Email</h3>
            <p class="text-gray-600 mb-4">Send detailed project requirements</p>
            <p class="font-medium text-gray-900 mb-4">{{ businessEmail }}</p>
            <a 
              :href="emailLink"
              class="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors min-h-[48px] leading-[24px]"
            >
              📧 Send Email
            </a>
          </div>

        </div>
      </section>
      <!-- ===== [CONTACT METHODS GRID] END ===== -->

      <!-- ===== [BUSINESS HOURS & LOCATION] START ===== -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        
        <!-- Business Hours -->
        <section class="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
            🕒 Business Hours in {{ countryConfig.name }}
          </h2>
          
          <div class="space-y-4">
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium text-gray-700">Monday - Friday</span>
              <span class="text-gray-900">{{ countryConfig.businessHours }}</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="font-medium text-gray-700">Saturday</span>
              <span class="text-gray-900">9:00 AM - 1:00 PM</span>
            </div>
            <div class="flex justify-between items-center py-2">
              <span class="font-medium text-gray-700">Sunday</span>
              <span class="text-red-600">Closed</span>
            </div>
          </div>

          <!-- Business Status -->
          <div class="mt-6 p-4 rounded-lg" :class="isBusinessOpen() ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
            <div class="flex items-center">
              <span class="text-lg mr-2">{{ isBusinessOpen() ? '🟢' : '🔴' }}</span>
              <span class="font-medium" :class="isBusinessOpen() ? 'text-green-800' : 'text-red-800'">
                {{ isBusinessOpen() ? 'We are currently open' : 'We are currently closed' }}
              </span>
            </div>
            <p class="text-sm mt-1" :class="isBusinessOpen() ? 'text-green-700' : 'text-red-700'">
              {{ isBusinessOpen() ? 'Contact us now for immediate assistance' : 'We will respond to messages during business hours' }}
            </p>
          </div>
        </section>

        <!-- Office Location -->
        <section class="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
            📍 Our Location
          </h2>
          
          <div class="space-y-4">
            <div class="flex items-start">
              <span class="text-lg mr-3 mt-1">🏢</span>
              <div>
                <h3 class="font-semibold text-gray-900">CENOVATE Limited Company</h3>
                <p class="text-gray-600">Kumasi Head Office</p>
              </div>
            </div>

            <div class="flex items-start">
              <span class="text-lg mr-3 mt-1">📍</span>
              <div>
                <p class="text-gray-700">Ashanti Region, Ghana</p>
                <p class="text-sm text-gray-600">(Detailed address provided upon appointment)</p>
              </div>
            </div>

            <div class="flex items-start">
              <span class="text-lg mr-3 mt-1">🌍</span>
              <div>
                <p class="text-gray-700">Service Areas:</p>
                <p class="text-sm text-gray-600">Kumasi, Ashanti Region, and across Ghana</p>
              </div>
            </div>
          </div>

          <!-- Direction Button -->
          <div class="mt-6">
            <button 
              @click="getDirections"
              class="w-full bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors min-h-[48px]"
            >
              🗺️ Get Directions to Kumasi Office
            </button>
          </div>
        </section>

      </div>
      <!-- ===== [BUSINESS HOURS & LOCATION] END ===== -->

      <!-- ===== [SERVICES QUICK ACCESS] START ===== -->
      <section class="bg-primary text-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-6">
          🚀 Quick Service Inquiries
        </h2>
        <p class="text-center text-gray-100 mb-8 max-w-3xl mx-auto">
          Need specific information about our services? Click below to send a targeted WhatsApp message 
          about your project needs.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            v-for="service in quickServices"
            :key="service.id"
            @click="contactForQuickService(service)"
            class="bg-white bg-opacity-10 hover:bg-opacity-20 text-white p-4 rounded-lg transition-colors min-h-[48px]"
          >
            <div class="text-2xl mb-2">{{ service.icon }}</div>
            <div class="text-sm font-medium">{{ service.name }}</div>
          </button>
        </div>
      </section>
      <!-- ===== [SERVICES QUICK ACCESS] END ===== -->

     

      <!-- ===== [EMERGENCY CONTACT] START ===== -->
      <section class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 md:p-8">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            🚨 Emergency Construction Services
          </h2>
          <p class="text-gray-700 mb-6 max-w-2xl mx-auto">
            Need urgent construction or facility management assistance? Our emergency response team 
            is available for critical situations.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              @click="emergencyWhatsApp"
              class="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors min-h-[48px]"
            >
              🚨 Emergency WhatsApp
            </button>
            <a 
              :href="`tel:${businessPhone}`"
              class="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors min-h-[48px] inline-flex items-center justify-center"
            >
              📞 Emergency Call
            </a>
          </div>

          <p class="text-sm text-gray-600 mt-4">
            Available 24/7 for structural emergencies, facility breakdowns, and urgent repairs
          </p>
        </div>
      </section>
      <!-- ===== [EMERGENCY CONTACT] END ===== -->

    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { isBusinessOpen } from '@/services/GhanaBusinessUtils'
import { formatGhanaianPhone } from '@/services/GhanaBusinessUtils'
import { getCountryConfig} from '@/services/CountryDetection'

// ===== Country Configuration =====
const countryConfig = getCountryConfig()

// ===== Business Contact Information =====
const businessPhone = '+233244274682'
const businessEmail = 'hello@cenovate.com'
// const businessWebsite = 'www.cenovate.com'

// ===== Quick Services Data =====
const quickServices = ref([
  {
    id: 'construction',
    name: 'Building Construction',
    icon: '🏗️'
  },
  {
    id: 'housing',
    name: 'Affordable Housing',
    icon: '🏘️'
  },
  {
    id: 'engineering',
    name: 'SMEP Engineering',
    icon: '⚙️'
  },
  {
    id: 'management',
    name: 'Project Management',
    icon: '📋'
  }
])

// ===== Computed Properties =====
const emailLink = computed(() => {
  const subject = 'Inquiry about CENOVATE services'
  const body = 'Hello CENOVATE team,\n\nI am interested in learning more about your services. Please provide more information about:\n\n- [Your specific requirements]\n\nThank you!'
  return `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})

// ===== Contact Functions =====
function contactWhatsApp(): void {
  const message = "Hello CENOVATE! I'm interested in your services and would like to discuss my project requirements."
  const whatsappUrl = `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

function contactForQuickService(service: { name: string; icon: string }): void {
  const message = `Hello CENOVATE! I'm specifically interested in your ${service.name} services. Can you provide more details and a consultation?`
  const whatsappUrl = `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

function emergencyWhatsApp(): void {
  const message = "🚨 EMERGENCY: I need urgent construction/facility management assistance. Please respond as soon as possible."
  const whatsappUrl = `https://wa.me/${businessPhone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}

function getDirections(): void {
  // Open Google Maps to Kumasi, Ghana
  const address = 'Kumasi, Ashanti Region, Ghana'
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  window.open(mapsUrl, '_blank')
}

// function getPaymentIcon(method: string): string {
//   const icons: Record<string, string> = {
//     'MTN Mobile Money': '📱',
//     'Vodafone Cash': '💳',
//     'AirtelTigo Money': '💰',
//     'Bank Transfer': '🏦',
//     'Cash': '💵'
//   }
//   return icons[method] || '💳'
// }
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
button, a {
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

.hover\:border-primary:hover {
  border-color: #ad2d2b;
}

/* Contact card hover effects */
.contact-card:hover {
  transform: translateY(-2px);
}

.contact-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Responsive adjustments for Ghana mobile users */
@media (max-width: 768px) {
  .contact-card {
    padding: 1.25rem;
  }
}

/* Optimize for slow connections */
@media (prefers-reduced-motion: reduce) {
  .transition-colors,
  .transition-shadow,
  .contact-card {
    transition: none;
  }
}
</style>