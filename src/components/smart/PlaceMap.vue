<script setup lang="ts">
import type { PlaceSpot } from '@/domain/usePlaces'
import Marker from '@/components/ui/Marker.vue'
import { ref } from 'vue'

const props = defineProps<{ src: string; spots: PlaceSpot[] }>()
const computedStyleMap = { 'background-image': `url(${props.src})` }
const selectedSpot = ref<PlaceSpot | null>(null)
</script>

<template>
  <div class="map" :style="computedStyleMap">
    <Marker
      :key="i"
      v-for="(spot, i) of props.spots"
      :value="i + 1"
      :x="spot.x"
      :y="spot.y"
      @click="selectedSpot = spot"
    />
  </div>

  <div v-show="selectedSpot">
    <p class="spotDescriptionTitle">Description du spot :</p>
    <p>{{ selectedSpot?.description }}</p>
  </div>
</template>

<style scoped>
.map {
  width: auto;
  height: 50vh;
  background-size: cover;
  background-position: center;
}

.spotDescriptionTitle {
  font-size: 120%;
  font-style: italic;
  margin-top: 20px;
}
</style>
