import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-3">LPI CHEMICAL</h2>
            <p className="text-gray-400 leading-relaxed">
              Leading supplier of high-quality chemicals, polymers, and industrial
              additives with a commitment to innovation and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400 transition">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400 transition">About Us</a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-blue-400 transition">Gallery</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products/chemicals" className="hover:text-blue-400 transition">Chemicals</a>
              </li>
              <li>
                <a href="/products/polymers" className="hover:text-blue-400 transition">Polymers</a>
              </li>
              <li>
                <a href="/products/additives" className="hover:text-blue-400 transition">Specialty Additives</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span>
                  LPI Chemical, Sector - 8,<br />
                  Noida, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+917505266931" className="hover:text-blue-400 transition">
                  +91 75052 66931
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:info@lpichemical.com" className="hover:text-blue-400 transition">
                  info@lpichemical.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex items-center gap-5">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex justify-between flex-col sm:flex-row text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} LPI Chemical. All Rights Reserved.</p>
          <p>
            Designed & Developed by <span className="text-blue-400">Webtech Solution</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
