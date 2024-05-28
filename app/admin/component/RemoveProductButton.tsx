"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveProductButton({ id }) {
    
  const router = useRouter();

  const removeProduct = async () => {
    const confirmed = confirm("Are you sure you want to delete this product?");

    if (confirmed) {
      const res = await fetch(`${process.env.BASE_URL}/api/products?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Product deleted successfully");
        router.refresh();
       
      }
    }
  };

  return (
    <button onClick={removeProduct} className="text-red-400 px-3">
      <HiOutlineTrash size={24} />
    </button>
  );
}
