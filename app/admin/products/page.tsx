

import React from "react";
import { Container } from "react-bootstrap";
import RemoveProductButton from "./../components/RemoveProductButton";
import {  HiPencilAlt } from "react-icons/hi";
import { getProducts } from "@/app/serverComponents/products/getProducts";
import Link from "next/link";




const page = async () => {
    const products = await getProducts();

    if (!products) {
      console.error("No products data fetched");
      return <div>Error loading products</div>;
    }
  

  return (
    <Container className="py-8">
      <div className="flex flex-row pb-4 ">
        <div className="grid  basis-3/4">
          <h4 className="justify-self-center font-bold">Product Details</h4>
        </div>
        <div className="grid  basis-1/4">
          <a
            href="./../../admin/addProduct"
            className="justify-self-end py-2 px-3 font-medium bg-green-800 no-underline rounded shadow-sm text-white hover:bg-green-900"
          >
            Add New Product
          </a>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white border-b">
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Photo Link
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Size
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {products.map((product: any) => (
              <tr
              key={product._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{product._id}</td>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.description}</td>
                <td className="px-6 py-4">{product.image}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.size}</td>

                 <td className="flex items-center px-6 py-4">
                 <Link
                    href={`./../../admin/editProduct/${product._id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3"
                  >
                    <HiPencilAlt size={24} color="gray"/>
                  </Link>
                  
                  <RemoveProductButton id={product._id} />
                 
                </td> 

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default page;



//  <td className="flex items-center px-6 py-4">
//                   <a
//                     href={`./../../admin/editProduct/${p._id}`}
//                     className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3"
//                   >
//                     <HiPencilAlt size={24} />
//                   </a>
//                   <RemoveProductButton id={p._id} />
//                 </td> 



// pages/admin/products.tsx

// import React from "react";
// import ServerProducts from "../getProducts/serverProducts";


// export default function Page() {
//   return <ServerProducts />;
// }

// import React from 'react'
// // import ProductsTable from '../components/ProductsTable'

// export default function page() {
//   return (
//     <div>
//        <h1>Hii</h1>
//     </div>
//   )
// }
