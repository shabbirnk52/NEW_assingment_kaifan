import { Character } from '@/app/types'

const BASE_URL = 'https://swapi.info/api'

export const getCharacters = async (): Promise<Character[]> => {
  try {
    const response = await fetch(`${BASE_URL}/people`)
    if (!response.ok) throw new Error('Failed to fetch characters')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching characters:', error)
    throw new Error('Failed to fetch characters')
  }
}

export const getCharacterByName = async (characterName: string): Promise<Character> => {
  try {
    const response = await fetch(`${BASE_URL}/people/?search=${characterName}`)
    if (!response.ok) throw new Error('Failed to fetch character')
    const data = await response.json()
    return data.results[0]
  } catch (error) {
    console.error('Error fetching character:', error)
    throw new Error('Failed to fetch character')
  }
}