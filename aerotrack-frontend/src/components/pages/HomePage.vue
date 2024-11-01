<template>
  <PageTemplate>
    <div class="home">
      <div class="filter-homeview">
        <FilterComponent />
      </div>
      <div class="map-homeview">
        <MapComponent />
      </div>
    </div>
  </PageTemplate>
</template>

<script setup>
import MapComponent from '../organisms/MapComponent.vue'
import FilterComponent from '../FilterComponent.vue'
import PageTemplate from '../templates/PageTemplate.vue'
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 10px;
}

.filter-homeview {
  float: left;
  margin-right: 5px;
}
</style>
