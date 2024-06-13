"use client";

import Image from "next/image";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import SignInForm from "../SignInForm";
import Link from "next/link";
import { usePathname } from "next/navigation";

const diseases = [
  {
    id: 1,
    name: "Back Pain",
    href: "/diseases/BackPain",
  },
  {
    id: 2,
    name: "Bulging of Rectum",
    href: "/diseases/BulgingOfRectum",
  },
  {
    id: 3,
    name: "Endocrine",
    href: "/diseases/endocrine",
  },
  {
    id: 4,
    name: "Central nerves system",
    href: "/diseases/centralNervesSystem",
  },
  {
    id: 5,
    name: "Blood circulatory system",
    href: "/diseases/bloodCirculatorySystem",
  },
  {
    id: 6,
    name: "Urinary system",
    href: "/diseases/urinarySystem",
  },
  {
    id: 7,
    name: "Hair & skin",
    href: "/diseases/hairSkin",
  },
  {
    id: 8,
    name: "Reproductive system",
    href: "/diseases/reproductiveSystem",
  },
  {
    id: 9,
    name: "Liver disease",
    href: "/diseases/liverDisease",
  },
];

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
    id: 4,
    name: "Buy Online Products",
    href: "/services/buyOnlineProducts",
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

export default function Page() {

    const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  

 
  return (
    <div className="text-white sticky top-0 right-0 left-0 bg-green-900  py-2 px-5 z-10">
      <nav className="flex items-center justify-between py-4 ">
        <div className="pl-3">
          <a href="/">
            <Image
              src={require("@/public/images/LogoForNavigationBar.png")}
              alt="Logo"
              width={90}
            />
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
        <div className="relative group">
  <button className="font-semibold font-sans bold text-base px-4 py-2">Diseases</button>
  <ul className="absolute hidden group-hover:block p-3 bg-white bg-opacity-30 text-green-700 rounded shadow-lg w-60">
    {diseases.map((diseases) => (
      <li key={diseases.id}>
        <a className="text-green-700 no-underline" href={diseases.href}>
          {diseases.name}
        </a>
        <hr />
      </li>
    ))}
  </ul>
</div>
          <Link legacyBehavior href="/whyLakshmiAyurweda">
            <a className={`${pathname === '/whyLakshmiAyurweda' ? "text-slate-300" : "text-white"} font-sans  font-semibold no-underline`}>
              Why Lakshmi Ayurweda
            </a>
          </Link>
          <div className="relative group">
  <button className="font-semibold font-sans text-base px-4 py-2">Our Services</button>
  <ul className="absolute hidden group-hover:block p-3 bg-white bg-opacity-30 text-green-700 rounded shadow-lg w-60">
    {services.map((service) => (
      <li key={service.id}>
        <a className="text-green-700 no-underline" href={service.href}>
          {service.name}
        </a>
        <hr />
      </li>
    ))}
  </ul>
</div>
          <Link legacyBehavior href="/contactUs">
            <a className={`${pathname === '/contactUs' ? "text-slate-300" : "text-white"} font-sans font-semibold no-underline`}>
              Contact Us
            </a>
          </Link>
        </div>
        <div className="flex items-center  gap-x-9">
        <Link href="/bookAppointment" className="py-2 px-3  bg-slate-100 text-green-700 font-bold rounded shadow hover:bg-slate-200">
        <button>
          Book Appointment
        </button>
     
    </Link>
          <button type="button" onClick={togglePopup}>
            <FaUser size={23} />
          </button>
          {isOpen && <SignInForm />}
          <button className="md:hidden text-white" onClick={toggleMenu}>
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
      {menuOpen && (
        <div className="md:hidden bg-green-900 text-white space-y-4 py-4">
          <div className="relative group">
            <button className="block w-full text-left px-4 py-2">
              Diseases
            </button>
            <div className="absolute bg-white text-green-700 rounded shadow-lg">
              {diseases.map((disease) => (
                <Link legacyBehavior key={disease.id} href={disease.href}>
                  <a className={`${pathname === '{disease.href}' ? "text-blue-500" : "text-black"} font-bold no-underline`}>
                    {disease.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <Link legacyBehavior href="/whyLakshmiAyurweda">
            <a className={`${pathname === '/whyLakshmiAyurweda' ? "text-blue-500" : "text-black"} font-bold no-underline`}>Why Lakshmi Ayurweda</a>
          </Link>
          <div className="relative group">
            <button className="block w-full text-left px-4 py-2">
              Our Services
            </button>
            <div className="absolute bg-white text-green-700 rounded shadow-lg">
              {services.map((service) => (
                <Link legacyBehavior key={service.id} href={service.href}>
                  <a className={`${pathname === '{service.href}' ? "text-blue-500" : "text-black"} font-bold no-underline`}>
                    {service.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <Link legacyBehavior href="/contactUs">
            <a className={`${pathname === '/contactUs' ? "text-blue-500" : "text-black"} font-bold no-underline`}>Contact Us</a>
          </Link>
        </div>
      )}
    </div>
  );
}
