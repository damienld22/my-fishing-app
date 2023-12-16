<script setup lang="ts">
const props = defineProps<{ value: number | string; x: number; y: number }>()
const computedStyle = { left: `${props.x}%`, top: `${props.y}%` }
</script>

<template>
  <div class="marker" :style="computedStyle">{{ props.value }}</div>
</template>

<style scoped>
.marker {
  border: 1px solid;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 12px;
  background-color: red;
  color: white;
  font-weight: bold;
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>
