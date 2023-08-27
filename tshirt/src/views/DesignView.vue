<template>
  <div>
    <PlacementDimensionInput />
    <LayerDataInput />
    <VisualRepresentation :placementDimensions="placementDimensions" :layerData="layerData" />
  </div>
</template>

<script>
import PlacementDimensionInput from "@/components/PlacementDimensionInput.vue";
import LayerDataInput from "@/components/LayerDataInput.vue";
import VisualRepresentation from "@/components/VisualRepresentation.vue";

export default {
  components: {
    PlacementDimensionInput,
    LayerDataInput,
    VisualRepresentation
  },
  computed: {
    placementDimensions() {
      return this.$store.state.placementDimensions;
    },
    layerData() {
      return this.$store.state.layerData;
    }
  }
};
</script>
