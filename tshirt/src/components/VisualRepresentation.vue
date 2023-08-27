<template>
    <div>
      <h2>Visual Representation</h2>
      <canvas ref="frontCanvas" :width="placementDimensions.Front.width" :height="placementDimensions.Front.height"></canvas>
      <!-- Add other canvas elements for different placements -->
    </div>
  </template>
  
  <script>
  export default {
    props: ['placementDimensions', 'layerData'],
    mounted() {
      this.drawDesign('Front');
    },
    watch: {
      layerData: {
        deep: true,
        handler(newLayerData) {
          this.drawDesign('Front');
        }
      }
    },
    methods: {
      drawDesign(placement) {
        const canvas = this.$refs[`${placement.toLowerCase()}Canvas`];
        const ctx = canvas.getContext('2d');
  
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = this.layerData.color;
        ctx.fillRect(this.layerData.positionX, this.layerData.positionY, this.layerData.width, this.layerData.height);
      }
    }
  };
  </script>
  