// pages/index.tsx
// @prompt: Build a modern legaltech homepage using Tailwind CSS and TypeScript for a digital-first Austrian law firm
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 text-center px-4">
        <h1 className="text-5xl font-extrabold mb-4">42Law Austria</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Your modern digital law firm – helping startups & businesses thrive across Austria & Europe.
        </p>
        <Link href="/pricing" passHref>
          <a className="mt-6 inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition">
            View Our Pricing
          </a>
        </Link>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Company Formation</h3>
            <p>Start your business with confidence. We handle everything from registration to compliance.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Contracts & IP</h3>
            <p>Get bulletproof contracts and protect your intellectual property the smart way.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Ongoing Legal Support</h3>
            <p>Flexible legal packages for founders, startups, and SMEs scaling fast.</p>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-green-50 text-center py-16 px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Transparent Pricing</h2>
        <p className="text-lg mb-6">No hidden fees. Simple legal plans tailored for startups.</p>
        <Link href="/pricing" passHref>
          <a className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
            See Pricing Plans
          </a>
        </Link>
      </section>
    </div>
  );
}
