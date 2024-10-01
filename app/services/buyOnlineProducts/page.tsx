// "use client";

// import Image from "next/image";
// import React, { useState, useEffect } from "react";

// const getProducts = async () => {
//   try {
//     const res = await fetch(`${process.env.BASE_URL}/api/products`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch products");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading products: ", error);
//   }
// };

// const AddToCartButton = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data = await getProducts();
//       setProducts(data.products);

//       // Calculate total price when products change
//       const totalPrice = data.products.reduce((acc, curr) => acc + curr.price, 0);
//       setTotalPrice(totalPrice);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <button
//         onClick={togglePopup}
//         type="button"
//         className="rounded-xl py-2 px-3 justify-self-end text-white font-bold bg-teal-700 hover:bg-teal-800"
//       >
//         Add to Cart
//       </button>
//       {isOpen && (
//         <div className="fixed top-0 right-0 w-1/3 h-screen flex  flex-col justify-start items-start bg-gray-500 bg-opacity-100 bg-white p-4  shadow-lg ">
//           <div className="basis-1/16 pt-4">
//             <p className="font-bold text-md">Cart</p>
//             <hr className="w-max" />
//           </div>
//           {products.map((product) => (
//           <div
//             className="p-2  place-content-around  flex flex-row"
//             key={product.id}
//           >
//             <div className="p-2 w-1/4 h-1/4">
//               <Image
//                 src={product.image}
//                 alt={product.name}
                
//               />
//             </div>
//             <div className="">
//               <p className="image-title text-black p-2 text-center font-medium">
//                 {product.name}
//               </p>
//               <p className="image-title text-black px-3 pb-3  text-sm">
//                 {product.description}
//               </p>
//               <div className="flex flex-row place-content-around">
                
//                 <p>{product.size}</p>
//                 <p className="text-right">Rs. {product.price}</p>
//               </div>
              
//             </div>
//           </div>
//         ))}
//           <div className="">
//           <hr className="w-full"/>

//             <div className="basis-2/16 pt-4 grid grid-cols-2 gap-4 place-content-around">
//                 <p>Total</p>
//                 <p>{totalPrice}</p>
//             </div>
//             <div className="basis-2/16 pt-4 grid grid-cols-2 gap-4 place-content-around">
//               <button
//                 onClick={togglePopup}
//                 className="bg-teal-700 text-white px-4 py-2 rounded-md"
//               >
//                 Goto Cart
//               </button>
//               <button
//                 onClick={togglePopup}
//                 className="bg-teal-700 text-white px-4 py-2 rounded-md"
//               >
//                 Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data = await getProducts();
//       setProducts(data.products);
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="mx-8 mb-4">
//       <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1  place-content-around gap-5">
//         {products.map((product) => (
//           <div
//             className="p-2 bg-white place-content-around rounded-lg shadow-lg"
//             key={product.id}
//           >
//             <div className="p-2">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 height={100}
//                 width={100}
//               />
//             </div>
//             <div className="">
//               <p className="image-title text-black p-2 text-center font-medium">
//                 {product.name}
//               </p>
//               <p className="image-title text-black px-3 pb-3  text-sm">
//                 {product.description}
//               </p>
//               <div className="flex flex-row place-content-around">
//                 <p>{product.size}</p>
//                 <p>Rs. {product.price}</p>
//               </div>
//               <AddToCartButton />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;


import React from 'react'

export default function page() {
  return (
    <div>
      buy products
    </div>
  )
}
