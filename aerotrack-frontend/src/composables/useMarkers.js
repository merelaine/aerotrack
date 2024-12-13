import { ref } from 'vue';
import L from 'leaflet';
import { useStore } from 'vuex';

export function useMarkers(map) {
  const store = useStore();
  const markers = ref([]);
  const zoomThreshold = 6; 

  const addMarkers = () => {
    const airports = store.state.airports;

    markers.value.forEach(marker => map.removeLayer(marker));
    markers.value = [];

    if (map.getZoom() >= zoomThreshold) {
      airports.forEach(airport => {
        const { lat, lon, name } = airport; 
        const latLng = L.latLng(lat, lon);
        const marker = L.marker(latLng).addTo(map);

        marker.on('click', () => {
          const popupContent = `<strong>${name}</strong><br>Latitude: ${lat}<br>Longitude: ${lon}`;
          marker.bindPopup(popupContent).openPopup();
        });

        markers.value.push(marker);
      });
    }
  };

  map.on('zoomend', addMarkers);

  return { addMarkers }; 
}
