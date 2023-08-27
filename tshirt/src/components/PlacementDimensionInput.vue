<template>
    <div>
      <h2>Placement Dimension Input</h2>
      <div v-for="(placement, index) in placements" :key="index">
        <h3>{{ placement }}</h3>
        <label>Width: <input v-model="dimensions[placement].width" type="number"></label>
        <label>Height: <input v-model="dimensions[placement].height" type="number"></label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        placements: ["Front", "Back", "Left sleeve", "Right sleeve"],
        dimensions: {
          Front: { width: 100, height: 150 },
          Back: { width: 100, height: 150 },
          "Left sleeve": { width: 50, height: 100 },
          "Right sleeve": { width: 50, height: 100 }
        }
      };
    }
  };
  </script>
  