import Image from "next/image";
import React from "react";

import products from "@/app/constants/products"

const HomeColumnFive = () => {



  return (
    <div className="flex flex-row p-8 bg-gray-200">
        <p>Our Products</p>
        {products.map((product, index) => (
        <div key={product.title}>
          <div className="p-2">
            <Image src={product.image} alt={product.title} width={200} height={200} />
          </div>
          <div className="bg-gray-200 rounded-md">
            <h3 className="image-title text-black p-2 text-center font-medium">
              {product.title}
            </h3>
            <p className="image-title text-black px-3 pb-3 text-sm">
              {product.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeColumnFive;
