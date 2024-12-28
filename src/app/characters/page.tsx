import { getCharacters } from '../api/characters/CharactersService'
import BackButton from '../components/BackButton'
import { Character } from '../types'

export default async function Characters() {
  const characters = await getCharacters()

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <BackButton />
        <h1 className="text-4xl font-bold mb-8 text-yellow-400">Star Wars Characters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character: Character) => (
            <div key={character.name} className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <h2 className="text-2xl font-semibold mb-2">{character.name}</h2>
              <div className="space-y-2 text-gray-300">
                <p>Birth Year: {character.birth_year}</p>
                <p>Height: {character.height}cm</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}