import { ref, watch, type Ref } from 'vue'
import { useRoute } from 'vue-router'

export default function useTitle(): Ref<string> {
  const route = useRoute()
  const title = ref(getTitleFromRouteName(route.name?.toString()))

  watch(
    () => route.name,
    () => {
      title.value = getTitleFromRouteName(route.name?.toString())
    }
  )

  return title
}

function getTitleFromRouteName(name?: string): string {
  const defaultTitle = 'My Fishing App'

  switch (name) {
    case 'weather':
      return 'Météo'
    case 'places':
    case 'place':
      return 'Spots'
    case 'home':
    default:
      return defaultTitle
  }
}
