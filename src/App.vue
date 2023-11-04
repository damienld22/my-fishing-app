<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import useTitle from '@/domain/useTitle'

const title = useTitle()
</script>

<template>
  <RouterLink to="/" class="title">
    <img width="50" height="50" src="./assets/logo.png" />

    <h1>{{ title }}</h1>
  </RouterLink>

  <RouterView />
</template>

<style scoped>
.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}
</style>
