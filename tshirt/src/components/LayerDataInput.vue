<template>
    <div>
      <h2>Layer Data Input</h2>
      <label>Position X: <input v-model="positionX" type="number"></label>
      <label>Position Y: <input v-model="positionY" type="number"></label>
      <label>Width: <input v-model="width" type="number"></label>
      <label>Height: <input v-model="height" type="number"></label>
      <label>Color: <input v-model="color" type="color"></label>
      <button @click="calculateAndApplyPositionForOtherPlacements">Apply to Other Placements</button>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {
      positionX: 50,
      positionY: 50,
      width: 30,
      height: 40,
      color: "#FF0000"
    };
  },
  methods: {
    calculateAndApplyPositionForOtherPlacements() {
      // Placeholder calculations for position recalculation logic
      const newPositionX = this.positionX + 10;
      const newPositionY = this.positionY + 10;
      const newWidth = this.width;
      const newHeight = this.height;
      const newColor = this.color;

      // Update Vuex store with recalculated layer data
      this.$store.commit('updateLayerData', {
        positionX: newPositionX,
        positionY: newPositionY,
        width: newWidth,
        height: newHeight,
        color: newColor
      });
    }
  }
};
</script>