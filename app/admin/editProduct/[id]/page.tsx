import React from "react";
import EditProductForm from "../../component/EditProductForm";

const getProductById = async (id) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditProduct({ params }) {
  const { id } = params;
  const {product } = await getProductById(id);
  const { name, description, image, price, size } = product;

  return <EditProductForm id={id} name={name} description={description} image={image} price={price} size={size} />;
}





