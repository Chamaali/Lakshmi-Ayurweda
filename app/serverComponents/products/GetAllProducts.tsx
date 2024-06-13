import React, { useEffect, useState } from "react";
import HomeColumnFive from "./../../components/home/HomeColumnFive";

// `${process.env.BASE_URL}/api/products`

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
    console.error("Error loading products", error);
    throw error; // Re-throw the error so it can be caught in the component
  }
};

const GetAllProducts = () => {
  const [products, setProducts] = useState(null); // Initialize with null

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.products);
      } catch (error) {
        // Error is already logged in getProducts function, no need to log again
        // Handle error state if needed, e.g., setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  if (products === null) {
    // Loading state, you can render a loading indicator here
    return <div>Loading...</div>;
  }

  return <HomeColumnFive products={products} />;
};

export default GetAllProducts;
