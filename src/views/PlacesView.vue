<script setup lang="ts">
import CardItem from '@/components/ui/CardItem.vue'
import usePlaces from '@/domain/usePlaces'
import { useRouter } from 'vue-router'

const { places } = usePlaces()
const router = useRouter()
</script>

<template>
  <CardItem
    v-for="place of places"
    :key="place.id"
    :title="place.name"
    :description="place.description"
    @click="router.push(`/places/${place.id}`)"
  />
</template>
