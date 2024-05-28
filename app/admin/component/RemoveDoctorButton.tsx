"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveDoctorButton({ id }) {
    
  const router = useRouter();

  const removeDoctor = async () => {
    const confirmed = confirm("Are you sure you want to delete this topic?");

    if (confirmed) {
      const res = await fetch(`${process.env.BASE_URL}/api/doctors?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Doctor deleted successfully");
        router.refresh();
       
      }
    }
  };

  return (
    <button onClick={removeDoctor} className="text-red-400 px-3">
      <HiOutlineTrash size={24} />
    </button>
  );
}
