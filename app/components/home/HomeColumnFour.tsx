import React from 'react'
import wellnesses from "@/app/constants/wellnesses";
import Image from 'next/image';

export default function HomeColumnFour() {
  return (
    <div className="bg-green-900 p-8">
        <div className="">
          <p className="text-white text-center font-sans font-semibold text-xl">
            Ayurvedic for Wellness
          </p>
        </div>
      <div>
          <div className='grid grid-cols-4 my-5'>
            {wellnesses.map((wellness, index) => (
              <div key={index} className="p-2 hover:scale-105">
                <div className="bg-white  rounded-xl shadow p-4 mx-2">
                  <Image src={wellness.image} alt={wellness.title} className="w-full h-40 object-cover rounded" />
                  <h3 className="mt-2 font-bold text-lg">{wellness.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
