"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface RemoveProductButtonProps {
  id: string;
}

export default function RemoveProductButton({ id }: RemoveProductButtonProps) {
  const router = useRouter();

  const removeProduct = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmed) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?id=${id}`,
          {
            method: "DELETE",
          }
        );

        if (res.ok) {
          window.alert("Product deleted successfully");
          
          router.push("/admin/products");
          router.refresh();
        } else {
          throw new Error("Failed to delete product");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        window.alert("Failed to delete product");
      }
    }
  };

  return (
    <button
      onClick={removeProduct}
      className="text-red-400 px-3"
      aria-label="Delete product"
    >
      <HiOutlineTrash size={24} />
    </button>
  );
}