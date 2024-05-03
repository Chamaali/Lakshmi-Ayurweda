import Image from "next/image";
import React from "react";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { products } = await getProducts();

  return (
    <div className="flex flex-row p-8 bg-gray-200">
      {products.map((t) => (
       <div>
        <div className='p-2 '><Image src={t.image} alt={t.name} width={200} height={200} /></div>
        <div className=" bg-gray-200 rounded-md ">
          <h3 className="image-title text-black p-2 text-center font-medium">
            {t.name}
          </h3>
          <p className="image-title text-black px-3 pb-3  text-sm">
            {t.description}
          </p>
        </div>
     </div>
      ))}
    </div>
  );
}
