//Dropdowlists must be appeared when mouse pointer is on it. Remake this code without changing available things.

'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu as MenuIcon } from 'react-feather';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };
  

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const openDropdown2 = () => {
    setIsDropdownOpen2(true);
  };

  const closeDropdown2 = () => {
    setIsDropdownOpen2(false);
  };
  

  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link legacyBehavior href="/">
          <a>
            <img
              src="/images/logo.png"  // Replace with the path to your actual logo image
              alt="Logo"
              className="h-10 w-auto"
              onClick={toggleDropdown}
            />
            
          </a>
        </Link>
        {/* End Logo */}
        <div className="block lg:hidden">
          <button
            onClick={toggleDropdown}
            className="text-green-700 focus:outline-none"
          >
            <MenuIcon size={24} className='hover:text-green-600' /> {/* Use the Menu icon */}
          </button>
          
          {isDropdownOpen && (
            <div className="mt-2">
              <div className="relative inline-block text-left">
                    <button onClick={toggleDropdown} className="text-green-700 focus:outline-none hover:text-green-600">
                    Diseases
                    </button>
                    {isDropdownOpen && (
                    <div className="absolute z-50 left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                        <div className="py-1">
                        <Link legacyBehavior href="/services/web-development">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Digestive system</a>
                        </Link>
                        <Link legacyBehavior href="/services/design">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Muscular skeletal system</a>
                        </Link>
                        <Link legacyBehavior href="/services/web-development">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Endrocrine</a>
                        </Link>
                        <Link legacyBehavior href="/services/web-development">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Central nerves system</a>
                        </Link>
                        <Link legacyBehavior href="/services/design">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Blood circulatory system</a>
                        </Link>
                        <Link legacyBehavior href="/services/web-development">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Urinary system</a>
                        </Link>
                        <Link legacyBehavior href="/services/design">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Hair & Skin</a>
                        </Link>
                        <Link legacyBehavior href="/services/web-development">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Reproductive system</a>
                        </Link>
                        <Link legacyBehavior href="/services/design">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Liver disease</a>
                        </Link>
                        </div>
                    </div>
                    )}
                </div>
              <Link legacyBehavior href="/services/web-development">
                <a className="block text-green-700 hover:text-green-600">Why Lakshmi Ayurveda</a>
              </Link>
              <div className="relative inline-block text-left">
                <button onClick={toggleDropdown2} className="text-green-700 focus:outline-none hover:text-green-600">
                Services
                </button>
                {isDropdownOpen2 && (
                <div className="absolute z-50 left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                    <div className="py-1">
                    <Link legacyBehavior href="/services/web-development">
                        <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Phone Consultation</a>
                    </Link>
                    <Link legacyBehavior href="/services/design">
                        <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Video Consultation</a>
                    </Link>
                    <Link legacyBehavior href="/services/web-development">
                        <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Clinic Consultation</a>
                    </Link>
                    <Link legacyBehavior href="/services/design">
                        <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Buy Products</a>
                    </Link>
                    <Link legacyBehavior href="/services/web-development">
                        <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Ayurveda for wellness</a>
                    </Link>
                    <Link legacyBehavior href="/services/design">
                        <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Video Consultation</a>
                    </Link>
                    </div>
                </div>
                )}
            </div>
              <Link legacyBehavior href="/contact">
                <a className="block text-green-700 hover:text-green-600">Contact Us</a>
              </Link>
            </div>
          )}
        </div>
        <div className='hidden lg:flex lg:items-center lg:w-auto'>
            <div className="space-x-10">
                {/* Services Dropdown */}
                <div className="relative inline-block text-left">
                    <button 
                        onClick={toggleDropdown}
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}
                        className="text-green-700 focus:outline-none hover:text-green-600">
                    Diseases
                    </button>
                    {isDropdownOpen && (
                    <div
                    
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}
                        className="absolute z-50 left-0 mt-2 w-48 bg-white rounded-md shadow-lg ">
                        <div className="py-1">
                        <Link legacyBehavior href="/services/web-development">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Digestive system</a>
                        </Link>
                        <Link legacyBehavior href="/services/design">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Muscular skeletal system</a>
                        </Link>
                        <Link legacyBehavior href="/services/web-development">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Endrocrine</a>
                        </Link>
                        <Link legacyBehavior href="/services/web-development">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Central nerves system</a>
                        </Link>
                        <Link legacyBehavior href="/services/design">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Blood circulatory system</a>
                        </Link>
                        <Link legacyBehavior href="/services/web-development">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Urinary system</a>
                        </Link>
                        <Link legacyBehavior href="/services/design">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Hair & Skin</a>
                        </Link>
                        <Link legacyBehavior href="/services/web-development">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Reproductive system</a>
                        </Link>
                        <Link legacyBehavior href="/services/design">
                            <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Liver disease</a>
                        </Link>
                        </div>
                    </div>
                    )}
                </div>
                {/* End Services Dropdown */}
            <Link legacyBehavior href="/about">
                <a className="text-green-700 hover:text-green-600">Why Lakshmi Ayurveda</a>
            </Link>
            {/* Services Dropdown */}
            <div className="relative inline-block text-left">
                <button onClick={toggleDropdown2} className="text-green-700 focus:outline-none hover:text-green-600">
                Services
                </button>
                {isDropdownOpen2 && (
                <div className="absolute z-50 left-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                    <div className="py-1">
                    <Link legacyBehavior href="/services/web-development">
                        <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Phone Consultation</a>
                    </Link>
                    <Link legacyBehavior href="/services/design">
                        <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Video Consultation</a>
                    </Link>
                    <Link legacyBehavior href="/services/web-development">
                        <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Clinic Consultation</a>
                    </Link>
                    <Link legacyBehavior href="/services/design">
                        <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Buy Products</a>
                    </Link>
                    <Link legacyBehavior href="/services/web-development">
                        <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Ayurveda for wellness</a>
                    </Link>
                    <Link legacyBehavior href="/services/design">
                        <a className="block px-4 py-2 text-green-700 hover:bg-gray-300">Video Consultation</a>
                    </Link>
                    </div>
                </div>
                )}
            </div>
            {/* End Services Dropdown */}
            <Link legacyBehavior href="/contact">
                <a className="text-green-700">Contact Us</a>
            </Link>
            {/* Sign In Button */}
            <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Sign In
            </button>
            {/* End Sign In Button */}
            </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;



