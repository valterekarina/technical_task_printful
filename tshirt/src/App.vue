<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<template>
  <div>
    <h1>T-Shirt Design App</h1>
    <placement-input
      v-for="(placement, index) in placements"
      :key="placement.name"
      :placement="placement"
    />
    <layer-input
      v-for="(layer, index) in layers"
      :key="index"
      :layer="layer"
      :layer-index="index"
    />
    <placement-canvas
      v-for="(placement, index) in placements"
      :key="placement.name"
      :placement="placement"
      :layers="layers"
    />
  </div>
</template>

<script>
import PlacementInput from './components/PlacementInput.vue';
import LayerInput from './components/LayerInput.vue';
import PlacementCanvas from './components/PlacementCanvas.vue';

export default {
  components: {
    PlacementInput,
    LayerInput,
    PlacementCanvas
  },
  computed: {
    placements() {
      return this.$store.getters.placements;
    },
    layers() {
      return this.$store.getters.layers;
    }
  }
};
</script>
