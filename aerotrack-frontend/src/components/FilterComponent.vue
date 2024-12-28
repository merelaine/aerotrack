<template>
  <div>
    <label for="airport-type">Выберите тип аэропорта: </label>
    <select id="airport-type" v-model="selectedType" @change="updateType">
      <option value="">Все</option>
      <option v-for="type in airportTypes" :key="type" :value="type">{{ type }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const selectedType = ref('');

const airportTypes = computed(() => {
  const airports = store.state.airports;
  const types = new Set(airports.map(airport => airport.type)); 
  return Array.from(types);
});

const updateType = () => {
  store.commit('setSelectedAirportType', selectedType.value);
  console.log(store.state.selectedAirportType)
};
</script>
