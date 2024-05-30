// import Image from "next/image";
// import React from "react";

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

// export default async function TopicsList() {
//   const { products } = await getProducts();

//   return (
//     <div className="flex flex-row p-8 bg-gray-200">
//       {products.map((t) => (
//         <div key={t._id}>
//           <div className="p-2 ">
//             <Image src={t.image} alt={t.name} width={200} height={200} />
//           </div>
//           <div className=" bg-gray-200 rounded-md ">
//             <h3 className="image-title text-black p-2 text-center font-medium">
//               {t.name}
//             </h3>
//             <p className="image-title text-black px-3 pb-3  text-sm">
//               {t.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import React from 'react'

export default function HomeColumnFive() {
  return (
    <div>
    HomeColumnFive
    </div>
  )
}
