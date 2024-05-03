"use client";

import React from "react";
import Image from "next/image";
import Dig from "/public/images/7.png";

const HomeColumnTwo = () => {
  return (
    <div>
      <div className="bg-green-100 p-8">
        <div className="pb-5">
          <p className="text-green-700 text-center font-serif text-xl">
            Ayurvedic Diseases & Conditions We Treat
          </p>
        </div>

        <div className="flex flex-row  my-3">
          <div className="flex-column bg-white  rounded-xl mx-3">
            <div className="p-3">
              <Image className="" alt="" src={Dig} width={200} />
              <p className="text-green-700 text-xs font-serif text-center pb-2 pt-4 text-base">
                Book an Appointment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeColumnTwo;
