// 'use client'

// import Image from 'next/image';
// import { getProducts } from '../../serverComponents/products/getProducts';
// // import { useEffect, useState } from 'react';

// const HomeColumnFive =  () => {

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const productsData = await getProducts();
//         setProducts(productsData);
//       } catch (err) {
//         console.error('Error fetching products:', err);
//         setProducts([]);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="bg-teal-900 p-8">
//       <div className="">
//         <p className="text-white text-center font-sans font-semibold text-xl">
//           Ayurvedic for Wellness
//         </p>
//       </div>
//       <div>
//         <div className='grid grid-cols-4 my-5'>
//           {
//             products.map((product:any, index) => (
//               <div key={index} className="p-2 hover:scale-105">
//                 <div className="bg-white rounded-xl shadow p-4 mx-2">
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     className="object-cover rounded"
//                     width={30}
//                     height={30}
//                   />
//                   <h3 className="mt-2 font-bold text-lg">{product.title}</h3>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeColumnFive;



import Image from "next/image";
import { getProducts } from "../../serverComponents/products/getProducts";

export const HomeColumnFive = async () => {
  const products = await getProducts();

  if (!products) {
    console.error("No products data fetched");
    return <div className="text-center text-red-500 p-4">Error loading products</div>;
  }

  return (
    <section className="bg-teal-900 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-center font-sans font-semibold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
          Ayurvedic for Wellness
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product:any, index:any) => (
            <div key={index} className="transform transition duration-300 hover:scale-105">
              <div className="bg-white rounded-xl shadow p-4">
                <div className="relative w-full h-40 mb-2">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <h3 className="font-bold text-lg text-center">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeColumnFive;