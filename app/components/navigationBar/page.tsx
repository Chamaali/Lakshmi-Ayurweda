"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import SignInForm from "../SignInForm";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignUpForm from "../SignUpForm";
import { getUserRole } from "@/app/serverComponents/users/getUserRole";
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
//   {
//     id: 4,
//     name: "Buy Online Products",
//     href: "/services/buyOnlineProducts",
//   },
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



export default function Page() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    async function fetchUserRole() {
      setIsLoading(true);
      if (userEmail) {
        try {
          const role = await getUserRole(userEmail);
          setUserRole(role);
        } catch (error) {
          console.error("Failed to fetch user role:", error);
        }
      }
      setIsLoading(false);
    }

    fetchUserRole();
  }, [userEmail]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLogin = (email: any) => {
    setUserEmail(email);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSubMenuTwoOpen, setIsSubMenuTwoOpen] = useState(false);
  const [isSubMenuThreeOpen, setIsSubMenuThreeOpen] = useState(false);
  const [isSubMenuFourOpen, setIsSubMenuFourOpen] = useState(false);
  const [isSubMenuFiveOpen, setIsSubMenuFiveOpen] = useState(false);
  const [isSubMenuSixOpen, setIsSubMenuSixOpen] = useState(false);
  const [isSubMenuSevenOpen, setIsSubMenuSevenOpen] = useState(false);
  const [isSubMenuEightOpen, setIsSubMenuEightOpen] = useState(false);
  const [showBookAppointmentModal, setShowBookAppointmentModal] = useState(false);

  const openBookAppointmentModal = () => {
    setShowBookAppointmentModal(true);
  };

  const closeBookAppointmentModal = () => {
    setShowBookAppointmentModal(false);
  };
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsSubmenuOpen(false);
    setIsSubMenuTwoOpen(false);
    setIsSubMenuThreeOpen(false);
    setIsSubMenuFourOpen(false);
    setIsSubMenuFiveOpen(false);
    setIsSubMenuSixOpen(false);
    setIsSubMenuSevenOpen(false);
    setIsSubMenuEightOpen(false);
  };

  const toggleSubmenu = (e: any) => {
    e.stopPropagation();
    setIsSubmenuOpen(!isSubmenuOpen);
    setIsSubMenuTwoOpen(false);
    setIsSubMenuThreeOpen(false);
    setIsSubMenuFourOpen(false);
    setIsSubMenuFiveOpen(false);
    setIsSubMenuSixOpen(false);
    setIsSubMenuSevenOpen(false);
    setIsSubMenuEightOpen(false);
  };

  const toggleSubMenuTwo = (e: any) => {
    e.stopPropagation();
    setIsSubmenuOpen(false);
    setIsSubMenuTwoOpen(!isSubMenuTwoOpen);
    setIsSubMenuThreeOpen(false);
    setIsSubMenuFourOpen(false);
    setIsSubMenuFiveOpen(false);
    setIsSubMenuSixOpen(false);
    setIsSubMenuSevenOpen(false);
    setIsSubMenuEightOpen(false);
  };

  const toggleSubMenuThree = (e: any) => {
    e.stopPropagation();
    setIsSubmenuOpen(false);
    setIsSubMenuTwoOpen(false);
    setIsSubMenuThreeOpen(!isSubMenuThreeOpen);
    setIsSubMenuFourOpen(false);
    setIsSubMenuFiveOpen(false);
    setIsSubMenuSixOpen(false);
    setIsSubMenuSevenOpen(false);
    setIsSubMenuEightOpen(false);
  };

  const toggleSubMenuFour = (e: any) => {
    e.stopPropagation();
    setIsSubmenuOpen(false);
    setIsSubMenuTwoOpen(false);
    setIsSubMenuThreeOpen(false);
    setIsSubMenuFourOpen(!isSubMenuFourOpen);
    setIsSubMenuFiveOpen(false);
    setIsSubMenuSixOpen(false);
    setIsSubMenuSevenOpen(false);
    setIsSubMenuEightOpen(false);
  };

  const toggleSubMenuFive = (e: any) => {
    e.stopPropagation();
    setIsSubmenuOpen(false);
    setIsSubMenuTwoOpen(false);
    setIsSubMenuThreeOpen(false);
    setIsSubMenuFourOpen(false);
    setIsSubMenuFiveOpen(!isSubMenuFiveOpen);
    setIsSubMenuSixOpen(false);
    setIsSubMenuSevenOpen(false);
    setIsSubMenuEightOpen(false);
  };

  const toggleSubMenuSix = (e: any) => {
    e.stopPropagation();
    setIsSubmenuOpen(false);
    setIsSubMenuTwoOpen(false);
    setIsSubMenuThreeOpen(false);
    setIsSubMenuFourOpen(false);
    setIsSubMenuFiveOpen(false);
    setIsSubMenuSixOpen(!isSubMenuSixOpen);
    setIsSubMenuSevenOpen(false);
    setIsSubMenuEightOpen(false);
  };

  const toggleSubMenuSeven = (e: any) => {
    e.stopPropagation();
    setIsSubmenuOpen(false);
    setIsSubMenuTwoOpen(false);
    setIsSubMenuThreeOpen(false);
    setIsSubMenuFourOpen(false);
    setIsSubMenuFiveOpen(false);
    setIsSubMenuSixOpen(false);
    setIsSubMenuSevenOpen(!isSubMenuSevenOpen);
    setIsSubMenuEightOpen(false);
  };

  const toggleSubMenuEight = (e: any) => {
    e.stopPropagation();
    setIsSubmenuOpen(false);
    setIsSubMenuTwoOpen(false);
    setIsSubMenuThreeOpen(false);
    setIsSubMenuFourOpen(false);
    setIsSubMenuFiveOpen(false);
    setIsSubMenuSixOpen(false);
    setIsSubMenuSevenOpen(false);
    setIsSubMenuEightOpen(!isSubMenuEightOpen);
  };

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
      setIsSubmenuOpen(false);
      setIsSubMenuTwoOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="text-white sticky top-0 right-0 left-0 bg-teal-900  py-2 px-5 z-10">
      <nav className="flex items-center justify-between py-4 ">
        <div className="pl-3">
          <Link href="/">
            <Image
              src={require("@/public/images/LogoForNavigationBar.png")}
              alt="Logo"
              width={90}
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex justify-center">
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <div>
                <button
                  type="button"
                  className=""
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={toggleDropdown}
                >
                  Diseases &raquo;
                </button>
              </div>

              {isDropdownOpen && (
                <div
                  className="origin-top-left absolute left-0 mt-2 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    <div className="relative">
                      <a
                        href="#"
                        className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                        role="menuitem"
                        id="menu-item-2"
                        onClick={toggleSubmenu}
                      >
                        Cardiovascular Symptoms &raquo;
                      </a>
                      {isSubmenuOpen && (
                        <div className="origin-top-left absolute left-full top-0 mt-0 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1" role="none">
                            <a
                              href="./../../diseases/Chestpain"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-1"
                            >
                              Chest Pain
                            </a>
                            <a
                              href="./../../diseases/Cholesterol"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-2"
                            >
                              Cholesterol
                            </a>

                            <a
                              href="./../../diseases/Hypertension"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-4"
                            >
                              Hypertension
                            </a>
                            {/* <a
                              href="./../../diseases/Palpitation"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Palpitation
                            </a>
                            <a
                              href="./../../diseases/ShortnessOfBreath"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Shortness of Breath
                            </a>
                            <a
                              href="Swelling"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Swelling in leg or Anckles
                            </a> */}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <a
                        href="#"
                        className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                        role="menuitem"
                        id="menu-item-2"
                        onClick={toggleSubMenuTwo}
                      >
                        Child Health Problem &raquo;
                      </a>
                      {isSubMenuTwoOpen && (
                        <div className="origin-top-left absolute left-full top-0 mt-0 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1" role="none">
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-1"
                            >
                              Cerebral Palsy
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-2"
                            >
                              Delay Speech
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-4"
                            >
                              Frequent Infection
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-4"
                            >
                              Growth and Development Delay
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Hyperactivity
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Insomnia
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Learning Difficulties
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Running Nose
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Shortness of Breath
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Skin Rash
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <a
                        href="#"
                        className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                        role="menuitem"
                        id="menu-item-2"
                        onClick={toggleSubMenuThree}
                      >
                        Chronic Diseases &raquo;
                      </a>
                      {isSubMenuThreeOpen && (
                        <div className="origin-top-left absolute left-full top-0 mt-0 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1" role="none">
                            <a
                              href="./../../diseases/Cholesterol"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-1"
                            >
                              Cholesterol
                            </a>
                            <a
                              href="./../../diseases/Diabetic"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-2"
                            >
                              Diabetic
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-4"
                            >
                              Obesity
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-4"
                            >
                              Hypertension
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <a
                        href="#"
                        className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                        role="menuitem"
                        id="menu-item-2"
                        onClick={toggleSubMenuFour}
                      >
                        Gastrointestinal Problems &raquo;
                      </a>
                      {isSubMenuFourOpen && (
                        <div className="origin-top-left absolute left-full top-0 mt-0 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1" role="none">
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-1"
                            >
                              Bowel Diseases
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-2"
                            >
                              Bulging of Rectum
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-4"
                            >
                              Constipation
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-4"
                            >
                              Distension of Abdomen
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Flatulance
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Nausea
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Stomac Pain
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <a
                        href="#"
                        className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                        role="menuitem"
                        id="menu-item-2"
                        onClick={toggleSubMenuFive}
                      >
                        Hair Care Diseases Related to Hair &raquo;
                      </a>
                      {isSubMenuFiveOpen && (
                        <div className="origin-top-left absolute left-full top-0 mt-0 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1" role="none">
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-1"
                            >
                              Dandruff
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-2"
                            >
                              Hair Loss
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-4"
                            >
                              Headache
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-4"
                            >
                              Immature Gray Hair
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Scalp Scaling
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <a
                        href="#"
                        className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                        role="menuitem"
                        id="menu-item-2"
                        onClick={toggleSubMenuSix}
                      >
                        Mental Health Concern &raquo;
                      </a>
                      {isSubMenuSixOpen && (
                        <div className="origin-top-left absolute left-full top-0 mt-0 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1" role="none">
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-1"
                            >
                              Depression
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-2"
                            >
                              Insomnia
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-4"
                            >
                              Stress
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <a
                        href="#"
                        className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                        role="menuitem"
                        id="menu-item-2"
                        onClick={toggleSubMenuSeven}
                      >
                        Pains &raquo;
                      </a>
                      {isSubMenuSevenOpen && (
                        <div className="origin-top-left absolute left-full top-0 mt-0 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1" role="none">
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-1"
                            >
                              Back Pain
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-2"
                            >
                              Chest Pain
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-4"
                            >
                              Elbow Pain
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Heel Pain
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Stomac Pain
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Wrist Pain
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <a
                        href="#"
                        className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                        role="menuitem"
                        id="menu-item-2"
                        onClick={toggleSubMenuEight}
                      >
                        Respiratory Issues &raquo;
                      </a>
                      {isSubMenuEightOpen && (
                        <div className="origin-top-left absolute left-full top-0 mt-0 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1" role="none">
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-1"
                            >
                              Cough
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-2"
                            >
                              Running Nose
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-4"
                            >
                              Shortness of Breath
                            </a>
                            <a
                              href="#"
                              className="text-teal-700 no-underline  block px-4 py-2 text-base hover:bg-gray-200"
                              role="menuitem"
                              id="submenu-item-5"
                            >
                              Sore Throat
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <Link legacyBehavior href="/whyLakshmiAyurweda">
            <a
              className={`${
                pathname === "/whyLakshmiAyurweda"
                  ? "text-slate-300"
                  : "text-white"
              } font-sans  font-semibold no-underline`}
            >
              Why Lakshmi Ayurweda
            </a>
          </Link>
          <div className="relative group">
            <div className="font-semibold font-sans text-base px-4 py-2">
              Our Services &raquo;
            </div>
            <ul className="absolute hidden group-hover:block  bg-white bg-opacity-30 w-max text-teal-700 rounded shadow-lg ">
              {services.map((service) => (
                <li key={service.id} className="py-2">
                  <a
                    className="text-teal-700 no-underline px-2  my-1 hover:bg-gray-200"
                    href={service.href}
                  >
                    {service.name}
                  </a>
                  {/* <hr /> */}
                </li>
              ))}
            </ul>
          </div>
          <Link legacyBehavior href="/contactUs">
            <a
              className={`${
                pathname === "/contactUs" ? "text-slate-300" : "text-white"
              } font-sans font-semibold no-underline`}
            >
              Contact Us
            </a>
          </Link>
        </div>
        <div className="flex items-center  gap-x-9">
        <button
        type="button"
        onClick={openBookAppointmentModal}
        className="py-2 px-3 bg-slate-100 text-teal-700 font-bold rounded shadow hover:bg-slate-200"
      >
        Book Appointment
      </button>

      {/* Modal for the popup form */}
      {showBookAppointmentModal && (
        <BookAppointmentModal closeBookAppointmentModal={closeBookAppointmentModal} />
      )}

          {!userRole && (
            <button type="button" onClick={togglePopup}>
              <FaUser size={23} />
            </button>
          )}

          {userRole === "patient" && (
            <Link
              href="/profile"
              className="bg-white text-black px-3 py-2 font-bold rounded"
            >
              Hi, Patient
            </Link>
          )}

          {userRole === "admin" && (
            <Link
              href="/admin"
              className="bg-white text-black px-3 py-2 font-bold rounded"
            >
              Dashboard
            </Link>
          )}

          {isOpen && (
            <SignInForm
              onLogin={(email: any) => {
                handleLogin(email);
                setIsOpen(false);
              }}
              onClose={() => setIsOpen(false)}
            />
          )}

          <button type="button" className="md:hidden text-white" onClick={toggleMenu}>
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
      </nav>

    </div>
  );
}
