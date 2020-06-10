import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
import commons from './../scripts/store/commons'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...commons
  },
  getters: {
    getField
  },
  mutations: {
    updateField,
    setError (state, payload) {
      state.errorTitle = payload.errorType
      state.errorMessage = payload.errorMessage
      state.errorDialog = true
    },
    setSuccess (state, payload) {
      state.successTitle = payload.successType
      state.successMessage = payload.successMessage
      state.successDialog = true
    },
    login (state, payload) {
      state.login = payload
    }
  },
  actions: {
    login ({ commit }, payload) {
      commit('login', payload)
    }
  },
  modules: {}
})
