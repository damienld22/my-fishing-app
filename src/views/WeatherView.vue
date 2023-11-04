<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { reactive } from 'vue'
const { height, width } = useWindowSize()

const iframeSize = reactive({
  width: width.value * 0.9,
  height: height.value * 0.75
})
</script>

<template>
  <h1>Météo</h1>

  <iframe
    src="https://www.lameteoagricole.net/"
    :width="iframeSize.width"
    :height="iframeSize.height"
  ></iframe>
</template>

<style></style>
