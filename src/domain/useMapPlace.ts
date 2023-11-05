import placesMap from '@/assets/places-map.json'

function getPlaceMapFromName(name: string): string {
  const map = placesMap[name]

  if (map) {
    return map as string
  } else {
    return ''
  }
}

export default function useMapPlace() {
  return { getPlaceMapFromName }
}
