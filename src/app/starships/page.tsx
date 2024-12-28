import { getStarships } from '../api/starships/StarshipsService'
import BackButton from '../components/BackButton'
import { Starship } from '../types'

export default async function Starships() {
  const starships = await getStarships()

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <BackButton />
        <h1 className="text-4xl font-bold mb-8 text-yellow-400">Star Wars Starships</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {starships.map((starship: Starship) => (
            <div key={starship.name} className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <h2 className="text-2xl font-semibold mb-2">{starship.name}</h2>
              <div className="space-y-2 text-gray-300">
                <p>Model: {starship.model}</p>
                <p>Manufacturer: {starship.manufacturer}</p>
                <p>Length: {starship.length}m</p>
                <p>Cost: {parseInt(starship.cost_in_credits).toLocaleString()} credits</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}