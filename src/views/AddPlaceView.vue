<script setup lang="ts">
import { reactive } from 'vue'
import { usePlaces, type PlaceCreation } from '@/domain/usePlaces'
import { toBase64 } from '@/utils'
import { useRouter } from 'vue-router'

const spotCreation = reactive<PlaceCreation>({
  name: '',
  description: '',
  map: '',
  area: 0,
  spots: []
})
const { addPlace } = usePlaces()
const router = useRouter()

const createPlace = () => {
  addPlace(spotCreation)
  router.back()
}

async function handleUploadMap(evt: Event) {
  const inputElement = evt.target as HTMLInputElement
  const files = inputElement.files

  if (files && files[0]) {
    const file = files[0]
    const base64File = (await toBase64(file)) as string
    spotCreation.map = base64File
  }
}
</script>

<template>
  <p class="title">Création d'un spot</p>

  <label for="name">Nom du plan d'eau</label>
  <input v-model="spotCreation.name" id="name" />

  <label for="area">Taille (ha)</label>
  <input v-model="spotCreation.area" type="number" id="area" />

  <label for="description">Description</label>
  <input v-model="spotCreation.description" id="description" />

  <label for="map">Carte</label>
  <input type="file" id="map" @change="handleUploadMap" />
  <img class="preview" v-if="spotCreation.map" :src="spotCreation.map" :height="150" />

  <button @click="router.back()">Annuler</button>
  <button @click="createPlace">Valider</button>
</template>

<style scoped>
.title {
  font-size: 150%;
  font-weight: bold;
}

input {
  display: block;
  margin-bottom: 10px;
}

.preview {
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
