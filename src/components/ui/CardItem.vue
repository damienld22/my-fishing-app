<script setup lang="ts">
const props = defineProps<{ title: string; description?: string }>()
const emit = defineEmits(['click'])
</script>

<template>
  <div class="container" @click="emit('click')">
    <p class="title">{{ props.title }}</p>

    <div class="description">
      <p v-if="props.description">{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid;
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
}

.title {
  font-size: 120%;
  font-weight: bold;
}

.description {
  font-size: 80%;
}
</style>
