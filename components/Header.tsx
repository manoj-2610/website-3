// @prompt: Create a responsive, accessible navbar with Tailwind and TypeScript for a legal tech startup
import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-800">
          42Law Austria
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/pricing" className="hover:text-blue-600 transition">Pricing</Link>
        </div>

        {/* Mobile menu icon (toggle functionality can be added later) */}
        <div className="md:hidden">
          <button
            aria-label="Open mobile menu"
            className="text-gray-700 text-2xl hover:text-blue-600 transition"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
