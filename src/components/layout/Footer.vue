<template>
  <footer class="footer bg-gray-900 text-white">
  

    <!-- Bottom Footer -->
    <div class="border-t border-gray-800">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-center md:text-left">
            <p class="text-gray-400">
              © {{ currentYear }} Cenovate Company. All rights reserved.
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <p class="text-gray-400 text-sm">
              🇬🇭 Proudly Ghanaian | Serving {{ countryConfig.name }}
            </p>
            <div class="flex items-center space-x-4">
              <span class="text-gray-400 text-sm">Business Hours:</span>
              <span class="text-gray-300 text-sm">{{ countryConfig.businessHours }}</span>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getCountryConfig } from '@/services/CountryDetection'

// ===== Country Configuration =====
const countryConfig = getCountryConfig()




// ===== Computed Properties =====
const currentYear = computed(() => new Date().getFullYear())


</script>

<style scoped>
.footer-link {
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ad2d2b;
}

.social-link {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 1.2rem;
}

.social-link:hover {
  transform: translateY(-2px);
}

.footer-section h3 {
  color: #ad2d2b;
}
</style>