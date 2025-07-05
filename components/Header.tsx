// components/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold text-blue-600">42Law</a>
        </Link>
        <div className="space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-gray-700 hover:text-blue-600">Home</a>
          </Link>
          <Link href="/pricing" legacyBehavior>
            <a className="text-gray-700 hover:text-blue-600">Pricing</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}
