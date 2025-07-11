# **TekLumen Development Guidelines**

Version: 1.0.0
Last Updated: 12 May 2025

This document outlines the development standards for TekLumen projects, with special consideration for Ghana and Nigeria-specific requirements: mobile-first design, offline functionality, simplified user interfaces, and static business website optimization.

## Quick Reference

- **Network Performance Targets**:
  - First Contentful Paint (FCP): < 2s on 3G
  - Time to Interactive (TTI): < 5s on 3G
  - Bundle Size: < 300KB (initial load)
- **Touch Targets**: Minimum 48×48px
- **Offline Support**: Required for all critical features
- **Error Messages**: Must be in simple English, with clear recovery steps
- **WhatsApp Integration**: Required for sharing and business contact features
- **Static Site Optimization**: Pre-rendered content for fast loading on slow networks

## Quick Start

- Clone repository and run `npm install`
- Start development server with `npm run dev`
- Build for production with `npm run build`
- Test your Ghana/Nigeria-specific optimizations with Chrome DevTools network throttling preset "Slow 3G"
- Generate static site with `npm run generate` (if using SSG)

## Static Site Generation Best Practices _(New)_

For business websites serving Ghana and Nigeria markets, static site generation provides optimal performance and reliability:

### 1. **Pre-rendering Strategy**

```typescript
// vite.config.ts - Static generation setup
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue()
    // Add static generation plugin for business sites
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        services: resolve(__dirname, 'services/index.html'),
        contact: resolve(__dirname, 'contact/index.html')
      }
    }
  }
})
```

### 2. **Business Content Optimization**

```vue
<!-- BusinessHero.vue - Optimized for local businesses -->
<template>
  <section class="hero-section bg-white">
    <!-- Critical business info loaded first -->
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
        {{ businessName }}
      </h1>
      <p class="text-lg text-gray-700 mb-6">
        {{ tagline }}
      </p>

      <!-- Primary CTA - WhatsApp contact for immediate response -->
      <div class="flex flex-col sm:flex-row gap-4">
        <a
          :href="whatsappLink"
          class="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          📱 WhatsApp Us Now
        </a>
        <a
          :href="`tel:${phoneNumber}`"
          class="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 hover:text-white transition-colors"
        >
          📞 Call {{ phoneNumber }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // ===== Business Configuration =====
  const businessName = 'Your Business Name'
  const tagline = 'Professional services in Accra, Ghana'
  const phoneNumber = '+233 XX XXX XXXX'
  const whatsappLink = `https://wa.me/233XXXXXXXXX?text=Hello! I'm interested in your services.`
</script>
```

### 3. **Local Business SEO Structure**

```vue
<!-- LocalBusinessSchema.vue - Structured data for local SEO -->
<script setup lang="ts">
  import { useHead } from '@vueuse/head'

  const businessData = {
    name: 'Your Business Name',
    address: {
      streetAddress: 'Street Address',
      addressLocality: 'Accra',
      addressRegion: 'Greater Accra',
      addressCountry: 'Ghana',
      postalCode: 'GA-XXX-XXXX'
    },
    telephone: '+233XXXXXXXXX',
    openingHours: ['Mo-Fr 08:00-17:00', 'Sa 09:00-13:00'],
    priceRange: '$$',
    url: 'https://yourbusiness.com'
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          ...businessData
        })
      }
    ]
  })
</script>
```

## Regional Business Considerations _(New)_

### Ghana-Specific Business Features

```typescript
// ghana-business-utils.ts
export const ghanaBusinessConfig = {
  workingHours: {
    weekdays: '8:00 AM - 5:00 PM',
    saturday: '9:00 AM - 1:00 PM',
    sunday: 'Closed'
  },
  paymentMethods: [
    'MTN Mobile Money',
    'Vodafone Cash',
    'AirtelTigo Money',
    'Bank Transfer',
    'Cash'
  ],
  popularRegions: [
    'Greater Accra',
    'Ashanti',
    'Western',
    'Central',
    'Eastern',
    'Volta',
    'Northern',
    'Upper East',
    'Upper West',
    'Brong Ahafo'
  ],
  languages: ['English', 'Twi', 'Ga', 'Ewe', 'Dagbani'],
  timezone: 'Africa/Accra'
}

export function formatGhanaianCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: 'GHS'
  }).format(amount)
}
```

### Nigeria-Specific Business Features

```typescript
// nigeria-business-utils.ts
export const nigeriaBusinessConfig = {
  workingHours: {
    weekdays: '8:00 AM - 5:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Closed'
  },
  paymentMethods: [
    'Bank Transfer',
    'POS Payment',
    'Mobile Banking',
    'Cash',
    'Cryptocurrency (Bitcoin, others)'
  ],
  majorCities: [
    'Lagos',
    'Abuja',
    'Kano',
    'Ibadan',
    'Port Harcourt',
    'Benin City',
    'Maiduguri',
    'Zaria',
    'Aba',
    'Jos'
  ],
  languages: ['English', 'Hausa', 'Yoruba', 'Igbo'],
  timezone: 'Africa/Lagos'
}

export function formatNigerianCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
  }).format(amount)
}
```

## Business Website Components _(New)_

### 1. **Service Showcase Component**

```vue
<!-- ServicesGrid.vue - Mobile-first service display -->
<template>
  <section class="services-section py-12 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Our Services</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="service in services"
          :key="service.id"
          class="service-card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <!-- Service icon/image -->
          <div class="service-icon mb-4">
            <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span class="text-white text-xl">{{ service.icon }}</span>
            </div>
          </div>

          <h3 class="text-xl font-semibold mb-3 text-gray-900">
            {{ service.name }}
          </h3>

          <p class="text-gray-600 mb-4">
            {{ service.description }}
          </p>

          <div class="flex items-center justify-between">
            <span class="text-primary font-semibold">
              From {{ formatPrice(service.startingPrice) }}
            </span>

            <button
              @click="contactForService(service)"
              class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // ===== Types & Interfaces =====
  interface Service {
    id: string
    name: string
    description: string
    icon: string
    startingPrice: number
  }

  // ===== Service Data =====
  const services = ref<Service[]>([
    {
      id: '1',
      name: 'Web Development',
      description: 'Custom websites built for your business needs',
      icon: '💻',
      startingPrice: 500
    }
    // Add more services...
  ])

  // ===== Helper Functions =====
  function formatPrice(price: number): string {
    // Use regional currency formatting
    return formatGhanaianCurrency(price) // or formatNigerianCurrency(price)
  }

  function contactForService(service: Service): void {
    const message = `Hello! I'm interested in your ${service.name} service. Can you provide more details?`
    const whatsappUrl = `https://wa.me/233XXXXXXXXX?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }
</script>
```

### 2. **Testimonials with Local Context**

```vue
<!-- LocalTestimonials.vue - Testimonials with regional context -->
<template>
  <section class="testimonials-section py-12 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
        What Our Clients Say
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="testimonial-card bg-gray-50 rounded-lg p-6"
        >
          <div class="flex items-center mb-4">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full mr-4 object-cover"
              loading="lazy"
            />
            <div>
              <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-600">{{ testimonial.location }}</p>
            </div>
          </div>

          <blockquote class="text-gray-700 italic mb-4">"{{ testimonial.quote }}"</blockquote>

          <div class="flex items-center">
            <div class="flex text-yellow-400">
              <span v-for="star in 5" :key="star">⭐</span>
            </div>
            <span class="ml-2 text-sm text-gray-600">{{ testimonial.service }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  // ===== Types & Interfaces =====
  interface Testimonial {
    id: string
    name: string
    location: string
    quote: string
    service: string
    avatar: string
  }

  // ===== Local Testimonials Data =====
  const testimonials = ref<Testimonial[]>([
    {
      id: '1',
      name: 'Kwame Asante',
      location: 'Accra, Ghana',
      quote: 'Excellent service! They delivered exactly what we needed for our business.',
      service: 'Web Development',
      avatar: '/images/testimonial-1.jpg'
    },
    {
      id: '2',
      name: 'Adunni Okafor',
      location: 'Lagos, Nigeria',
      quote: 'Professional team that understands local business needs perfectly.',
      service: 'Digital Marketing',
      avatar: '/images/testimonial-2.jpg'
    }
    // Add more testimonials...
  ])
</script>
```

## Multi-Country Support System _(New)_

### 1. **Country Detection and Routing**

```typescript
// country-detection.ts
export type SupportedCountry = 'ghana' | 'nigeria'

export interface CountryConfig {
  code: SupportedCountry
  name: string
  currency: string
  timezone: string
  phoneFormat: string
  businessHours: string
  paymentMethods: string[]
}

export const countryConfigs: Record<SupportedCountry, CountryConfig> = {
  ghana: {
    code: 'ghana',
    name: 'Ghana',
    currency: 'GHS',
    timezone: 'Africa/Accra',
    phoneFormat: '+233 XX XXX XXXX',
    businessHours: '8:00 AM - 5:00 PM (Mon-Fri)',
    paymentMethods: ['MTN Mobile Money', 'Vodafone Cash', 'Bank Transfer']
  },
  nigeria: {
    code: 'nigeria',
    name: 'Nigeria',
    currency: 'NGN',
    timezone: 'Africa/Lagos',
    phoneFormat: '+234 XXX XXX XXXX',
    businessHours: '8:00 AM - 5:00 PM (Mon-Fri)',
    paymentMethods: ['Bank Transfer', 'POS', 'Mobile Banking']
  }
}

export function detectCountryFromUrl(): SupportedCountry {
  const hostname = window.location.hostname
  if (hostname.includes('.ng') || hostname.includes('nigeria')) {
    return 'nigeria'
  }
  return 'ghana' // Default to Ghana
}

export function getCountryConfig(country?: SupportedCountry): CountryConfig {
  const detectedCountry = country || detectCountryFromUrl()
  return countryConfigs[detectedCountry]
}
```

### 2. **Country-Aware Components**

```vue
<!-- CountryAwareContact.vue - Adapts to local context -->
<template>
  <section class="contact-section py-12 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">
        Contact Us in {{ countryConfig.name }}
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Contact Information -->
        <div class="contact-info">
          <h3 class="text-xl font-semibold mb-4">Get in Touch</h3>

          <div class="space-y-4">
            <div class="flex items-center">
              <span class="text-2xl mr-3">📱</span>
              <div>
                <p class="font-medium">WhatsApp</p>
                <a :href="whatsappLink" class="text-green-600 hover:text-green-700" target="_blank">
                  {{ countryConfig.phoneFormat }}
                </a>
              </div>
            </div>

            <div class="flex items-center">
              <span class="text-2xl mr-3">🕒</span>
              <div>
                <p class="font-medium">Business Hours</p>
                <p class="text-gray-600">{{ countryConfig.businessHours }}</p>
              </div>
            </div>

            <div class="flex items-center">
              <span class="text-2xl mr-3">💳</span>
              <div>
                <p class="font-medium">Payment Methods</p>
                <p class="text-gray-600">{{ paymentMethodsText }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label class="block text-sm font-medium mb-1">Phone</label>
              <input
                v-model="form.phone"
                type="tel"
                :placeholder="countryConfig.phoneFormat"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label class="block text-sm font-medium mb-1">Message</label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { getCountryConfig } from '@/utils/country-detection'

  // ===== Country Configuration =====
  const countryConfig = getCountryConfig()

  // ===== Computed Properties =====
  const paymentMethodsText = computed(() => countryConfig.paymentMethods.join(', '))

  const whatsappLink = computed(
    () =>
      `https://wa.me/${countryConfig.phoneFormat
        .replace(/\s+/g, '')
        .replace('+', '')}?text=Hello! I'd like to know more about your services.`
  )

  // ===== Form Handling =====
  const form = reactive({
    name: '',
    phone: '',
    message: ''
  })

  async function handleSubmit() {
    try {
      // Handle form submission with country context
      await submitContactForm({
        ...form,
        country: countryConfig.code
      })

      // Show success message
      alert('Message sent successfully! We will contact you soon.')

      // Reset form
      Object.assign(form, { name: '', phone: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Sorry, there was an error. Please try again or contact us via WhatsApp.')
    }
  }
</script>
```

## Deployment Optimization _(New)_

### 1. **Static Site Deployment Configuration**

```yaml
# .github/workflows/deploy.yml
name: Deploy to Multiple Regions

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build for Ghana
        run: |
          echo "VITE_COUNTRY=ghana" > .env.production
          npm run build
          mv dist dist-ghana

      - name: Build for Nigeria
        run: |
          echo "VITE_COUNTRY=nigeria" > .env.production
          npm run build
          mv dist dist-nigeria

      - name: Deploy to Ghana hosting
        run: |
          # Deploy dist-ghana to Ghana-specific hosting/CDN

      - name: Deploy to Nigeria hosting
        run: |
          # Deploy dist-nigeria to Nigeria-specific hosting/CDN
```

### 2. **Performance Monitoring for Multiple Regions**

```typescript
// performance-monitoring.ts
export interface RegionalPerformanceConfig {
  country: SupportedCountry
  cdnEndpoint: string
  analyticsId: string
  performanceThresholds: {
    fcp: number // First Contentful Paint
    lcp: number // Largest Contentful Paint
    fid: number // First Input Delay
  }
}

export const regionalConfigs: Record<SupportedCountry, RegionalPerformanceConfig> = {
  ghana: {
    country: 'ghana',
    cdnEndpoint: 'https://cdn-ghana.yourdomain.com',
    analyticsId: 'GA-GHANA-ID',
    performanceThresholds: {
      fcp: 2000, // 2s for Ghana's network conditions
      lcp: 3000, // 3s
      fid: 200 // 200ms
    }
  },
  nigeria: {
    country: 'nigeria',
    cdnEndpoint: 'https://cdn-nigeria.yourdomain.com',
    analyticsId: 'GA-NIGERIA-ID',
    performanceThresholds: {
      fcp: 1800, // Slightly better infrastructure
      lcp: 2800,
      fid: 180
    }
  }
}
```
