import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Premium Industrial Chemicals",
    subtitle: "High-quality chemical solutions for manufacturing & industrial use.",
    image:
      "https://www.niir.org/blog/wp-content/uploads/2020/08/Chemicals.jpg",
    buttonText: "Explore Chemicals",
    buttonLink: "/products/chemicals",
  },
  {
    id: 2,
    title: "Advanced Polymers & Resins",
    subtitle: "Innovative polymer materials engineered for performance and durability.",
    image:
      "https://www.avensonline.org/blog/wp-content/uploads/2015/09/chemistry-and-its-applications2.jpg",
    buttonText: "View Polymers",
    buttonLink: "/products/polymers",
  },
  {
    id: 3,
    title: "Specialty Additives & Masterbatches",
    subtitle: "Enhance properties with cutting-edge additives and color solutions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReEWEoPq2KNfewZsDsqSkrMh4cGJ9iuDIpJA&s",
    buttonText: "See Additives",
    buttonLink: "/products/additives",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev => (prev === slides.length - 1 ? 0 : prev + 1)));
    }, 5000); // Slightly slower = more premium feel
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[75vh] sm:h-[85vh] lg:h-[90vh] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? "opacity-100 z-20"
              : "opacity-0 z-10"
          }`}
        >
          {/* Image with lazy loading & quality */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 text-white z-30">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-2xl">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl drop-shadow-lg">
              {slide.subtitle}
            </p>
            <a
              href={slide.buttonLink}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold shadow-xl transition transform hover:scale-105"
            >
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-4 rounded-full text-white z-40 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={36} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-4 rounded-full text-white z-40 transition"
        aria-label="Next slide"
      >
        <ChevronRight size={36} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-10"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;