// import { StaticImport } from "next/dist/shared/lib/get-img-props";
// import Image from "next/image";
// import React from "react";

// interface Product {
//   image: string | StaticImport;
//   name: string | number | boolean | React.ReactElement | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined;
//   description: string | number | boolean | React.ReactElement | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
// }

// interface HomeColumnFiveProps {
//   products: Product[] | Product | undefined;
// }

// const HomeColumnFive: React.FC<HomeColumnFiveProps> = ({ products }) => {
//     console.log("This is home column five.");
//   const renderProducts = () => {
//     if (Array.isArray(products)) {
//       return products.map((product, index) => (
//         <div key={index}>
//           <div className="p-2">
//             <Image src={product.image} alt="alt" width={200} height={200} />
//           </div>
//           <div className="bg-gray-200 rounded-md">
//             <h3 className="image-title text-black p-2 text-center font-medium">
//               {product.name}
//             </h3>
//             <p className="image-title text-black px-3 pb-3 text-sm">
//               {product.description}
//             </p>
//           </div>
//         </div>
//       ));
//     } else if (products && products.image && products.name && products.description) {
//       return (
//         <div>
//           <div className="p-2">
//             <Image src={products.image} alt="alt" width={200} height={200} />
//           </div>
//           <div className="bg-gray-200 rounded-md">
//             <h3 className="image-title text-black p-2 text-center font-medium">
//               {products.name}
//             </h3>
//             <p className="image-title text-black px-3 pb-3 text-sm">
//               {products.description}
//             </p>
//           </div>
//         </div>
//       );
//     } else {
//       return <div>No products available.</div>;
//     }
//   };

//   return (
//     <div className="flex flex-row p-8 bg-gray-200">
//       <p>Our Products</p>
//       {renderProducts()}
//     </div>
//   );
// };

// export default HomeColumnFive;




// HomeColumnFive.jsx
// 'use client';

// import React from 'react';

// export default function HomeColumnFive({ products }) {
//   console.log("This is the HomeColumnFive");

//   return (
//     <div>
//       <p>Products:</p>
//       {products.map((product) => (
//         <div key={product.id}>
//           <p>{product.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// 'use client'

// import HomeColumnFive from './../../components/home/HomeColumnFive';
// import React, { useEffect, useState } from 'react';
// import {getProducts} from './../../realServerComponents/products/getProducts'


// const GetAllProducts = () => {

//   const [products, setProducts] = useState([]);

//   console.log("Getting all products");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getProducts();
//         console.log(data);
//         setProducts(data.products); // Assuming 'products' is the correct key in the response
//       } catch (error) {
//         console.log("Couldn't fetch products", error);
//       }
//     };

//     fetchProducts();
//   }, []);
    

// const products = [
//     {
//       image: "https://via.placeholder.com/300x150",
//       name: "Card 1",
//       price: "Rs. 450.00",
//       size: "150g",
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//     },
//     {
//       image: "https://via.placeholder.com/300x150",
//       name: "Card 2",
//       price: "Rs. 450.00",
//       size: "150g",
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//     },
//     {
//       image: "https://via.placeholder.com/300x150",
//       name: "Card 3",
//       price: "Rs. 450.00",
//       size: "150g",
//       description:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//     },
// ];
  
//     return (
//       <div>
//         {products.map((product, index) => (
//           <HomeColumnFive key={index} product={product} />
//         ))}
//       </div>
//     );
//   };
//   export default GetAllProducts;


// import { HomeColumnFive } from '@/app/components/home/HomeColumnFive';
// import React from 'react'

// export const GetAllProducts = () => {

//     const names = ['Alice', 'Bob', 'Charlie'];

//   return (
//     <div>
//     {names.map((name, index) => (
//       <HomeColumnFive key={index} name={name} />
//     ))}
//   </div>
//   )
// }
