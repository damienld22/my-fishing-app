<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import useTitle from '@/domain/useTitle'

const title = useTitle()
</script>

<template>
  <div class="title">
    <RouterLink to="/">
      <img width="50" height="50" src="./assets/logo.png" />
    </RouterLink>

    <h1>{{ title }}</h1>
  </div>

  <RouterView />
</template>

<style scoped>
.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}

.title h1 {
  margin-left: 20px;
}
</style>
