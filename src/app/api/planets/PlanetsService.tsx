import { Planet } from '@/app/types'

const BASE_URL = 'https://swapi.info/api'

export const getPlanets = async (): Promise<Planet[]> => {
  try {
    const response = await fetch(`${BASE_URL}/planets`)
    if (!response.ok) throw new Error('Failed to fetch planets')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching planets:', error)
    throw new Error('Failed to fetch planets')
  }
}

export const getPlanetByName = async (planetName: string): Promise<Planet> => {
  try {
    const response = await fetch(`${BASE_URL}/planets/?search=${planetName}`)
    if (!response.ok) throw new Error('Failed to fetch planet')
    const data = await response.json()
    return data.results[0]
  } catch (error) {
    console.error('Error fetching planet:', error)
    throw new Error('Failed to fetch planet')
  }
}