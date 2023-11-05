<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePlaces } from '@/domain/usePlaces'
import PlaceMap from '@/components/smart/PlaceMap.vue'

const route = useRoute()
const { getPlaceById } = usePlaces()

const place = getPlaceById(route.params.id as string)
</script>

<template>
  <p class="title">{{ place?.name }}</p>
  <p class="area">{{ place?.area }} ha</p>

  <PlaceMap v-if="place" :src="place?.map" :spots="place?.spots || []" />
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
