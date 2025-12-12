import React from "react";
import { Target, Eye, User } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="w-full bg-gray-50">

      {/* Header Section */}
      <div className="relative w-full bg-blue-600 text-white py-20">
        <h1 className="text-5xl font-bold text-center">About Us</h1>
        <p className="text-center text-lg mt-4 opacity-90">
          Dedicated to excellence, driven by quality.
        </p>
      </div>

      {/* HISTORY SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our History</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Established with a commitment to deliver premium chemical and industrial
          solutions, our company has grown from a small regional supplier into a trusted
          name across multiple industries.  
          <br /><br />
          Over the years, we have consistently expanded our product range,
          strengthened our distribution network, and adapted to modern technology to meet
          the evolving needs of our clients.  
          <br /><br />
          Today, we proudly serve a wide customer base with a reputation built on
          quality, transparency, and reliability. Our journey is defined by innovation,
          customer trust, and decades of industry expertise.
        </p>
      </div>

      {/* MISSION & VISION */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Mission */}
        <div className="bg-white shadow-md rounded-xl p-10 border border-gray-100 hover:shadow-xl transition">
          <Target className="w-14 h-14 text-blue-600 mb-4" />
          <h3 className="text-3xl font-semibold text-gray-800 mb-3">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to supply world-class chemical solutions backed by
            technology, research, and quality.  
            <br /><br />
            We aim to empower industries with safe, efficient, and eco-friendly
            materials while maintaining transparency, timely service, and long-term
            relationships with our clients.  
            <br /><br />
            Every product we offer reflects our commitment to reliability,
            innovation, and consistent excellence.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-md rounded-xl p-10 border border-gray-100 hover:shadow-xl transition">
          <Eye className="w-14 h-14 text-blue-600 mb-4" />
          <h3 className="text-3xl font-semibold text-gray-800 mb-3">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to be recognized as a global leader in chemical trading,
            manufacturing, and allied services.  
            <br /><br />
            By integrating innovation, sustainability, and cutting-edge technologies,
            we strive to create solutions that impact industries positively and
            responsibly.  
            <br /><br />
            We aim to expand our global reach and build a future where industries can
            access premium-quality products with trust and ease.
          </p>
        </div>
      </div>

      {/* DIRECTOR'S MESSAGE */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Director's Message</h2>

        <div className="bg-white shadow-lg rounded-xl p-10 border border-gray-100 hover:shadow-xl transition">
          <User className="w-14 h-14 text-blue-600 mb-4" />

          <h3 className="text-2xl font-semibold mb-4">A Word from Our Director</h3>

          <p className="text-gray-700 leading-relaxed text-lg">
            “Since the inception of this company, our goal has always been to bring
            unmatched quality, trust, and value to every client we serve.  
            <br /><br />
            In an industry where precision and consistency matter the most, we ensure
            every product delivered meets global standards of purity, performance, and
            safety.  
            <br /><br />
            As we continue to grow, we remain committed to innovation,
            customer satisfaction, and responsible business practices that contribute to
            the success of our clients.  
            <br /><br />
            I believe that strong values, transparent operations, and dedication to
            quality will always be the pillars of our organization.”
          </p>

          <p className="mt-6 text-gray-900 font-semibold text-xl">
            — Director, LPI Chemical
          </p>
        </div>
      </div>

    </div>
  );
}
