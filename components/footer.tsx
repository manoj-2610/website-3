// @prompt: Improve this legal-tech footer with Tailwind, accessibility, and semantic HTML
export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 mt-12 border-t">
      <p>
        © {new Date().getFullYear()} <strong>42Law Austria</strong> – All rights reserved.
      </p>
      <p className="text-xs mt-1">Legaltech meets Law</p>
    </footer>
  );
}
