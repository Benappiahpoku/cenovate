<!--
  App.vue
  - Root component for TekLumen frontend
  - Uses reusable AppSuspense component for loading states
  - Renders the active layout and page via <router-view />
  - Displays PWA update notifications
  - Follows TekLumen guidelines for Ghana: mobile-first, clear feedback, offline-aware
-->



<template>

 

    <router-view />


  <!-- PWA update notification (always visible) -->
  <PWAUpdateNotification />
</template>

<script setup lang="ts">
// ===== Imports =====

import PWAUpdateNotification from '@/components/pwa tools/PWAUpdateNotification.vue'
</script>