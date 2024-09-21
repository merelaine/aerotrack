<script setup>
import MapComponent from '../components/MapComponent.vue'
import FilterComponent from '@/components/FilterComponent.vue';
</script>

<template>
  <div class="home" >
    <h1>Aerotrack</h1>
    <FilterComponent />
    <MapComponent />
  </div>
</template>

<style>
.home {
  padding-bottom: 60px;
}
</style>
