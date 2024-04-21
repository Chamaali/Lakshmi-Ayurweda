"use client"

import React from 'react';
import Image from 'next/image';

const imageData = [
  {
    id: 1,
    imageUrl: require('/public/images/Shilajeet.png'),
    title: 'Image 1 Title',
    discription:"-Sleep Well"

  },
  {
    id: 2,
    imageUrl: require('/public/images/Sleepwell.png'),
    title: 'Image 2 Title',
    discription:"-Sugar Free"
  },
  {
    id: 3,
    imageUrl: require('/public/images/jivabrandstore-img01.png'),
    title: 'Image 3 Title',
    discription:"-Honey"
  },
  {
    id: 4,
    imageUrl: require('/public/images/Ashwagandha.png'),
    title: 'Image 3 Title',
    discription:"-Sleep Well"
  },
];

const ImageWithTitle = ({ id, imageUrl, title, discription }) => (
  <div key={id} className='flex-col m-2 bg-white shadow-2xl rounded-md p-4'>
    <div className='p-2 '><Image src={imageUrl} alt={title} width={200} height={200} /></div>
    <div className=' bg-gray-200 rounded-md '>
        <h3 className="image-title text-black p-2 text-center font-medium">{title}</h3>
        <p className="image-title text-black px-3 pb-3  text-sm">{discription}</p>
    </div>
  </div>
);

const HomeColumnFive = () => (
    <div className='flex flex-row p-8 bg-gray-200'>
        
        {imageData.map((imageData) => (
            <ImageWithTitle key={imageData.id} {...imageData} />
            ))}
        
    </div>
);

export default HomeColumnFive;
