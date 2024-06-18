// components/ProductsTable.tsx

"use client";

import React from "react";

const ProductsTable = ({ products }: { products: any[] }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-white border-b">
            <th scope="col" className="px-6 py-3">No.</th>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Description</th>
            <th scope="col" className="px-6 py-3">Photo Link</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Size</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p: any) => (
            <tr key={p._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">{p._id}</td>
              <td className="px-6 py-4">{p.name}</td>
              <td className="px-6 py-4">{p.description}</td>
              <td className="px-6 py-4">{p.image}</td>
              <td className="px-6 py-4">{p.price}</td>
              <td className="px-6 py-4">{p.size}</td>
              <td>actions</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
