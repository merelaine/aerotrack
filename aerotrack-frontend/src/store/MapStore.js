import { createStore } from 'vuex'
import axios from 'axios'

const state = {
  airports: []
}

const mutations = {
  setAirports(state, airports) {
    state.airports = airports
  }
}

const actions = {
  async fetchAirports({ commit }) {
    try {
      const response = await axios.get('/airports')
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
