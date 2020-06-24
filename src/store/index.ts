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
    updateField
  },
  modules: {}
})
