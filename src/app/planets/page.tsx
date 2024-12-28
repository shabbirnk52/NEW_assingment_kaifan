import { getPlanets } from '../api/planets/PlanetsService'
import BackButton from '../components/BackButton'
import { Planet } from '../types'

export default async function Planets() {
  const planets = await getPlanets()

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <BackButton />
        <h1 className="text-4xl font-bold mb-8 text-yellow-400">Star Wars Planets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {planets.map((planet: Planet) => (
            <div key={planet.name} className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">{planet.name}</h2>
              <p className="text-gray-300">Climate: {planet.climate}</p>
              <p className="text-gray-300">Terrain: {planet.terrain}</p>
              <p className="text-gray-300">Population: {planet.population}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
