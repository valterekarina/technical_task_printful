<template>
  <div>
    <h3>{{ placement.name }} Placement</h3>
    <canvas
      ref="canvas"
      :width="placement.width"
      :height="placement.height"
      style="border: 1px solid black;"
    ></canvas>
  </div>
</template>

<script>
export default {
  props: ['placement', 'layers'],
  mounted() {
    this.drawCanvas();
  },
  watch: {
    layers: {
      handler() {
        this.drawCanvas();
      },
      deep: true
    }
  },
  methods: {
    drawCanvas() {
      const canvas = this.$refs.canvas;
      const context = canvas.getContext('2d');

      context.clearRect(0, 0, canvas.width, canvas.height);

      this.layers.forEach(layer => {
        context.fillStyle = layer.color;
        context.fillRect(layer.x, layer.y, layer.width, layer.height);
      });
    }
  }
};
</script>