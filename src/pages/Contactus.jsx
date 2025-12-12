import React from "react";
import { Mail, Phone, MapPin, Send, Clock, Building2 } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or need a quote? We're here to help. Reach out via
            form, email, or phone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info + Map */}
          <div className="space-y-12">
            {/* Contact Cards */}
            <div className="grid gap-8">
              <div className="flex items-start space-x-5 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Email Us
                  </h3>
                  <p className="text-gray-600 mt-1">
                    We'll reply within 24 hours
                  </p>
                  <a
                    href="mailto:sales@yourcompany.com"
                    className="text-lg font-medium text-blue-600 hover:underline mt-2 block"
                  >
                    sales@lpichemical.com
                  </a>
                  <a
                    href="mailto:info@yourcompany.com"
                    className="text-lg font-medium text-blue-600 hover:underline"
                  >
                    info@lpichemical.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-5 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Call Us
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Mon–Sat: 9:00 AM – 6:00 PM IST
                  </p>
                  <a
                    href="tel:+917505266931"
                    className="text-lg font-medium text-green-600 hover:underline mt-2 block"
                  >
                    +91 7505266931
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-5 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Visit Us
                  </h3>
                  <p className="text-gray-600 mt-1">
                    F-2 , Sector - 8
                    <br />
                    Noida 201013
                    <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.591472713488!2d77.3221156!3d28.5953405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2290a24adc2aa39f%3A0x6393f050e681d51e!2sLegal%20Papers%20India!5e0!3m2!1sen!2sin!4v1765187159413!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form (Formspree) */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Send us a Message
            </h2>

            <form
              action="https://formspree.io/f/YOUR_FORM_ID_HERE"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="ABC Industries Ltd."
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  placeholder="Tell us about your requirement..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition transform hover:scale-105"
              >
                <Send size={22} />
                Send Message
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-6">
              We respect your privacy. Your data is safe with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
