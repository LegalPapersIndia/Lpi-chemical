import React, { useState } from "react";
import { X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    img: "https://bulkinside.com/wp-content/uploads/2019/02/chemical-processing-innovations-.jpg",
    title: "Chemical Processing",
    desc: "High-quality industrial chemical formulation and production.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReEWEoPq2KNfewZsDsqSkrMh4cGJ9iuDIpJA&s",
    title: "Polymer Solutions",
    desc: "Advanced polymer blends used in multiple industries.",
  },
  {
    id: 3,
    img: "https://techsafety.com/sites/default/files/styles/blog_/public/2021-10/shutterstock_1682324479_0.jpg?itok=R-fNnKw6",
    title: "Laboratory Testing",
    desc: "Precision testing and quality assurance for every product.",
  },
  {
    id: 4,
    img: "https://storemygoods.in/assets/images/change_in_images/self-storage-all.jpg",
    title: "Storage Facility",
    desc: "Safe and well-managed warehouses for chemical materials.",
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Ba2FoBygcyGm9kzbS2zQztt16ZXlO-FXRA&s",
    title: "Packaging Unit",
    desc: "Secure and industrial-grade packaging solutions.",
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8iVFfCYN8w-mKd-RRnyjCPJpssBtDoWukpw&s",
    title: "Quality Inspection",
    desc: "Expert professionals ensuring top-level quality.",
  },
  {
    id: 7,
    img: "https://uschamber-co.imgix.net/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fco-assets%2Fassets%2Fimages%2FRD_Tom_Werner.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fm=jpg&fp-x=0.5357&fp-y=0.4665&h=600&q=80&w=1200&s=092bf8c25e41308f244505e370ceddc5",
    title: "Research & Development",
    desc: "Innovative R&D for growth and chemical excellence.",
  },
  {
    id: 8,
    img: "https://img.freepik.com/free-photo/close-up-delivery-person-giving-parcel-client_23-2149095941.jpg",
    title: "Client Delivery",
    desc: "Efficient logistics ensuring timely delivery.",
  },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? galleryItems : galleryItems.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Company Gallery
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore our workspaces, production units, laboratories, and processes.
        Every image reflects our commitment to excellence and industry-leading
        quality.
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleImages.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center px-4 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {!showAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Show More Photos
          </button>
        </div>
      )}

      {/* Fullscreen Image Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
          >
            <X size={28} />
          </button>

          {/* Image */}
          <img
            src={selectedImage.img}
            alt={selectedImage.title}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />

          {/* Description */}
          <div className="text-center mt-4 max-w-xl">
            <h3 className="text-white text-2xl font-semibold mb-2">
              {selectedImage.title}
            </h3>
            <p className="text-gray-300 text-sm">{selectedImage.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
