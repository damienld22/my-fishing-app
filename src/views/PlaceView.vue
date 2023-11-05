<script setup lang="ts">
import { useRoute } from 'vue-router'
import usePlaces from '@/domain/usePlaces'
import useMapPlace from '@/domain/useMapPlace'
import PlaceMap from '@/components/smart/PlaceMap.vue'

const route = useRoute()
const { getPlaceById } = usePlaces()
const { getPlaceMapFromName } = useMapPlace()

const place = getPlaceById(+route.params.id)
const map = getPlaceMapFromName(place?.map!)
</script>

<template>
  <p class="title">{{ place?.name }}</p>
  <p class="area">{{ place?.area }} ha</p>

  <PlaceMap :src="map" :spots="place?.spots || []" />
</template>

<style scoped>
.title {
  font-size: 150%;
  font-weight: bold;
}

.area {
  font-style: italic;
}
</style>
