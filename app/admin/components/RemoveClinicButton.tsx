"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface RemoveClinicButtonProps {
  id: string;
}

export default function RemoveClinicButton({ id }: RemoveClinicButtonProps) {
  const router = useRouter();

  const removeClinic = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this clinic?"
    );

    if (confirmed) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/clinics?id=${id}`,
          {
            method: "DELETE",
          }
        );

        if (res.ok) {
          window.alert("Clinic deleted successfully");
          
          router.push("/admin/clinics");
          router.refresh();
        } else {
          throw new Error("Failed to delete clinic");
        }
      } catch (error) {
        console.error("Error deleting clinic:", error);
        window.alert("Failed to delete clinic");
      }
    }
  };

  return (
    <button
      onClick={removeClinic}
      className="text-red-400 px-3"
      aria-label="Delete clinic"
    >
      <HiOutlineTrash size={24} />
    </button>
  );
} 