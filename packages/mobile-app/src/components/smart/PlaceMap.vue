<script setup lang="ts">
import { usePlaces, type PlaceSpot, type Place } from '@/domain/usePlaces'
import Marker from '@/components/ui/MarkerElement.vue'
import EditableText from '@/components/ui/EditableText.vue'
import { ref } from 'vue'

const props = defineProps<{ place: Place; draftSpot: PlaceSpot | null }>()
const emit = defineEmits(['clickNewSpotPosition'])
const computedStyleMap = { 'background-image': `url(${props.place.map})` }
const selectedSpot = ref<PlaceSpot | null>(null)
const { deleteSpot, editSpotDescription } = usePlaces()

const handleDeleteSpot = () => {
  if (selectedSpot.value) {
    deleteSpot(props.place.id, selectedSpot.value)
    selectedSpot.value = null
  }
}

const onClickMap = (evt: MouseEvent) => {
  evt.preventDefault()

  if (props.draftSpot) {
    const target = evt.target as HTMLInputElement
    const rect = target.getBoundingClientRect()
    const width = rect.right - rect.left
    const height = rect.bottom - rect.top
    const x = evt.clientX - rect.left
    const y = evt.clientY - rect.top
    const xPercentage = (x / width) * 100
    const yPercentage = (y / height) * 100
    emit('clickNewSpotPosition', { x: xPercentage, y: yPercentage })
  }
}

const handleUpdateSpotDescription = (newDescription: string) => {
  if (selectedSpot.value) {
    editSpotDescription(props.place.id, { ...selectedSpot.value, description: newDescription })
    selectedSpot.value.description = newDescription
  }
}
</script>

<template>
  <div class="map" :style="computedStyleMap" @click="onClickMap">
    <Marker
      :key="`${spot.x}-${spot.y}`"
      v-for="(spot, i) of props.place.spots"
      :value="i + 1"
      :x="spot.x"
      :y="spot.y"
      @click="selectedSpot = spot"
    />

    <Marker
      v-if="draftSpot"
      :key="`${draftSpot.x}-${draftSpot.y}`"
      value="X"
      :x="draftSpot.x"
      :y="draftSpot.y"
    />
  </div>

  <div v-if="selectedSpot">
    <div class="titleSpot">
      <p class="spotDescriptionTitle">Spot</p>
      <button @click="handleDeleteSpot">Supprimer Spot</button>
    </div>
    <EditableText :text="selectedSpot.description" @on-update="handleUpdateSpotDescription" />
  </div>
</template>

<style scoped>
.map {
  width: auto;
  height: 50vh;
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.titleSpot {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
}

.spotDescriptionTitle {
  font-size: 120%;
  font-style: italic;
  margin-top: 20px;
}
</style>
