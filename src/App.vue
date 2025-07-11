<!--
  App.vue
  - Root component for TekLumen frontend
  - Uses reusable AppSuspense component for loading states
  - Renders the active layout and page via <router-view />
  - Displays PWA update notifications
  - Follows TekLumen guidelines for Ghana: mobile-first, clear feedback, offline-aware
-->



<template>
  <!-- ===== [Updated Feature] START ===== -->
  <!--
    Use reusable AppSuspense component for loading states.
    This keeps the loading logic organized and reusable throughout the app.
  -->
  <AppSuspense 
    loading-message="Loading site content..."
    :show-progress="true"
    :show-branding="true"
  >
    <router-view />
  </AppSuspense>
  <!-- ===== [Updated Feature] END ===== -->

  <!-- PWA update notification (always visible) -->
  <PWAUpdateNotification />
</template>

<script setup lang="ts">
// ===== Imports =====
import AppSuspense from '@/components/system/AppSuspense.vue'
import PWAUpdateNotification from '@/components/pwa tools/PWAUpdateNotification.vue'
</script>