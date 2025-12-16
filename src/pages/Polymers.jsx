import React, { useState } from "react";
import { X } from "lucide-react";

const polymers = [
  {
    id: 1,
    name: "HDPE Granules",
    category: "Thermoplastics",
    img: "https://tiimg.tistatic.com/fp/2/009/398/white-hdpe-granules-798.jpg",
    desc: "High-density polyethylene granules used for pipes, containers, and industrial molding.",
    applications: ["Pipes", "Containers", "Blow molding"],
  },
  {
    id: 2,
    name: "LDPE Granules",
    category: "Thermoplastics",
    img: "https://5.imimg.com/data5/FM/KT/MX/SELLER-10721335/ldpe-granules.jpg",
    desc: "Low-density polyethylene offering flexibility and excellent chemical resistance.",
    applications: ["Packaging films", "Bags", "Coatings"],
  },
  {
    id: 3,
    name: "Polypropylene (PP)",
    category: "Engineering Polymers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ30_IYXd5UnFNo8NUC66iv3F-xGuLZj53v5A&s",
    desc: "Lightweight and durable polymer widely used in automotive and consumer goods.",
    applications: ["Automotive parts", "Furniture", "Textiles"],
  },
  {
    id: 4,
    name: "PVC Resin",
    category: "Construction Polymers",
    img: "https://www.polypvc.com/uploadfile/202109/20e0813825a5ba2.png",
    desc: "Versatile polymer resin used in construction, electrical, and medical applications.",
    applications: ["Pipes & fittings", "Cables", "Flooring"],
  },
];

export default function PolymerProductsPage() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(polymers.map((p) => p.category))];
  const visible = filter === "All" ? polymers : polymers.filter((p) => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Polymer Products
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our polymer range delivers strength, flexibility, and reliability for
          diverse industrial applications.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${filter === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
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
                {selected.applications.map((a, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    {a}
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
