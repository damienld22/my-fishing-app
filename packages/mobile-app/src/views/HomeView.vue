<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/weather">Météo</RouterLink>
    <RouterLink to="/places">Spots de pêche</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
}
</style>
