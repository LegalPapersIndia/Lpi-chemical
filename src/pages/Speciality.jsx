import React, { useState } from "react";
import { X } from "lucide-react";

const additives = [
  {
    id: 1,
    name: "Antioxidant Additives",
    category: "Stabilizers",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/3/496684286/VC/HN/RT/3426936/antioxidant-additives-powder-500x500.jpg",
    desc: "Prevents polymer degradation caused by heat, oxygen, and processing stress.",
    uses: ["Improves lifespan", "Thermal stability", "Processing protection"],
  },
  {
    id: 2,
    name: "UV Stabilizers",
    category: "Stabilizers",
    img: "https://www.schem.net/uploadfile/201905/09/91f0334883d7f8402a3977c246559c60_small.jpg",
    desc: "Protects polymers from UV radiation and outdoor weathering effects.",
    uses: ["Outdoor plastics", "Color retention", "Weather resistance"],
  },
  {
    id: 3,
    name: "Impact Modifiers",
    category: "Performance Enhancers",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/11/557016044/GI/KD/WV/2954191/km-40-indofil-impact-modifier-powder-250x250.jpg",
    desc: "Enhances toughness and impact resistance of plastic products.",
    uses: ["Automotive parts", "Appliances", "Rigid plastics"],
  },
  {
    id: 4,
    name: "Processing Aids",
    category: "Processing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCR-9GD3p_mffUG-0-3PDv06arlAYz5wfDdQ&s",
    desc: "Improves flow, dispersion, and processing efficiency during manufacturing.",
    uses: ["Better flow", "Reduced defects", "Energy efficiency"],
  },
  {
    id: 5,
    name: "Flame Retardant Additives",
    category: "Safety Additives",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTlcGxIEU01D2_GjaYr78l8SKlgAZKkZfd3A&s",
    desc: "Reduces flammability and improves fire resistance of polymer products.",
    uses: ["Electrical components", "Construction materials", "Safety compliance"],
  },
];

export default function SpecialAdditivesPage() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(additives.map((a) => a.category))];
  const visible = filter === "All" ? additives : additives.filter((a) => a.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Special Additives
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our specialty additives enhance performance, durability, safety, and
          processing efficiency across polymer and chemical applications.
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
                {selected.uses.map((u, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    {u}
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