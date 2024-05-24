"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const getDoctors = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/doctors", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

export default function page() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const data = await getDoctors();
      setDoctors(data.doctors);
    };
    fetchDoctors();
  }, []);

  return (
    <Container className="py-8">
      <div className="flex justify-between">
        <h2>Doctors</h2>
        <a href="./../../admin/addDoctor">Add New Doctor</a>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Doctor name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Photo Link
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Clinic Number
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((d) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">{d._id}</td>
                <td className="px-6 py-4">{d.name}</td>
                <td className="px-6 py-4">{d.title}</td>
                <td className="px-6 py-4">{d.phone}</td>
                <td className="px-6 py-4">{d.email}</td>
                <td className="px-6 py-4">{d.image}</td>
                <td className="px-6 py-4">{d.description}</td>
                <td className="px-6 py-4">{d.clinicNumber}</td>

                <td className="flex items-center px-6 py-4">
                  <a
                    href={`./../../admin/editDoctor/${d._id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
