import { generateId } from '@/utils'
import { ref } from 'vue'

const STORAGE_KEY = 'myfishingapp-places'

export type PlaceSpot = {
  x: number
  y: number
  description: string
}

export type Place = {
  id: string
  name: string
  description?: string
  area: number
  map: string
  spots: PlaceSpot[]
}

export type PlaceCreation = Omit<Place, 'id'>

function getPlacesFromStorage() {
  const storageValue = localStorage.getItem(STORAGE_KEY)
  return storageValue ? JSON.parse(storageValue) : []
}

const places = ref<Place[]>(getPlacesFromStorage())

export function usePlaces() {
  const addPlace = (place: PlaceCreation) => {
    const id = generateId()
    const placeToCreate: Place = { ...place, id }
    places.value.push(placeToCreate)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(places.value))
  }

  const getPlaceById = (id: string) => {
    return places.value.find((elt) => elt.id === id)
  }

  const deletePlaceById = (id: string) => {
    places.value = places.value.filter((elt) => elt.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(places.value))
  }

  const addSpot = (placeId: string, spot: PlaceSpot) => {
    const updatingPlaces = [...places.value]
    const placeIndex = updatingPlaces.findIndex((elt) => elt.id === placeId)
    if (placeIndex > -1) {
      updatingPlaces[placeIndex].spots.push(spot)
    }
    places.value = updatingPlaces
    localStorage.setItem(STORAGE_KEY, JSON.stringify(places.value))
  }

  const deleteSpot = (placeId: string, spot: PlaceSpot) => {
    const updatingPlaces = [...places.value]
    const placeIndex = updatingPlaces.findIndex((elt) => elt.id === placeId)
    if (placeIndex > -1) {
      updatingPlaces[placeIndex].spots = updatingPlaces[placeIndex].spots.filter(
        (elt) => elt.x !== spot.x && elt.y !== spot.y
      )
    }

    places.value = updatingPlaces
    localStorage.setItem(STORAGE_KEY, JSON.stringify(places.value))
  }

  return { places, getPlaceById, addPlace, deletePlaceById, addSpot, deleteSpot }
}
