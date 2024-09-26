'use client';

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
        breakpoint: 768,
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
      <div className="bg-green-900 mb-12 p-4 sm:p-6 md:p-8">
        <div className="text-center">
          <p className="text-white font-sans font-bold text-xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 antialiased">
            Ayurvedic Diseases & Conditions We Treat
          </p>
        </div>

        <div className='slider-container my-8 mx-6'>
          <Slider {...settings} ref={sliderRef}>
            {diseases.map((disease, index) => (
              <div key={index} className="transform transition duration-300 hover:scale-105 px-2">
                <div className="bg-white rounded-xl shadow p-4">
                  <div className="relative w-full h-40 mb-2">
                    <Image
                      src={disease.image}
                      alt={disease.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-center">{disease.title}</h3>
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