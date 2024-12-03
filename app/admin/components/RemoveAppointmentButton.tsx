"use client";

import React, { useContext } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { UserContext } from "../../context/userContext"; // Import the user context
interface RemoveAppointmentButtonProps {
  id: string;
}

export default function RemoveAppointmentButton({ id }: RemoveAppointmentButtonProps) {
  const router = useRouter();
  const { user, token, logout } = useContext(UserContext);

  const removeAppointment = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (confirmed) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments?id=${id}`,
          {
            method: "DELETE",
            headers: {
              'authorization': `Bearer ${token}`,
            },
          }
        );

        if (res.ok) {
          window.alert("Appointment deleted successfully");
          
          router.push("/admin/appointments");
          router.refresh();
        } else {
          throw new Error("Failed to delete appointment");
        }
      } catch (error) {
        console.error("Error deleting appointment:", error);
        window.alert("Failed to delete appointment");
      }
    }
  };

  return (
    <button
    type="button"
      onClick={removeAppointment}
      className="text-red-400 px-3"
      aria-label="Delete clinic"
    >
      <HiOutlineTrash size={24} />
    </button>
  );
} 