"use client"

import React from 'react'
import Link from 'next/link';
import { 
  FaFacebook, 
  FaLinkedin, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt 
} from "react-icons/fa";
import services from '../../../constants/footer';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-teal-50 to-teal-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <h2 className="text-2xl font-bold text-teal-700">Lakshmi Ayurweda</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Holistic healing through traditional Ayurvedic practices, bringing wellness to your life.
            </p>
          </div>

          {/* Services Section - Expanded */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-xl font-semibold text-teal-700 mb-4">Our Services</h3>
            <div className="grid grid-cols-3 gap-3">
              {services.services.map((service) => (
                <Link 
                  key={service.id} 
                  href={service.href} 
                  className="text-teal-600 hover:text-teal-800 no-underline transition-colors duration-300 ease-in-out"
                  >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-teal-600" />
                <span className="text-gray-700">+91 011-22222225</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-teal-600" />
                <span className="text-gray-700">contact@lakshmiayurweda.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-teal-600" />
                <span className="text-gray-700">New Delhi, India</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              {[
                { Icon: FaFacebook, href: "https://facebook.com/lakshmiayurweda" },
                { Icon: FaLinkedin, href: "https://linkedin.com/company/lakshmiayurweda" },
                { Icon: FaYoutube, href: "https://youtube.com/lakshmiayurweda" }
              ].map(({ Icon, href }, index) => (
                <Link 
                  key={index} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${Icon.name}`}
                  className="text-teal-600 hover:text-teal-800 transition-colors duration-300"
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-teal-200 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Lakshmi Ayurweda. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;