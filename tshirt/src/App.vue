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