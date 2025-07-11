<!--
  AppSuspense.vue
  - Reusable Suspense wrapper with TekLumen-branded loading state
  - Shows modern loading experience while route components are loading
  - Mobile-first design optimized for Ghana's network conditions
  - Can be used anywhere in the app that needs async component loading
-->

<script setup lang="ts">
// ===== Imports =====
import { ref, onMounted } from 'vue'

// ===== Props & Configuration =====
interface Props {
    loadingMessage?: string
    showProgress?: boolean
    showBranding?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    loadingMessage: 'Loading, please wait...',
    showProgress: true,
    showBranding: true
})

// ===== Loading State Management =====
const loadingProgress = ref(0)

onMounted(() => {
    if (props.showProgress) {
        // Simulate loading progress for better UX on slow connections
        const interval = setInterval(() => {
            loadingProgress.value += Math.random() * 25
            if (loadingProgress.value >= 95) {
                clearInterval(interval)
                loadingProgress.value = 100
            }
        }, 300)
    }
})
</script>

<template>
    <!-- ===== Reusable Suspense Component ===== -->
    <Suspense>
        <!-- Default slot: where the async content goes -->
        <template #default>
            <slot />
        </template>

        <!-- Fallback slot: modern loading experience -->
        <template #fallback>
            <div
                class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4">

                <!-- Loading container with subtle animation -->
                <div class="max-w-sm w-full text-center">

                    <!-- App branding section (conditional) -->
                    <div v-if="showBranding" class="mb-8">
                        <div
                            class="w-16 h-16 mx-auto mb-4 bg-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <div class="w-8 h-8 bg-white rounded-lg"></div>
                        </div>
                        <!-- <h1 class="text-xl font-bold text-gray-800 mb-2">TekLumen</h1> -->
                        <p class="text-sm text-gray-600">Loading your experience...</p>
                    </div>

                    <!-- Loading spinner -->
                    <div class="mb-6">
                        <LoadingSpinner label="" size="lg" />
                    </div>

                    <!-- Progress bar (conditional) -->
                    <div v-if="showProgress" class="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
                        <div class="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-300 ease-out"
                            :style="{ width: `${loadingProgress}%` }"></div>
                    </div>

                    <!-- Loading message -->
                    <p class="text-base text-gray-700 font-medium leading-relaxed" aria-live="polite" role="status">
                        {{ loadingMessage }}
                    </p>

                    <!-- Connection quality indicator for Ghana users -->
                    <div class="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                        <div class="flex gap-1">
                            <div class="w-1 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <div class="w-1 h-2 bg-green-300 rounded-full animate-pulse delay-75"></div>
                            <div class="w-1 h-4 bg-green-500 rounded-full animate-pulse delay-150"></div>
                        </div>
                        <span>Optimizing for your connection</span>
                    </div>
                </div>

                <!-- Subtle background pattern -->
                <div class="absolute inset-0 opacity-5 pointer-events-none">
                    <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-600 rounded-full blur-3xl"></div>
                    <div class="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary-400 rounded-full blur-2xl"></div>
                </div>
            </div>
        </template>
    </Suspense>
</template>

<style scoped>
/* ===== Loading Animations ===== */
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.7;
    }
}

/* Mobile-first responsive adjustments */
@media (max-width: 640px) {
    .max-w-sm {
        max-width: 100%;
        padding: 0 1rem;
    }
}
</style>