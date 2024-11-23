'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Page() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [doctor, setDoctor] = useState("");
  const [location, setLocation] = useState("");
  const [openDays, setOpenDays] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Prevents the default form submission
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/clinics`, {
        // cache: "force-cache",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name, address, district, phone, email, doctor, location, openDays, image,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Clinic");
      }

      alert("Clinic updated successfully");
      router.push("/admin/clinics");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to update Clinic");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='container py-3'>
      <div className=" my-4">
          <h4 className="text-center  font-bold">Add a Clinic</h4>
        </div>
      
      <div className='flex flex-wrap  gap-3 '>
      <div>
        <input
        className='p-2 rounded' 
          type="text" 
          id="name" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <input 
        className='p-2 rounded' 
          type="text" 
          id="address" 
          placeholder="Address" 
          value={address} 
          onChange={(e)=> setAddress(e.target.value)} 
        />
      </div>
      <div>
        <input 
        className='p-2 rounded' 
        type="text" 
          id="district" 
          placeholder="District" 
          value={district} 
          onChange={(e) => setDistrict(e.target.value)} 
        />
      </div>
      <div>
        <input 
        className='p-2 rounded' 
        type="text" 
          id="phone" 
          placeholder="Phone" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />
      </div>
      <div>
        <input 
        className='p-2 rounded' 
        type="text" 
          id="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div>
        <input 
        className='p-2 rounded' 
        type="text" 
          id="doctor" 
          placeholder="Doctor" 
          value={doctor} 
          onChange={(e) => setDoctor(e.target.value)} 
        />
      </div>
      <div>
        <input 
        className='p-2 rounded' 
        type="text" 
          id="location" 
          placeholder="Location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
        />
      </div>
      <div>
        <input 
        className='p-2 rounded' 
        type="text" 
          id="openDays" 
          placeholder="Open Days" 
          value={openDays} 
          onChange={(e) => setOpenDays(e.target.value)} 
        />
      </div>
      <div>
        <input 
        className='p-2 rounded' 
        type="text" 
          id="image" 
          placeholder="Image Link" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
        />
      </div>
      </div>
      
      <div>
        <button className='bg-teal-800 text-white py-2 px-3 rounded my-4' type="submit">Submit</button>
      </div>
    </form>
  );
}
