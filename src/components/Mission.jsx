import React from "react";
import { Target, Eye, ShieldCheck } from "lucide-react";

const MissionVision = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
        Quality We Serve
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Mission */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition duration-300 border border-gray-100">
          <div className="flex justify-center mb-4">
            <Target className="h-12 w-12 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to deliver world-class chemical solutions that empower
            industries to achieve higher efficiency, better performance, and sustainable
            growth.  
            <br /><br />
            We aim to build long-term partnerships by maintaining transparency,
            reliability, and consistency in every product we supply. Through innovation,
            research, and strict safety standards, we strive to exceed customer
            expectations and create value for every business we work with.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition duration-300 border border-gray-100">
          <div className="flex justify-center mb-4">
            <Eye className="h-12 w-12 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            Our vision is to be recognized as a global leader in chemical trading,
            manufacturing, and distribution—known for quality, trust, and sustainable
            practices.  
            <br /><br />
            We envision building a future where industries can access premium chemical
            solutions that are eco-friendly, innovative, and cost-efficient. We are
            committed to expanding our portfolio, enhancing technology-driven processes,
            and becoming the most trusted name in the chemical supply chain.
          </p>
        </div>

        {/* Quality */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition duration-300 border border-gray-100">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="h-12 w-12 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Quality Promise</h3>
          <p className="text-gray-600 leading-relaxed">
            Quality is the foundation of everything we do. Every batch of chemicals,
            polymers, and additives we supply is tested under strict industrial
            standards to ensure purity, consistency, and maximum performance.  
            <br /><br />
            We follow certified quality control processes, advanced laboratory testing,
            and industry-approved safety norms to deliver products that meet global
            benchmarks.  
            <br /><br />
            With a customer-first approach, we ensure timely delivery, reliable service,
            and complete product satisfaction across all sectors.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MissionVision;
