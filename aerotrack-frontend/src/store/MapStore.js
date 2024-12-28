import { createStore } from 'vuex'
import { AirportService } from '../service/airport.js'

const state = {
  airports: [],
  selectedAirportType: '',
}

const mutations = {
  setAirports(state, airports) {
    state.airports = airports
  },
  setSelectedAirportType(state, type) {
    state.selectedAirportType = type;
  },
}

const actions = {
  async fetchAirports({ commit }) {
    try {
      const airport_service = new AirportService('http://localhost:3000/airports')
      const response = await airport_service.getAll()
      commit('setAirports', response.data)
    } catch (error) {
      console.error('Ошибка при получении аэропортов:', error)
    }
  }
}

export default createStore({
  state,
  actions,
  mutations
})
