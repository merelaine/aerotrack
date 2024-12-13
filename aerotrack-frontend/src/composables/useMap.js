import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import { useMarkers } from '@/composables/useMarkers';

export function useMap(id) {
  const store = useStore();

  onMounted(() => {
    const map = L.map(id).setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    const { addMarkers } = useMarkers(map);

    store.dispatch('fetchAirports').then(() => {
      addMarkers(); 
    });
  });
}
