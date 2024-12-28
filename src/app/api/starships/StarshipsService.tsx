import { Starship } from '@/app/types'

const BASE_URL = 'https://swapi.info/api'

export const getStarships = async (): Promise<Starship[]> => {
  try {
    const response = await fetch(`${BASE_URL}/starships`)
    if (!response.ok) throw new Error('Failed to fetch starships')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching starships:', error)
    throw new Error('Failed to fetch starships')
  }
}

export const getStarshipByName = async (starshipName: string): Promise<Starship> => {
  try {
    const response = await fetch(`${BASE_URL}/starships/?search=${starshipName}`)
    if (!response.ok) throw new Error('Failed to fetch starship')
    const data = await response.json()
    return data.results[0]
  } catch (error) {
    console.error('Error fetching starship:', error)
    throw new Error('Failed to fetch starship')
  }
}