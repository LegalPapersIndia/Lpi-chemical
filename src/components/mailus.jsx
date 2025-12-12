import React from "react";
import { Mail } from "lucide-react";

const MailUsButton = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center group">
      {/* Icon */}
      <a
        href="mailto:info@lpichemical.com"
        className="
          bg-blue-600
          p-4
          rounded-full
          shadow-xl
          hover:bg-blue-700
          transition
          duration-300
          transform
          hover:scale-105
          flex
          items-center
          justify-center
        "
      >
        <Mail size={24} />
      </a>

      {/* Sliding Label */}
      <a
        href="mailto:info@lpichemical.com"
        className="
          bg-blue-700
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
          ml-[-1px]  /* avoid gap between icon & label */
        "
      >
        Mail Us
      </a>
    </div>
  );
};

export default MailUsButton;
