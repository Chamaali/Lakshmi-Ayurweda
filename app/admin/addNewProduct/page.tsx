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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          placeholder="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input 
          type="text" 
          id="description" 
          placeholder="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="image">Image URL</label>
        <input 
          type="text" 
          id="image" 
          placeholder="image URL" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input 
          type="text" 
          id="price" 
          placeholder="price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="size">Size</label>
        <input 
          type="text" 
          id="size" 
          placeholder="size" 
          value={size} 
          onChange={(e) => setSize(e.target.value)} 
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
