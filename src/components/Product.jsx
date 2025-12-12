import React from "react";

const products = [
  {
    name: "Chemicals",
    image:
      "https://www.thoughtco.com/thmb/S43kFVYXoxi3gjY6guOrtb6Oe8g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chemistry-glassware-56a12a083df78cf772680235.jpg",
    link: "/products/chemicals",
  },
  {
    name: "Polymers",
    image:
      "https://www.millstreamengineering.com/wp-content/uploads/2023/10/Polymer-Materials-e1558638211757.jpg",
    link: "/products/polymers",
  },
  {
    name: "Specialty Additives",
    image:
      "https://20microns.com/blogs/wp-content/uploads/2025/09/Speciality-Functional-Additives-Modern-Manufacturing.jpg",
    link: "/products/additives",
  },
];

const ProductCategories = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-12 lg:mb-16">
          Our Product Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16 place-items-center">

          {products.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group flex flex-col items-center transform hover:-translate-y-3 transition-all duration-500"
            >
              {/* Circular Image with nice hover effect */}
              <div className="
                relative w-48 h-48 md:w-64 md:h-64 
                rounded-full overflow-hidden 
                shadow-2xl border-8 border-white 
                group-hover:border-blue-600 
                transition-all duration-500
                ring-4 ring-transparent group-hover:ring-blue-400/30
              ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full h-full object-cover 
                    transition-transform duration-700 
                    group-hover:scale-115
                  "
                  loading="lazy"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
              </div>

              {/* Category Name */}
              <h3 className="
                mt-6 text-2xl md:text-3xl font-bold 
                text-gray-800 group-hover:text-blue-600 
                transition-colors duration-300
              ">
                {item.name}
              </h3>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProductCategories;