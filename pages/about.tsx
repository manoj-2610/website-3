// @prompt: Create an SEO-optimized About page for a legaltech startup using Tailwind and TypeScript in Next.js
export default function About(): JSX.Element {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">About 42Law Austria</h1>
      
      <p className="text-lg leading-relaxed mb-4">
        At <strong>42Law</strong>, we’re changing how legal services work. Based in Austria, our digital-first approach delivers fast, affordable, and expert legal support — whether you’re a startup founder, an SME, or a scaling tech company.
      </p>

      <p className="text-lg leading-relaxed">
        From company formation to IP protection and M&A support, we’re your legal partner through every stage of your business journey.
      </p>
    </div>
  );
}
