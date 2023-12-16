<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import useTitle from '@/domain/useTitle'
import { version } from '../package.json'

const title = useTitle()
</script>

<template>
  <div class="container">
    <div class="title">
      <RouterLink to="/">
        <img alt="logo" width="50" height="50" src="./assets/logo.png" />
      </RouterLink>

      <h1>
        {{ title }}<span class="version">({{ version }})</span>
      </h1>
    </div>

    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}

.title h1 {
  margin-left: 20px;
}

.version {
  font-size: 1rem;
  margin-left: 10px;
}
</style>
