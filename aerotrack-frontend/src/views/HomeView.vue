<script setup>
import MapComponent from '../components/MapComponent.vue'
</script>

<template>
  <div class="home">
    <h1>Aerotrack</h1>
    <MapComponent />
  </div>
</template>

<style>
.home {
  padding-bottom: 60px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
