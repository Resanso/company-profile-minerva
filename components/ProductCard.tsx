import Link from "next/link";

interface ProductCardProps {
  id: number;
  icon: string;
  title: string;
  oneLiner: string;
  keyFeatures: string[];
  useCases: string[];
}

export function ProductCard({
  id,
  icon,
  title,
  oneLiner,
  keyFeatures,
  useCases,
}: ProductCardProps) {
  return (
    <Link
      href={`/product/${id}`}
      className="bg-[#10192e] p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300 block text-left"
    >
      <img src={icon} alt={title} className="w-24 mb-4" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-blue-400 text-sm mb-4 italic">{oneLiner}</p>

      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">
          Key Features
        </h4>
        <ul className="space-y-1">
          {keyFeatures.map((feature, index) => (
            <li key={index} className="text-gray-300 text-xs flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">
          Use Cases
        </h4>
        <ul className="space-y-1">
          {useCases.map((useCase, index) => (
            <li key={index} className="text-gray-300 text-xs flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>{useCase}</span>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
