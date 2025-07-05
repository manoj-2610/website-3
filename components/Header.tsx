// components/Header.tsx
import Link from 'next/link'
// ✅ import JSX from react if you want to type explicitly
import { JSX } from 'react'

export default function Header(): JSX.Element {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold text-blue-600">42Law</a>
        </Link>
        <div className="space-x-4">
          <Link href="/">
            <a className="text-gray-700 hover:text-blue-600">Home</a>
          </Link>
          <Link href="/pricing">
            <a className="text-gray-700 hover:text-blue-600">Pricing</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}
