<script setup lang="ts">
import TrashIcon from '@/assets/icons/TrashIcon.vue'
const props = defineProps<{ title: string; description?: string }>()
const emit = defineEmits(['click', 'delete'])

const onDelete = (evt: Event) => {
  evt.stopPropagation()
  emit('delete')
}
</script>

<template>
  <div class="container" @click="emit('click')">
    <div class="titleContainer">
      <p class="title">{{ props.title }}</p>
      <TrashIcon class="trashIcon" @click="onDelete" />
    </div>

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

.titleContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-size: 120%;
  font-weight: bold;
}

.description {
  font-size: 80%;
}

.trashIcon {
  width: 20px;
  height: 20px;
}
</style>
