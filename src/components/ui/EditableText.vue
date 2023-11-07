<script setup lang="ts">
import { defineProps, ref } from 'vue'
import EditIcon from '@/assets/icons/EditIcon.vue'
import ValidateIcon from '@/assets/icons/ValidateIcon.vue'

const props = defineProps<{ text: string }>()
const emit = defineEmits(['onUpdate'])
const onEdit = ref(false)
const currentValue = ref(props.text)

const handleValidate = () => {
  emit('onUpdate', currentValue.value)
  onEdit.value = false
}
</script>

<template>
  <div v-if="!onEdit" class="line">
    <p>{{ props.text }}</p>
    <div class="icon" @click="onEdit = true"><EditIcon /></div>
  </div>
  <div v-if="onEdit" class="line">
    <input v-model="currentValue" />
    <div class="icon" @click="handleValidate"><ValidateIcon /></div>
  </div>
</template>

<style scoped>
.line {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.icon {
  width: 20px;
  height: 20px;
}
</style>
