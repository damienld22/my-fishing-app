<script setup lang="ts">
import CardItem from '@/components/ui/CardItem.vue'
import { usePlaces } from '@/domain/usePlaces'
import { useRouter } from 'vue-router'

const { places, deletePlaceById } = usePlaces()
const router = useRouter()
</script>

<template>
  <button @click="router.push('/place-creation')">Ajouter un spot</button>

  <CardItem
    v-for="place of places"
    :key="place.id"
    :title="place.name"
    :description="place.description"
    @click="router.push(`/places/${place.id}`)"
    @delete="deletePlaceById(place.id)"
  />
</template>
