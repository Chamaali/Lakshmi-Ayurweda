import React from 'react'
import wellnesses from "@/app/constants/wellnesses";
import Image from 'next/image';

export default function HomeColumnFour() {
  return (
    <section className="bg-green-900 p-4 sm:p-6 md:p-8">
        <div className="">
        <h2 className="text-white text-center font-sans font-semibold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
          Ayurvedic for Wellness
        </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {wellnesses.map((wel:any, index:any) => (
            <div key={index} className="transform transition duration-300 hover:scale-105">
              <div className="bg-white rounded-xl shadow p-4">
                <div className="relative w-full h-40 mb-2">
                  <Image
                    src={wel.image}
                    alt={wel.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <h3 className="font-bold text-lg text-center">{wel.title}</h3>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}
