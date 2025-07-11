<!--
  TekLumenLogo.vue
  - TekLumen branded logo component with "T" shape
  - Mobile-first design optimized for Ghana's network conditions
  - Clean, minimal design with solid border
  - Supports white/dark color variants for different backgrounds
-->

<template>
  <div class="teklumen-logo">
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      class="w-10 h-10"
      :class="{ 'text-gray-800': !white, 'text-white': white }"
    >
      <!-- Solid circular border -->
      <circle 
        cx="24" 
        cy="24" 
        r="22" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="4"
      />
      
      <!-- "T" shape for TekLumen -->
      <g stroke="currentColor" stroke-width="6" stroke-linecap="round">
        <!-- Horizontal top bar of the "T" -->
        <line x1="16" y1="16" x2="32" y2="16" />
        
        <!-- Vertical stem of the "T" -->
        <line x1="24" y1="16" x2="24" y2="32" />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
// ===== Props & Configuration =====
/**
 * Props for TekLumenLogo
 * @param white - boolean (optional): Use white color for dark backgrounds
 */
defineProps<{
  white?: boolean
}>()
</script>

<style scoped>
/* ===== Logo Container Styling ===== */
.teklumen-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Mobile-first responsive adjustments */
@media (max-width: 640px) {
  .teklumen-logo svg {
    width: 2rem;  /* 32px on mobile */
    height: 2rem; /* 32px on mobile */
  }
}
</style>