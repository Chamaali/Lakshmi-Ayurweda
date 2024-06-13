"use client";

import React, { useRef } from 'react';
import Slider from 'react-slick';
import diseases from "@/app/constants/diseases";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const HomeColumnTwo = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

 

  return (
    <div>
      <div className="bg-green-900 p-8">
        <div className="">
          <p className="text-white text-center font-sans font-semibold text-xl">
            Ayurvedic Diseases & Conditions We Treat
          </p>
        </div>

        <div className='m-5 ' >
          <Slider {...settings} ref={sliderRef}>
            {diseases.map((disease, index) => (
              <div key={index} className="p-2">
                <div className="bg-white  rounded-xl shadow p-4 mx-2">
                  <Image src={disease.image} alt={disease.title} className="w-full h-40 object-cover rounded" />
                  <h3 className="mt-2 font-bold text-lg">{disease.title}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeColumnTwo;
