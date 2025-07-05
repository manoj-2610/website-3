// pages/index.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to 42Law</h1>
      <p className="text-lg text-gray-600 mb-6">Your trusted startup legal partner.</p>

      <Link href="/pricing/">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          View Pricing
        </button>
      </Link>
    </div>
  )
}

