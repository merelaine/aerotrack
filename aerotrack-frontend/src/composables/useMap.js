import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useStore } from 'vuex'
import { onMounted, watch, computed } from 'vue'
import { useMarkers } from './useMarkers'


export function useMap(id) {
  const store = useStore();

  const selectedType = computed(() => store.state.selectedAirportType);

  onMounted(() => {
    const map = L.map(id).setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(map);

    const { addMarkers } = useMarkers(map);

    store.dispatch('fetchAirports').then(() => {
      addMarkers();
    });

    watch(selectedType, (newType, oldType) => {
      console.log(`Airport type changed from ${oldType} to ${newType}`);
      addMarkers(); 
    });
  });
}
