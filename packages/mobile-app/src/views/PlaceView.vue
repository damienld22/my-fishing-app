<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePlaces, type PlaceSpot } from '@/domain/usePlaces'
import PlaceMap from '@/components/smart/PlaceMap.vue'
import EditableText from '@/components/ui/EditableText.vue'
import { computed, ref } from 'vue'

const route = useRoute()
const { getPlaceById, addSpot, editPlace } = usePlaces()
const place = computed(() => getPlaceById(route.params.id as string))
const onAddingSpot = ref<PlaceSpot | null>(null)

const validateAddingSpot = () => {
  if (onAddingSpot.value) {
    addSpot(place.value?.id!, onAddingSpot.value!)
  }

  onAddingSpot.value = null
}

const generateDraftSpot = () => {
  onAddingSpot.value = { description: '', x: 50, y: 50 }
}

const handleUpdateSpot = (position: { x: number; y: number }) => {
  if (onAddingSpot.value) {
    onAddingSpot.value.x = position.x
    onAddingSpot.value.y = position.y
  }
}

const handleUpdateDescription = (updatedValue: string) => {
  editPlace(place.value?.id!, { description: updatedValue })
}
</script>

<template>
  <p class="title">{{ place?.name }}</p>
  <p class="area">{{ place?.area }} ha</p>

  <p v-if="place?.description" class="description">
    <EditableText :text="place.description" @on-update="handleUpdateDescription" />
  </p>

  <PlaceMap
    v-if="place"
    :place="place"
    :draft-spot="onAddingSpot"
    @click-new-spot-position="handleUpdateSpot"
  />

  <div class="addSpotContainer">
    <button v-if="!onAddingSpot" @click="generateDraftSpot">Ajouter un spot</button>
    <div v-if="onAddingSpot">
      <div>
        <button @click="validateAddingSpot">Valider</button>
        <button @click="onAddingSpot = null">Annuler</button>
      </div>
      <div class="spotDescription">
        <label for="descriptionSpot">Description du spot</label>
        <input id="descriptionSpot" v-model="onAddingSpot.description" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 150%;
  font-weight: bold;
}

.area {
  font-style: italic;
}

.addSpotContainer {
  margin-top: 20px;
  margin-bottom: 20px;
}
.description {
  margin-top: 10px;
  margin-bottom: 20px;
}

.spotDescription {
  display: flex;
  flex-direction: column;
}
</style>
