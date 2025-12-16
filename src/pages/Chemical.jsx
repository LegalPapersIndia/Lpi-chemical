import React, { useState } from "react";
import { X } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Industrial Solvents",
    category: "Processing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KP1BiMP2r7nGqB9L4WQEssw4kbBztYx4fw&s",
    desc: "High-purity solvents used in large-scale chemical manufacturing and processing units.",
    features: ["High purity", "Stable formulation", "Bulk availability"],
  },
  {
    id: 2,
    name: "Polymer Compounds",
    category: "Materials",
    img: "https://www.waters.com/content/dam/waters/en/Photography/stock/chemical-materials/stock-polymers-in-vials.jpg.82.resize/img.jpg",
    desc: "Advanced polymer blends engineered for durability and performance.",
    features: ["Heat resistant", "Custom blends", "Industry tested"],
  },
  {
    id: 3,
    name: "Laboratory Reagents",
    category: "Laboratory",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9LosKdB5wuq4nH1nA8OXPMwN2lTq8MtVQA&s",
    desc: "Precision-grade reagents ensuring accurate laboratory results.",
    features: ["Certified grade", "Accurate results", "Secure packaging"],
  },
  {
    id: 4,
    name: "Water Treatment Chemicals",
    category: "Utilities",
    img: "https://reucherafricakenyaltd.co.ke/wp-content/uploads/2024/10/Water-Treatment-Chemicals-article-01-3-1.jpg",
    desc: "Efficient chemicals for industrial and municipal water treatment.",
    features: ["Eco-friendly", "High efficiency", "Regulatory compliant"],
  },
];

export default function ChemicalProductsPage() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const visible =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our Chemical Products
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our wide range of industrial-grade chemical products designed
          for performance, safety, and reliability.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <span className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
                {item.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full"
            >
              <X size={22} />
            </button>

            <img
              src={selected.img}
              alt={selected.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-8">
              <span className="text-sm text-blue-600 font-semibold">
                {selected.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-4">
                {selected.name}
              </h2>
              <p className="text-gray-600 mb-6">{selected.desc}</p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selected.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
