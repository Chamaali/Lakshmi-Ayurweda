'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

export default function EditDoctorForm({ id, name, title, image, phone, email, description, clinicNumber }) {
    const [newName, setNewName] = useState(name);
    const [newTitle, setNewTitle] = useState(title);
    const [newImage, setNewImage] = useState(image);
    const [newPhone, setNewPhone] = useState(phone);
    const [newEmail, setNewEmail] = useState(email);
    const [newDescription, setNewDescription] = useState(description);	
    const [newClinicNumber, setNewClinicNumber] = useState(clinicNumber);
    
    const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.BASE_URL}/api/doctors/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newName, newTitle, newDescription, newClinicNumber, newImage, newPhone, newEmail}),
      });

      if (!res.ok) {
        console.log("Failed to update Doctor !", res.statusText);
        throw new Error("Failed to update Doctor");
      }else{
        alert("Doctor updated successfully");
        
      }

      router.push("./../doctors");
    router.refresh();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div onSubmit={handleSubmit}>
    <Container>
      <form className="py-6">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                  onChange={(e) => setNewName(e.target.value)}
                  value={newName}
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                  onChange={(e) => setNewTitle(e.target.value)}
                  value={newTitle}
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo Link
                </label>
                <div className="mt-2">
                  <input
                  onChange={(e) => setNewImage(e.target.value)}
                  value={newImage}
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone
                </label>
                <div className="mt-2">
                  <input
                  onChange={(e) => setNewPhone(e.target.value)}
                  value={newPhone}
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                <input
                  onChange={(e) => setNewEmail(e.target.value)}
                  value={newEmail}
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Clinic Number
                  </label>
                  <div className="mt-2">
                  <input
                    onChange={(e) => setNewClinicNumber(e.target.value)}
                    value={newClinicNumber}
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                      onChange={(e) => setNewDescription(e.target.value)}
                      value={newDescription}
                      placeholder="Enter some long form content."
                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    rows={4}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </Container>
  </div>

  );
}
