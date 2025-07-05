// @prompt: Refactor this layout for better structure using Tailwind and TypeScript in a Next.js app
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
