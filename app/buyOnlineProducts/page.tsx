"use client";

import React, { useState, useEffect } from "react";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

const AddToCartButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={togglePopup}
        type="button"
        className="rounded-xl py-2 px-3 justify-self-end text-white font-bold bg-green-700 hover:bg-green-800"
      >
        Add to Cart
      </button>
      {isOpen && (
        <div className="fixed top-0 right-0 w-1/3 h-screen flex  flex-col justify-start items-start bg-gray-500 bg-opacity-100 bg-white p-4  shadow-lg ">
          <div className="basis-1/16 pt-4">
            <p className="font-bold text-md">Cart</p>
            <hr className="w-screen" />
          </div>
          <div className="basis-1/4 pt-4">
            <p>Productadded to cart!</p>
            <button
              onClick={togglePopup}
              className=" bg-green-700 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
          <div className="basis-1/4 pt-4 ">
            <p>Productadded to cart!</p>
            <button
              onClick={togglePopup}
              className=" bg-green-700 text-white px-4 py-2 rounded-md"
            >
              C
            </button>
          </div>
          <div className="">
<hr className="w-screen"/>
            <div className="basis-2/16 pt-4 grid grid-cols-2 gap-4 place-content-around">
                <p>Total</p>
                <p>Rs. 1920</p>
            </div>
            <div className="basis-2/16 pt-4 grid grid-cols-2 gap-4 place-content-around">
              <button
                onClick={togglePopup}
                className="bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Goto Cart
              </button>
              <button
                onClick={togglePopup}
                className="bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="mx-8 mb-4">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1  place-content-around gap-5">
        {products.map((product) => (
          <div
            className="p-2 bg-white place-content-around rounded-lg shadow-lg"
            key={product.id}
          >
            <div className="p-2">
              <img
                src={product.image}
                alt={product.name}
                height={100}
                width={100}
              />
            </div>
            <div className="">
              <p className="image-title text-black p-2 text-center font-medium">
                {product.name}
              </p>
              <p className="image-title text-black px-3 pb-3  text-sm">
                {product.description}
              </p>
              <div className="flex flex-row place-content-around">
                <p>{product.price}</p>
                <p>{product.size}</p>
              </div>
              <AddToCartButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
