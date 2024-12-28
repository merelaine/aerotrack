import L from 'leaflet';
import { useStore } from 'vuex';

export function useMarkers(map) {
  const store = useStore();
  const markersMap = new Map(); 
  const zoomThreshold = 6; 
  let previousZoom = map.getZoom();

  const createMarker = (lat, lon, name, type) => {
    const latLng = L.latLng(lat, lon);

    let markerOptions;
    if (type === 'large_airport') {
      markerOptions = {
        radius: 10, 
        color: 'blue', 
        fillColor: 'blue',
        fillOpacity: 1,
      };
    } else {
      markerOptions = {
        radius: 5,
        color: 'green', 
        fillColor: 'green', 
        fillOpacity: 1, 
      };
    }

    const marker = L.circleMarker(latLng, markerOptions).addTo(map);
    marker.bindPopup(`<strong>${name}</strong><br>Latitude: ${lat}<br>Longitude: ${lon}`);
    return marker;
  };

  const addMarkers = () => {
    const airports = store.state.airports;
    const selectedType = store.state.selectedAirportType; 
  
    if (map.getZoom() < zoomThreshold) {
      markersMap.forEach((marker) => map.removeLayer(marker));
      markersMap.clear();
      return;
    }
  
    // if (previousZoom === map.getZoom()) {
    //   return;
    // }
  
    markersMap.forEach((marker) => map.removeLayer(marker));
    markersMap.clear();
  
    airports.forEach(airport => {
      if (!selectedType || airport.type === selectedType) { 
        const { lat, lon, name, type } = airport;
        const marker = createMarker(lat, lon, name, type);
        markersMap.set(`${lat},${lon}`, marker);
      }
    });
  
    previousZoom = map.getZoom();
  };
  

  const checkMarkersOnMove = () => {
    if (map.getZoom() < zoomThreshold) {
      return; 
    }

    const airports = store.state.airports;
    const bounds = map.getBounds(); 

    airports.forEach(airport => {
      const { lat, lon, name, type } = airport; 
      const latLng = L.latLng(lat, lon);
      const key = `${lat},${lon}`;

      if (bounds.contains(latLng) && !markersMap.has(key)) {
        const marker = createMarker(lat, lon, name, type);
        markersMap.set(key, marker); 
      }
    });
  };

  map.on('zoomend', addMarkers);
  map.on('moveend', checkMarkersOnMove); 

  return { addMarkers }; 
}