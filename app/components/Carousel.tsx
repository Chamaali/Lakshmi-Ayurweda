// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';

// const Carousel = ({ images }) => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % images.length);
//   };

//   return (
//     <div className="relative h-screen">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 ${
//             index === currentImage ? 'opacity-100' : 'opacity-0'
//           } transition-opacity duration-1000 ease-in-out`}
//         >
//           <Image
//             key={index} // Move the key prop here
//             src={image}
//             alt={`carousel-image-${index}`}
//             layout="responsive"
//             objectFit="cover"
//             width={500}
//             height={500} // Adjust the height according to your design
//           />
//         </div>
//       ))}
//       <button
//         onClick={nextImage}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl focus:outline-none"
//       >
//         &rarr;
//       </button>
//     </div>
//   );
// };

// export default Carousel;
