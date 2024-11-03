"use client";

import Link from "next/link";
import { Container } from "react-bootstrap";
// import { useRouter } from "next/navigation"; // Correct import for useRouter

const DiseaseNavigationBar = () => {
//   const router = useRouter();
//   const { pathname } = router;

  const items = [
    {
        title: "Home",
        href: "./../../../admin/diseases",
      },
    {
      title: "Chest Pain",
      href: "./../../../admin/diseases/chestpain",
    },
    {
      title: "Cholestrol",
      href: "./../../../admin/diseases/cholesterol",
    },
    {
      title: "Diabetic",
      href: "./../../../admin/diseases/diabetic",
    },
    {
        title: "Hypertension",
        href: "./../../../admin/diseases/hypertension",
      },
    //   {
    //     title: "Palpitation",
    //     href: "./../../../admin/diseases/palpitation",
    //   },
    //   {
    //     title: "Shortness of Breath",
    //     href: "./../../../admin/diseases/shortnessofbreath",
    //   },
    //   {
    //       title: "Swelling in leg or anckles",
    //       href: "./../../../admin/diseases/swelling",
    //     },
    //     {
    //       title: "Cerebral plasy",
    //       href: "./../../../admin/diseases/cerebralplasy",
    //     },

  ];

  return (
    <div className="py-3">
     
        <div className="flex flex-col text-base font-bold text-teal-700 space-y-2 h-96 overflow-y-auto">
          {items.map(({ title, href }) => (
            <Link legacyBehavior key={title} href={href} passHref>
              <a
                className="no-underline text-teal-800 py-2 px-3 rounded active:bg-teal-800 active:text-white hover:bg-teal-700 hover:text-white"
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
    
    </div>
  );
  
  
}

export default DiseaseNavigationBar;
