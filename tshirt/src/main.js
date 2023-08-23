// import { createApp } from 'vue'
// import App from './App.vue'
// import Vuex from 'vuex'

// Vuex.use(Vuex)

// createApp(App).mount('#app')

import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
