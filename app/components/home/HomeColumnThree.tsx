// "use client"

// import React from 'react';
// import Image from 'next/image';

// interface ImageData {
//     id: number;
//     imageUrl: string;
//     title: string;
// }

// const imageData : ImageData [] = [
//   {
//     id: 1,
//     imageUrl: require('/public/images/1_Facial.jpg'),
//     title: 'Ayurwedic Facial',
//   },
//   {
//     id: 2,
//     imageUrl: require('/public/images/2_Hair.jpg'),
//     title: 'Ayurwedic Hair Treatment',
//   },
//   {
//     id: 3,
//     imageUrl: require('/public/images/3_Body.jpg'),
//     title: 'Ayurwedic Body Massage',
//   },
//   {
//     id: 4,
//     imageUrl: require('/public/images/4_FootMassage.jpg'),
//     title: 'Ayurwedic Foot Massage',
//   },
// ];

// const ImageWithTitle = ( {id:any, imageUrl, title} ) => (
//   <div key={id} className='flex-col m-2 bg-green-200 rounded-md'>
//     <Image src={imageUrl} alt={title} width={300} height={300} />
//     <h3 className="image-title text-black p-2 text-center font-medium">{title}</h3>
//   </div>
// );

// const HomeColumnThree = () => (
   
//         <div className="flex flex-row p-8">
//         {imageData.map((imageData) => (
//             <ImageWithTitle key={imageData.id} {...imageData} />
//             ))}

//         </div>
        
        
   
// );

// export default HomeColumnThree;


"use client";

import React from 'react';
import Image from 'next/image';

interface ImageData {
    id: number;
    imageUrl: string;
    title: string;
}

const imageData: ImageData[] = [
  {
    id: 1,
    imageUrl: require('/public/images/1_Facial.jpg'),
    title: 'Ayurvedic Facial',
  },
  {
    id: 2,
    imageUrl: require('/public/images/2_Hair.jpg'),
    title: 'Ayurvedic Hair Treatment',
  },
  {
    id: 3,
    imageUrl: require('/public/images/3_Body.jpg'),
    title: 'Ayurvedic Body Massage',
  },
  {
    id: 4,
    imageUrl: require('/public/images/4_FootMassage.jpg'),
    title: 'Ayurvedic Foot Massage',
  },
];

interface ImageWithTitleProps {
  id: number;
  imageUrl: string;
  title: string;
}

const ImageWithTitle: React.FC<ImageWithTitleProps> = ({ imageUrl, title }) => (
  <div className='flex-col m-2 bg-green-200 rounded-md'>
    <Image src={imageUrl} alt={title} width={300} height={300} />
    <h3 className="image-title text-black p-2 text-center font-medium">{title}</h3>
  </div>
);

const HomeColumnThree: React.FC = () => (
  <div className="flex flex-row p-8">
    {imageData.map((data) => (
      <ImageWithTitle key={data.id} {...data} />
    ))}
  </div>
);

export default HomeColumnThree;
