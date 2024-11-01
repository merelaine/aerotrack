import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { onMounted } from 'vue'

export function useMap(id) {
  onMounted(() => {
    const map = L.map(id).setView([0, 0], 2)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(map)
  })
}
