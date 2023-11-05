export type PlaceSpot = {
  x: number
  y: number
  description: string
}

export type Place = {
  id: number
  name: string
  description?: string
  area: number
  map: string
  spots: PlaceSpot[]
}

const places: Place[] = [
  {
    id: 1,
    name: 'Étang du Petit Coutance',
    description: 'Graciation toutes espèces. Pêche en float-tube',
    area: 3.9,
    map: 'bad',
    spots: []
  },
  {
    id: 2,
    name: 'Étang du Grand Coutance',
    area: 8.6,
    map: 'bad',
    spots: []
  },
  {
    id: 3,
    name: 'Étang du Colombier',
    area: 5.7,
    map: 'etang_colombier',
    spots: [
      { x: 30, y: 20, description: 'Au pif' },
      { x: 70, y: 50, description: 'Au pif 2' }
    ]
  }
]

function getPlaceById(id: number) {
  return places.find((elt) => elt.id === id)
}

export default function usePlaces() {
  return { places, getPlaceById }
}
