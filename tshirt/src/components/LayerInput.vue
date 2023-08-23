<template>
  <div>
    <h3>Layer Data</h3>
    <label>X: <input v-model="layer.x" /></label>
    <label>Y: <input v-model="layer.y" /></label>
    <label>Width: <input v-model="layer.width" /></label>
    <label>Height: <input v-model="layer.height" /></label>
    <label>Color: <input v-model="layer.color" /></label>
  </div>
</template>

<script>
export default {
  props: ['layer'],
  watch: {
    layer: {
      handler(layer) {
        this.$store.commit('updateLayer', {
          index: this.layerIndex,
          layer: { ...layer }
        });
      },
      deep: true
    }
  },
  computed: {
    layerIndex() {
      return this.$props.layerIndex;
    }
  }
};
</script>