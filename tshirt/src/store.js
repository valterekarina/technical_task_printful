import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    placements: [
      { name: 'Front', width: 300, height: 400 },
      { name: 'Back', width: 300, height: 400 },
      { name: 'Left sleeve', width: 150, height: 200 },
      { name: 'Right sleeve', width: 150, height: 200 }
    ],
    layers: [
      { x: 50, y: 50, width: 100, height: 150, color: 'blue' },
      { x: 150, y: 100, width: 120, height: 180, color: 'red' }
    ]
  },
  mutations: {
    updateLayer(state, { index, layer }) {
      state.layers[index] = layer;
    }
  },
  getters: {
    placements: state => state.placements,
    layers: state => state.layers
  }
});