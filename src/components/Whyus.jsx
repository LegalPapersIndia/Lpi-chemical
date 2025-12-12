import React from "react";
import { ShieldCheck, Boxes, Award, Headphones } from "lucide-react";

const features = [
  {
    title: "High Quality Products",
    description:
      "We supply chemicals, polymers, and additives that meet global quality standards, ensuring reliability and performance.",
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Wide Product Range",
    description:
      "From industrial chemicals to specialty additives, we offer a diverse product range for multiple industries.",
    icon: <Boxes className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Industry Expertise",
    description:
      "Years of experience in the chemical distribution industry with deep product knowledge and technical support.",
    icon: <Award className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Customer Support",
    description:
      "We provide dedicated customer support, ensuring smooth delivery and quick solutions to client needs.",
    icon: <Headphones className="w-10 h-10 text-blue-600" />,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-blue-600">LPI Chemical?</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Trusted by industries across India, we deliver unmatched reliability,
          product quality, and customer satisfaction.
        </p>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gray-100 rounded-xl shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;
