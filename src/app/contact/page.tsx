import BackButton from '../components/BackButton'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <BackButton />
        <h1 className="text-4xl font-bold mb-8 text-yellow-400">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-4">
              Thank you for your interest in Star Wars Explorer! While we don't have a contact form at the moment, 
              you can reach us through the following channels:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">info@starwarsexplorer.example</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                <p className="text-gray-300">Follow us on Twitter: @starwarsexplorer</p>
                <p className="text-gray-300">Follow us on Instagram: @starwarsexplorer</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-auto rounded-lg overflow-hidden">
            <Image
              src="/contact_us.jpg"
              alt="Star Wars Contact"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}