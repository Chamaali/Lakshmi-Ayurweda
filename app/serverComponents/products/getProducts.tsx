

export const getProducts = async () => {
    
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      {
        // cache: "force-cache",
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch products");

    }

    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error loading products", error);
    // throw error;
  }
};

// import connectMongoDB from "@/libs/mongodb";
// import Product from "@/models/product";
// import { NextResponse } from "next/server";

// export async function GET(request){
//     try {
//         await connectMongoDB();
//         const products = await Product.find();
//     } catch (error) {

//     }
// }
