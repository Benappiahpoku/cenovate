<template>
  <main class="min-h-screen bg-gray-50">
   

    <div class="max-w-6xl mx-auto p-4 py-12">
      <!-- ===== [PAGE TITLE] START ===== -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About CENOVATE</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Building Ghana's future through integrated construction, engineering, and property solutions
        </p>
      </div>
      <!-- ===== [PAGE TITLE] END ===== -->

      <!-- ===== [CEO WELCOME SECTION] START ===== -->
      <section class="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <!-- CEO Image -->
          <div class="flex justify-center lg:justify-start">
            <div class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
              <img 
                v-if="!imageError" 
                src="/danieladjei.webp" 
                alt="Daniel Adjei, CEO of CENOVATE"
                class="w-full h-full object-cover" 
                loading="lazy" 
                @error="imageError = true" 
              />
              <!-- Fallback for slow connections -->
              <div v-else class="w-full h-full bg-primary flex items-center justify-center text-white">
                <span class="text-6xl">👤</span>
              </div>
            </div>
          </div>

          <!-- CEO Message -->
          <div class="text-center lg:text-left">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              🎙️ Welcome from our CEO
            </h2>
            
            <blockquote class="text-lg text-gray-700 mb-6 italic">
              "At CENOVATE, we believe infrastructure is more than concrete and steel. It's about building communities, 
              creating opportunities, and laying the foundation for Ghana's prosperous future. Our integrated approach 
              ensures every project contributes to sustainable development and local empowerment."
            </blockquote>
            
            <div class="text-lg font-semibold text-primary">
              — Daniel Adjei, CEO & Founder
            </div>
            
            <!-- WhatsApp CEO Contact -->
            <button 
              @click="contactCEO"
              class="mt-4 inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors min-h-[48px]"
            >
              � Message CEO on WhatsApp
            </button>
          </div>
        </div>
      </section>
      <!-- ===== [CEO WELCOME SECTION] END ===== -->

      <!-- ===== [VISION & MISSION] START ===== -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Vision -->
        <section class="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            🎯 Our Vision
          </h2>
          <p class="text-gray-700 leading-relaxed">
            To become the leading and most trusted integrated service provider in Ghana's built environment sector, 
            recognized for pioneering new construction methods and materials, setting benchmarks in project delivery, 
            and fostering sustainable community development.
          </p>
        </section>

        <!-- Mission -->
        <section class="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            🛠️ Our Mission
          </h2>
          <p class="text-gray-700 leading-relaxed">
            To deliver innovative, high-quality, and sustainable solutions across construction, engineering, 
            facility management, and property development, exceeding client expectations through excellence and integrity.
          </p>
        </section>
      </div>
      <!-- ===== [VISION & MISSION] END ===== -->

      <!-- ===== [CORE VALUES] START ===== -->
      <section class="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          💡 Our Core Values
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="value in coreValues" 
            :key="value.name"
            class="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div class="text-3xl mb-3">{{ value.icon }}</div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ value.name }}</h3>
            <p class="text-sm text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </section>
      <!-- ===== [CORE VALUES] END ===== -->

      <!-- ===== [COMPANY OVERVIEW] START ===== -->
      <section class="bg-primary text-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
        <h2 class="text-2xl md:text-3xl font-bold text-center mb-6">
          🏢 About CENOVATE Limited Company
        </h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">Company Overview</h3>
            <p class="text-gray-100 leading-relaxed mb-4">
              CENOVATE LIMITED COMPANY is a new Ghanaian enterprise established to provide comprehensive 
              and integrated services for Ghana's built environment. With strategic focus on Kumasi and 
              the Ashanti Region, we're committed to addressing infrastructure, housing, and sustainable 
              development needs.
            </p>
            <p class="text-gray-100 leading-relaxed">
              We contribute to socio-economic growth through high-quality project delivery, job creation, 
              and promotion of sustainable practices.
            </p>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold mb-4">Strategic Objectives</h3>
            <div class="space-y-3">
              <div class="flex items-start">
                <span class="text-lg mr-2">🎯</span>
                <p class="text-gray-100">Achieve full regulatory licensing for all service lines</p>
              </div>
              <div class="flex items-start">
                <span class="text-lg mr-2">🏘️</span>
                <p class="text-gray-100">Launch affordable housing program in Ashanti Region</p>
              </div>
              <div class="flex items-start">
                <span class="text-lg mr-2">🔬</span>
                <p class="text-gray-100">Develop sustainable local building materials</p>
              </div>
              <div class="flex items-start">
                <span class="text-lg mr-2">📈</span>
                <p class="text-gray-100">Expand to six additional regions across Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ===== [COMPANY OVERVIEW] END ===== -->

      <!-- ===== [FLAGSHIP PROJECT] START ===== -->
      <section class="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
          🏘️ Flagship Initiative: Affordable Housing Program
        </h2>
        
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div class="p-4">
              <div class="text-3xl mb-3">🎯</div>
              <h3 class="font-semibold mb-2">Target Communities</h3>
              <p class="text-gray-600">Peri-urban and rural communities, starting in Ashanti Region</p>
            </div>
            
            <div class="p-4">
              <div class="text-3xl mb-3">🔬</div>
              <h3 class="font-semibold mb-2">Innovation Approach</h3>
              <p class="text-gray-600">R&D in locally sourced materials and sustainable construction methods</p>
            </div>
            
            <div class="p-4">
              <div class="text-3xl mb-3">🏠</div>
              <h3 class="font-semibold mb-2">Housing Solutions</h3>
              <p class="text-gray-600">Scalable starter homes and expandable units for accessibility</p>
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <router-link 
              to="/contact" 
              class="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors min-h-[48px]"
            >
              Learn More About Our Housing Program
            </router-link>
          </div>
        </div>
      </section>
      <!-- ===== [FLAGSHIP PROJECT] END ===== -->
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// ===== SIMPLE STATE =====
const imageError = ref<boolean>(false)

// ===== CORE VALUES DATA =====
const coreValues = ref([
  {
    name: 'Integrity',
    icon: '🤝',
    description: 'Honest and transparent in all our business dealings'
  },
  {
    name: 'Quality',
    icon: '⭐',
    description: 'Delivering excellence in every project and service'
  },
  {
    name: 'Innovation',
    icon: '💡',
    description: 'Pioneering new methods and sustainable solutions'
  },
  {
    name: 'Client Focus',
    icon: '👥',
    description: 'Putting our clients\' needs at the center of everything'
  },
  {
    name: 'Safety',
    icon: '🛡️',
    description: 'Ensuring safe work environments and practices'
  },
  {
    name: 'Sustainability',
    icon: '🌱',
    description: 'Building for today while protecting tomorrow'
  }
])

// ===== CONTACT FUNCTIONS =====
function contactCEO(): void {
  const message = "Hello Daniel, I'd like to discuss CENOVATE's services and potential collaboration opportunities."
  const phoneNumber = "+233244274682" // CEO's actual number from PRD
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
</script>

<style scoped>
/* ===== GHANA-OPTIMIZED STYLES ===== */
.transition-colors {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Ensure minimum touch targets for mobile users */
button, a {
  min-height: 48px;
  min-width: 48px;
}

/* Primary color definition */
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
</style>