import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LpiNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import MailUsButton from "./components/mailus";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import GalleryPage from "./pages/GalleryPage";
import CallUsButton from "./components/Callus";
import ContactUs from "./pages/Contactus";

const App = () => {
  return (
    <Router>
      <LpiNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>

      {/* Floating Mail Button */}
      <CallUsButton />
      <MailUsButton />

      <Footer />
    </Router>
  );
};

export default App;
