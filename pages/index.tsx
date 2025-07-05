import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
        Welcome to 42Law
      </h1>
      <p className="text-lg text-center mb-8">
        Affordable and efficient legal services tailored for startups.
      </p>
      <div className="flex justify-center">
        <Link href="/pricing/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
          View Pricing
        </Link>
      </div>
      <div className="flex justify-center mt-6">
        <Link href="/pricing/" className="inline-block text-blue-600 hover:underline text-base">
          Go to Pricing Page
        </Link>
      </div>
      <footer className="text-center mt-12 text-sm text-gray-600">
        © {new Date().getFullYear()} 42Law. All rights reserved.
      </footer>
    </main>
  );
}
