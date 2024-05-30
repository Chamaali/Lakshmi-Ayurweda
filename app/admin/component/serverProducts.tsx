// components/ServerProducts.tsx

import React from "react";
import { Container } from "react-bootstrap";
import ProductsTable from "./ProductsTable"; // Import the client component

const getProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
    return { products: [] }; // Return an empty array if there's an error
  }
};

const ServerProducts = async () => {
  const { products } = await getProducts();

  return (
    <Container className="py-8">
      <div className="flex flex-row pb-4">
        <div className="grid basis-3/4">
          <h4 className="justify-self-center font-bold">Product Details</h4>
        </div>
        <div className="grid basis-1/4">
          <a
            href="./../../admin/addProduct"
            className="justify-self-end py-2 px-3 font-medium bg-green-800 no-underline rounded shadow-sm text-white hover:bg-green-900"
          >
            Add New Product
          </a>
        </div>
      </div>

      <ProductsTable products={products} />
    </Container>
  );
};

export default ServerProducts;
