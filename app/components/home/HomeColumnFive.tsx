// import React, { useEffect, useState } from "react";
// import HomeColumnFive from "../../components/home/HomeColumnFive";

// // `${process.env.BASE_URL}/api/products`

// const getProducts = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/products", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch products");
//     }

//     const data = await res.json();
//     console.log(data); // Log the data to check the response structure
//     return data;
//   } catch (error) {
//     console.error("Error loading products", error);
//     throw error; // Re-throw the error so it can be caught in the component
//   }
// };

// const GetAllProducts = () => {

//     console.log("Initiated GetAllProducts");

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

//   if (products.length === 0) {
//     // Loading or empty state
//     return <div>Loading...</div>;
//   }

//   return <HomeColumnFive products={products} />;
// };

// export default GetAllProducts;




// import React from 'react';

// const HomeColumnFive = (props) => {
//   const { name, price, size } = props.product;
//   return <h1>Hello, {name} {price} {size}!</h1>;
// };

// export default HomeColumnFive;

// import React from 'react'

// const HomeColumnFive = (props) => {
//     return <h1>Hello, {props.name}!</h1>;
//   };
  
//   export default HomeColumnFive;
