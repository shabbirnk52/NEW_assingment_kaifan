import Link from 'next/link'
import Image from 'next/image'
import StarBackground from './components/StarBackground'


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white relative">
      <StarBackground />
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-end mb-6">
          <Link 
            href="/contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-full transition-colors"
          >
            Contact Us
          </Link>
        </div>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Star Wars Explorer</h1>
          <p className="text-xl text-gray-300">Discover the galaxy far, far away...</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CategoryCard 
            title="Characters" 
            description="Meet the legendary heroes and villains of the Star Wars"
            href="/characters"
            imagePath="/chars.jpg"
          />
          <CategoryCard 
            title="Planets" 
            description="Explore exotic worlds from desert planets to ice giants"
            href="/planets"
            imagePath="/deathstar.jpg"
          />
          <CategoryCard 
            title="Starships" 
            description="Discover the most iconic vessels in the galaxy"
            href="/starships"
            imagePath="/starship.jpeg"
          />
        </div>
      </div>
      </div>
    </main>
  )
}

function CategoryCard({ 
  title, 
  description, 
  href, 
  imagePath 
}: { 
  title: string
  description: string
  href: string
  imagePath: string
}) {
  return (
    <Link href={href}>
      <div className="group bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
        <div className="relative h-48 w-full">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-yellow-400">{title}</h2>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  )
}