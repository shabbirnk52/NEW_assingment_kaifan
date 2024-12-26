import { Starship } from "../types";
import BackButton from "../components/BackButton";

async function getStarships(): Promise<Starship[]> {
  const res = await fetch("https://swapi.info/api/starships");
  const data = await res.json();
  return data;
}

export default async function Starships() {
  const starships = await getStarships();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <BackButton />
        <h1 className="text-4xl font-bold mb-8 text-yellow-400">
          Star Wars Starships
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {starships.map((starship: Starship) => (
            <div key={starship.name} className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">{starship.name}</h2>
              <p className="text-gray-300">Model: {starship.model}</p>
              <p className="text-gray-300">
                Manufacturer: {starship.manufacturer}
              </p>
              <p className="text-gray-300">Length: {starship.length}m</p>
              <p className="text-gray-300">
                Cost: {parseInt(starship.cost_in_credits).toLocaleString()}{" "}
                credits
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
