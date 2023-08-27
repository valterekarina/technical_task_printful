import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    placementDimensions: {
      Front: { width: 100, height: 150 },
      Back: { width: 100, height: 150 },
      "Left sleeve": { width: 50, height: 100 },
      "Right sleeve": { width: 50, height: 100 }
    },
    layerData: {
      positionX: 50,
      positionY: 50,
      width: 30,
      height: 40,
      color: "#FF0000"
    }
  },
  mutations: {
    updateLayerData(state, newLayerData) {
      state.layerData = newLayerData;
    }
  },
  actions: {
    // Optional actions if needed
  },
  getters: {
    // Optional getters if needed
  }
});
