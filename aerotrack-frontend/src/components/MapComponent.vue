<template>
  <div id="map" style="height: 80vh;"></div>
</template>

<script setup>
import { useMap } from '@/composables/useMap';

useMap("map");
</script>