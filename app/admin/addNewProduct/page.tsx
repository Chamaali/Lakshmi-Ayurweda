'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Page() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Prevents the default form submission
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
        // cache: "force-cache",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          image,
          price,
          size,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Product");
      }

      alert("Product updated successfully");
      router.push("/admin/products");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to update Product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='container py-3'>
      
      <div className=" my-4">
          <h4 className="text-center font-bold">Add a Clinic</h4>
        </div>


        <div className='flex flex-wrap  gap-3'>
        <div>
        <input 
          className='p-2 m-2 rounded'
          type="text" 
          id="name" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <input 
          className='p-2 m-2 rounded'
          type="text" 
          id="description" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
      <div>
        <input 
          className='p-2 m-2 rounded'
          type="text" 
          id="image" 
          placeholder="Image URL" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
        />
      </div>
      <div>
        <input 
          className='p-2 m-2 rounded'
          type="text" 
          id="price" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
      </div>
      <div>
        <input 
          className='p-2 m-2 rounded'
          type="text" 
          id="size" 
          placeholder="Size" 
          value={size} 
          onChange={(e) => setSize(e.target.value)} 
        />
      </div>
        </div>
      
      
      <div>
        <button className=' my-4 bg-green-800 text-white py-2 px-3 rounded'  type="submit">Submit</button>
      </div>
    </form>
  );
}
