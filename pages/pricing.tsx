// @prompt: Create a pricing page for a legaltech firm using Tailwind and TypeScript with clean layout and conversion copy
export default function Pricing(): JSX.Element {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
        Transparent Pricing
      </h1>

      <ul className="space-y-6 text-lg text-gray-800">
        <li className="bg-green-50 border border-green-200 p-4 rounded shadow-sm">
          ✔ <strong>Company Formation</strong>: €299 flat fee
        </li>
        <li className="bg-green-50 border border-green-200 p-4 rounded shadow-sm">
          ✔ <strong>Startup Legal Package</strong>: €499/month
        </li>
        <li className="bg-green-50 border border-green-200 p-4 rounded shadow-sm">
          ✔ <strong>Contract Review</strong>: from €149
        </li>
        <li className="bg-green-50 border border-green-200 p-4 rounded shadow-sm">
          ✔ <strong>Custom Corporate Advisory</strong>: Tailored Quotes
        </li>
      </ul>

      <p className="mt-8 text-center text-gray-500 text-sm">
        *All prices excl. VAT. Book a free consultation to discuss your needs.
      </p>
    </div>
  );
}
