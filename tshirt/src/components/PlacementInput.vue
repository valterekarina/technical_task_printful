<template>
  <div>
    <h3>{{ placement.name }} Placement</h3>
    <label>Width: <input v-model="placement.width" /></label>
    <label>Height: <input v-model="placement.height" /></label>
  </div>
</template>

<script>
export default {
  props: ['placement']
};
</script>