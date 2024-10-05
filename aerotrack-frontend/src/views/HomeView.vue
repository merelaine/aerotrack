<script setup>
import MapComponent from '../components/MapComponent.vue'
import FilterComponent from '@/components/FilterComponent.vue';
</script>

<template>
  <div class="content">
    <div class="home">
      <div class="filter-homeview">
        <FilterComponent />
      </div>
      <div class="map-homeview" >
        <MapComponent />
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HomeView'
};
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

