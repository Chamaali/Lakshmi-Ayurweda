"use client";

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import RemoveDoctorButton from "../component/RemoveDoctorButton";
import { HiPencilAlt } from "react-icons/hi";


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

export default function Page() {
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
      <div className="flex flex-row pb-4 ">
        <div className="grid  basis-3/4">
            
        <h4 className="justify-self-center font-bold" >Details of Doctors</h4>
        </div>
        <div className="grid  basis-1/4">
        <a href="./../../admin/addDoctor" className="justify-self-end py-2 px-3 font-medium bg-green-800 no-underline rounded shadow-sm text-white hover:bg-green-900">Add New Doctor</a>
            
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white border-b">
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
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
                Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Clinic No.
              </th>
              <th scope="col" className="px-6 py-3">
                
              </th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((d) => (
              <tr key={d._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3"
                  >
                                 <HiPencilAlt size={24} />

                  </a>
                  <RemoveDoctorButton id={d._id}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
