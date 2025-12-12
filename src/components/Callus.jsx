import React from "react";
import { Phone } from "lucide-react";

const CallUsButton = () => {
  return (
    <div className="fixed bottom-20 left-6 z-50 flex items-center group">
      {/* Icon */}
      <a
        href="tel:+919999999999"
        className="
          bg-green-600
          p-4
          rounded-full
          shadow-xl
          hover:bg-green-700
          transition
          duration-300
          transform
          hover:scale-105
          flex
          items-center
          justify-center
        "
      >
        <Phone size={24} />
      </a>

      {/* Sliding Label */}
      <a
        href="tel:+919999999999"
        className="
          bg-green-700
          text-white
          px-5
          py-3
          rounded-r-full
          font-medium
          opacity-0
          translate-x-[-100%]
          group-hover:opacity-100
          group-hover:translate-x-0
          transition-all
          duration-300
          shadow-lg
          ml-[-1px]  /* slight overlap to avoid gap between icon & label */
        "
      >
        Call Us
      </a>
    </div>
  );
};

export default CallUsButton;
