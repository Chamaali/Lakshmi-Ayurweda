import React from 'react'
import Image from 'next/image'

const ImageContainer = ({ topic, first_image,second_image }: { topic: string; first_image: string;second_image:string}) => {
  return (
    <>
        <h2 className="font-bold text-2xl sm:text-2xl"> {topic}</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-4 mx-4">
            <div className="relative w-full sm:w-1/2 aspect-video overflow-hidden rounded-lg shadow-sm transition-transform duration-300 ease-in-out my-4 hover:scale-105">
                        <Image
                            alt={topic}
                            src={first_image}
                            className="transition-opacity duration-300 ease-in-out hover:opacity-90"
                            width={500}
                            height={500}
                        />
            </div>
            <div className="relative w-full sm:w-1/2 aspect-video overflow-hidden rounded-lg shadow-sm transition-transform duration-300 ease-in-out my-4 hover:scale-105">
                        <Image
                            alt={topic}
                            src={second_image}
                            className="transition-opacity duration-300 ease-in-out hover:opacity-90"
                            width={500}
                            height={500}
                        />
            </div>
        </div>
    </>
  )
}

export default ImageContainer