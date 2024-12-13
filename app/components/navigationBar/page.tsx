"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { FaUser, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { UserContext } from "../../context/userContext";
import SignInForm from "../SignInForm";
import BookAppointmentModal from "../BookAppointmentModal";

const services = [
  {
    id: 1,
    name: "Phone Consultation",
    href: "/services/phoneConsultation",
  },
  {
    id: 2,
    name: "Video Consultation",
    href: "/services/videoConsultation",
  },
  {
    id: 3,
    name: "Clinic Consultation",
    href: "/services/clinicConsultation",
  },
  {
    id: 5,
    name: "Ayurweda for Wellness",
    href: "/services/ayurwedaForWellness",
  },
  {
    id: 6,
    name: "Find Prakurthi and Body Constitution",
    href: "/services/findPrakurthiAndBodyConsultation",
  },
  {
    id: 7,
    name: "Yoga Meditation",
    href: "/services/yogaMeditation",
  },
  {
    id: 8,
    name: "Ayurweda Beauticulture",
    href: "/services/ayurwedaBeauticulture",
  },
  {
    id: 9,
    name: "Acupuncture and Cupping",
    href: "/services/acupunctureAndCupping",
  },
];

const diseaseCategories = [
  {
    name: "Cardiovascular Symptoms",
    items: [
      { name: "Chest Pain", href: "./../../diseases/Chestpain" },
      { name: "Cholesterol", href: "./../../diseases/Cholesterol" },
      { name: "Hypertension", href: "./../../diseases/Hypertension" },
    ],
  },
  {
    name: "Child Health Problem",
    items: [
      { name: "Cerebral Palsy", href: "#" },
      { name: "Delay Speech", href: "#" },
      { name: "Frequent Infection", href: "#" },
      { name: "Growth and Development Delay", href: "#" },
      { name: "Hyperactivity", href: "#" },
      { name: "Insomnia", href: "#" },
      { name: "Learning Difficulties", href: "#" },
      { name: "Running Nose", href: "#" },
      { name: "Shortness of Breath", href: "#" },
      { name: "Skin Rash", href: "#" },
    ],
  },
  {
    name: "Chronic Diseases",
    items: [
      { name: "Cholesterol", href: "./../../diseases/Cholesterol" },
      { name: "Diabetic", href: "./../../diseases/Diabetic" },
      { name: "Obesity", href: "#" },
      { name: "Hypertension", href: "#" },
    ],
  },
  {
    name: "Gastrointestinal Problems",
    items: [
      { name: "Bowel Diseases", href: "#" },
      { name: "Bulging of Rectum", href: "#" },
      { name: "Constipation", href: "#" },
      { name: "Distension of Abdomen", href: "#" },
      { name: "Flatulance", href: "#" },
      { name: "Nausea", href: "#" },
      { name: "Stomac Pain", href: "#" },
    ],
  },
  {
    name: "Hair Care Diseases Related to Hair",
    items: [
      { name: "Dandruff", href: "#" },
      { name: "Hair Loss", href: "#" },
      { name: "Headache", href: "#" },
      { name: "Immature Gray Hair", href: "#" },
      { name: "Scalp Scaling", href: "#" },
    ],
  },
  {
    name: "Mental Health Concern",
    items: [
      { name: "Depression", href: "#" },
      { name: "Insomnia", href: "#" },
      { name: "Stress", href: "#" },
    ],
  },
  {
    name: "Pains",
    items: [
      { name: "Back Pain", href: "#" },
      { name: "Chest Pain", href: "#" },
      { name: "Elbow Pain", href: "#" },
      { name: "Heel Pain", href: "#" },
      { name: "Stomac Pain", href: "#" },
      { name: "Wrist Pain", href: "#" },
    ],
  },
  {
    name: "Respiratory Issues",
    items: [
      { name: "Cough", href: "#" },
      { name: "Running Nose", href: "#" },
      { name: "Shortness of Breath", href: "#" },
      { name: "Sore Throat", href: "#" },
    ],
  },
  // Add other categories similarly
];

export default function NavigationBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { user, logout } = useContext(UserContext);
  const [showBookAppointmentModal, setShowBookAppointmentModal] =
    useState(false);

  const openBookAppointmentModal = () => {
    setShowBookAppointmentModal(true);
  };

  const closeBookAppointmentModal = () => {
    setShowBookAppointmentModal(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  const [activeMainMenu, setActiveMainMenu] = useState<string | null>(null); // For main menu
  const [activeSubcategories, setActiveSubcategories] = useState<
    Record<string, boolean>
  >({}); // For subcategories

  const toggleMainMenu = (menuName: string) => {
    setActiveMainMenu((prev) => (prev === menuName ? null : menuName));
  };

  const toggleSubcategory = (categoryName: string) => {
    setActiveSubcategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const toggleSubmenu = (categoryName: string) => {
    setActiveSubmenu(activeSubmenu === categoryName ? null : categoryName);
  };

  return (
    <div className="sticky top-0 right-0 left-0 bg-teal-900 py-2 px-5 z-50">
      {/* Desktop and Mobile Navigation */}
      <nav className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="pl-3">
          <Link href="/">
            <Image
              src={require("@/public/images/LogoForNavigationBar.png")}
              alt="Logo"
              width={90}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Diseases Dropdown */}
          <div className="relative group">
            <div className="font-semibold font-sans text-base px-4 py-2 text-white">
              Diseases &raquo;
            </div>
            <div
              className="absolute hidden group-hover:block bg-white text-teal-700 rounded shadow-lg"
              style={{ width: "330px" }}
            >
              {diseaseCategories.map((category) => (
                <div key={category.name} className="relative group/category">
                  <div className="px-4 py-2 hover:bg-gray-100 group-hover/category:bg-gray-100">
                    {category.name} &raquo;
                  </div>
                  <div
                    className="absolute left-full top-0 hidden group-hover/category:block bg-white text-teal-700 rounded shadow-lg"
                    style={{ width: "200px" }}
                  >
                    {category.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                        role="menuitem"
                        id="submenu-item-1"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Desktop Menu Items */}
          <Link
            href="/whyLakshmiAyurweda"
            className="text-white font-semibold no-underline"
          >
            Why Lakshmi Ayurweda
          </Link>
          <div className="relative group">
            <div className="font-semibold font-sans text-base px-4 py-2 text-white">
              Our Services &raquo;
            </div>
            <div
              className="absolute hidden group-hover:block bg-white text-teal-700 rounded shadow-lg"
              style={{ width: "330px" }}
            >
              {services.map((service) => (
                <div key={service.id} className="relative group/service">
                  <div className="px-4 py-2 hover:bg-gray-100 group-hover/category:bg-gray-100">
                    <a
                      key={service.name}
                      href={service.href}
                      className="text-teal-700 no-underline  block text-base hover:bg-gray-200"
                      role="menuitem"
                      id="submenu-item-1"
                    >
                      {service.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a
            href="/contactUs"
            className="text-white font-semibold no-underline"
          >
            Contact Us
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-x-4">
          {/* Book Appointment Button */}
          <button
            type="button"
            onClick={openBookAppointmentModal}
            className="hidden md:block py-2 px-3 bg-slate-100 text-teal-700 font-bold rounded shadow hover:bg-slate-200"
          >
            Book Appointment
          </button>

          {/* User Authentication */}
          {!user ? (
            <button type="button" onClick={() => setIsOpen(true)}>
              <FaUser size={23} className="text-white" />
            </button>
          ) : (
            <button
              type="button"
              className="bg-white text-teal-700 px-3 py-2 font-bold rounded transition duration-200"
              onClick={() => (window.location.href = "/profile")}
            >
              {user.name}
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
            onClick={closeMobileMenu}
          >
            <div
              className="fixed top-0 right-0 w-64 h-full bg-white transform translate-x-0 transition-transform duration-300 ease-in-out"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <Link href="/" onClick={closeMobileMenu}>
                  <Image
                    src={require("@/public/images/LogoForNavigationBar.png")}
                    alt="Logo"
                    width={90}
                  />
                </Link>
                <button onClick={closeMobileMenu}>
                  <FaTimes size={24} className="text-teal-700" />
                </button>
              </div>

              <div className="overflow-y-auto h-[calc(100%-100px)] p-4">
                {/* Mobile Menu Items */}
                <div className="space-y-4">
                  <div
                    className="flex justify-between items-center text-teal-700 font-semibold"
                    onClick={() => toggleMainMenu("Diseases")}
                  >
                    Diseases {activeMainMenu === "Diseases" ? "▼" : "▶"}
                  </div>
                  {activeMainMenu === "Diseases" && (
                    <div className="pl-4 mt-2 space-y-2">
                      {diseaseCategories.map((category) => (
                        <div key={category.name}>
                          <div
                            className="text-teal-700 font-medium"
                            onClick={() => toggleSubcategory(category.name)}
                          >
                            {category.name}{" "}
                            {activeSubcategories[category.name] ? "▼" : "▶"}
                          </div>
                          {activeSubcategories[category.name] && (
                            <div className="pl-4 mt-2 space-y-2">
                              {category.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block text-teal-600 no-underline"
                                  onClick={closeMobileMenu}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  <Link
                    href="/whyLakshmiAyurweda"
                    className="block text-teal-700 font-semibold no-underline"
                    onClick={closeMobileMenu}
                  >
                    Why Lakshmi Ayurweda
                  </Link>

                  <div>
                    <div
                      className="flex justify-between items-center text-teal-700 font-semibold"
                      onClick={() => toggleSubmenu("Services")}
                    >
                      Our Services {activeSubmenu === "Services" ? "▼" : "▶"}
                    </div>
                    {activeSubmenu === "Services" && (
                      <div className="pl-4 mt-2 space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={service.href}
                            className="block text-teal-600 no-underline"
                            onClick={closeMobileMenu}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/contactUs"
                    className="block text-teal-700 font-semibold no-underline"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      openBookAppointmentModal();
                      closeMobileMenu();
                    }}
                    className="w-full py-2 px-3 bg-teal-700 text-white font-bold rounded shadow"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Sign In Modal */}
      {isOpen && <SignInForm onClose={() => setIsOpen(false)} />}

      {/* Book Appointment Modal */}
      {showBookAppointmentModal && (
        <BookAppointmentModal
          closeBookAppointmentModal={closeBookAppointmentModal}
        />
      )}
    </div>
  );
}
