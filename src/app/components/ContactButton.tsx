import Link from 'next/link'

export default function ContactButton() {
  return (
    <Link 
      href="/contact"
      className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-full transition-colors"
    >
      Contact Us
    </Link>
  )