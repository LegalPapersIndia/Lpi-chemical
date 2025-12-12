import React, { useState } from "react";

const galleryItems = [
  {
    id: 1,
    img: "https://bulkinside.com/wp-content/uploads/2019/02/chemical-processing-innovations-.jpg",
    title: "Chemical Processing",
    desc: "High-quality industrial chemical formulation and production.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-EZbmdKaT09CYxtmaquo0UnIOgIjtodQobA&s",
    title: "Polymer Solutions",
    desc: "Advanced polymer blends used in multiple industries.",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeoaTcgsIN1OSjCiXa1aMezg7zjSjU6OIQA&s",
    title: "Laboratory Testing",
    desc: "Precision testing and quality assurance for all products.",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hjJc843Onv1sDpuEp657sVIWEgpN4Lro8w&s",
    title: "Storage Facility",
    desc: "Well-maintained storage units for safe chemical containment.",
  },
  {
    id: 5,
    img: "https://s.wsj.net/public/resources/images/BN-OA790_BEAUTY_M_20160516150305.jpg",
    title: "Packaging Unit",
    desc: "Safe and secure packaging for transportation.",
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgh2U2Wxaoh0fVQ_myQHDD7EQeaIU5WBLuyA&s",
    title: "Quality Inspection",
    desc: "Expert inspection to ensure top-level product standards.",
  },
  {
    id: 7,
    img: "https://img.freepik.com/free-photo/robotic-arms-sorting-packages-conveyor-belt_23-2152005497.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Production Line",
    desc: "Efficient chemical production in advanced units.",
  },
  {
    id: 8,
    img: "https://www.interiorhealth.ca/sites/default/files/styles/details_page_banner_mobile/public/2021-10/Research%20Department%20Banner.jpg?itok=kp5k0VMP",
    title: "Research Department",
    desc: "Research and product development for new solutions.",
  },
  {
    id: 9,
    img: "https://plus.unsplash.com/premium_photo-1661302828763-4ec9b91d9ce3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kdXN0cmlhbCUyMHdhcmVob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Industrial Warehouse",
    desc: "Large-scale storage for bulk chemicals.",
  },
  {
    id: 10,
    img: "https://d3fmssennfe86p.cloudfront.net/en-us/wp-content/uploads/sites/4/2022/08/inspection-banner.jpg",
    title: "Quality Check",
    desc: "Final testing before dispatch.",
  },
];

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const showMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Gallery
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            onClick={() => setFullscreenImage(item)}
            className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
          >
            {/* Image */}
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
              <p className="text-gray-200 text-sm mb-4">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < galleryItems.length && (
        <div className="text-center mt-8">
          <button
            onClick={showMore}
            className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition shadow"
          >
            Show More
          </button>
        </div>
      )}

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[9999] p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={fullscreenImage.img}
              alt={fullscreenImage.title}
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />

            {/* Title & Description */}
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-2xl font-semibold">{fullscreenImage.title}</h2>
              <p className="text-sm text-gray-300">{fullscreenImage.desc}</p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 bg-white text-black rounded-full px-4 py-2 font-bold shadow-lg hover:bg-gray-200"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
