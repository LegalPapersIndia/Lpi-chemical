import React, { useState } from "react";
import { ChevronDown, Menu, X, Mail, Phone } from "lucide-react";

const LpiNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact" },
  ];

  const productCategories = [
    { name: "Chemicals", href: "/products/chemicals" },
    { name: "Polymers", href: "/products/polymers" },
    { name: "Specialty Additives", href: "/products/additives" },
  ];

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  };

  return (
    <>
      {/* ========= TOP INFO BAR ========= */}
      <div className="bg-blue-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

          {/* Left Side - Contact Info */}
          <div className="flex items-center space-x-6">
            <a href="mailto:info@lpichemical.com" className="flex items-center hover:text-gray-200">
              <Mail className="h-4 w-4 mr-1" />
              info@lpichemical.com
            </a>

            <a href="tel:+917505266931" className="flex items-center hover:text-gray-200">
              <Phone className="h-4 w-4 mr-1" />
              +91 7505266931
            </a>
          </div>

          {/* Right Side - Get Quote */}
          <a
            href="/contact"
            className="inline-flex items-center px-3 py-1.5 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100 transition"
          >
            <Mail className="h-4 w-4 mr-1" />
            GET QUOTE
          </a>
        </div>
      </div>

      {/* ========= MAIN NAVBAR ========= */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <a href="/" className="text-2xl font-bold text-blue-600 tracking-wide">
              LPI <span className="text-gray-800">CHEMICAL</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}

              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  className="flex items-center text-gray-700 hover:text-blue-600 text-sm font-medium"
                >
                  PRODUCTS
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transform transition ${
                      isProductsDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isProductsDropdownOpen && (
                  <div
                    className="absolute right-0 mt-3 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  >
                    <div className="py-2">
                      {productCategories.map((product) => (
                        <a
                          key={product.name}
                          href={product.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                          onClick={closeAllMenus}
                        >
                          {product.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md bg-gray-100 hover:bg-blue-600 hover:text-white transition"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ========= MOBILE MENU ========= */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pt-3 pb-6 space-y-3 bg-white border-t">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeAllMenus}
                className="block px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Products Dropdown */}
            <button
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              className="flex items-center w-full px-2 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              PRODUCTS
              <ChevronDown
                className={`ml-1 h-5 w-5 transform transition ${
                  isProductsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isProductsDropdownOpen && (
              <div className="pl-6 space-y-2">
                {productCategories.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    onClick={closeAllMenus}
                    className="block text-gray-600 py-1 text-sm hover:text-blue-600 hover:bg-gray-200 rounded-md px-2"
                  >
                    {product.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default LpiNavbar;
