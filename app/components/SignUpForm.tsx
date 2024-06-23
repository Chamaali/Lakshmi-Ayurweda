"use client"

import React, { useState } from 'react'
import { FaRegWindowClose } from 'react-icons/fa';
import SignInForm from './SignInForm';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {
    const [isOpen, setIsOpen] = useState(true);
    const [showSignIn, setShowSignIn] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const role="patient";
    const router = useRouter();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
    
        if (!role || !firstName || !email || !password) {
          alert("Please fill in all required fields");
          return;
        }
    
        try {
          // First, check if the email already exists
          const checkRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${email}`);
          const checkData = await checkRes.json();

          if (checkData.user) {
            alert("An account with this email already exists. Please use a different email or sign in.");
            return;
          }

          // If email doesn't exist, proceed with user creation
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ role, firstName, lastName, email, phone, password }),
          });
    
          if (res.ok) {
            alert("User added successfully");
            router.push("/");
            router.refresh();
          } else {
            throw new Error("Failed to add user");
          }
        } catch (error) {
          console.log(error);
          alert("An error occurred while creating the account. Please try again.");
        }
      };


    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const switchToSignIn = () => {
        setShowSignIn(true);
    };

    if (showSignIn) {
        return <SignInForm />;
    }

    return (
        isOpen && (
            <div className="fixed bottom-0 left-0 w-full h-full bg-opacity-20 flex justify-center items-center shadow-lg">
                <div className="bg-white p-8 rounded-lg shadow-lg border-green-800">
                    <div className="flex flex-row justify-between pb-3">
                        <p className="text-green-800 text-2xl font-bold">Create an Account</p>
                        <button className="text-gray-400 self-auto" onClick={togglePopup}>
                            <FaRegWindowClose size={30} className="text-gray-400" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col">
                    <input
                onChange={(e)=> setFirstName(e.target.value)}
                value={firstName}
              type="text"
              placeholder="First Name"
              width={100}
              className="text-black border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
            />
            <input
            onChange={(e)=> setLastName(e.target.value)}
            value={lastName}
              type="text"
              placeholder="Last Name"
              width={100}
              className="text-black border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
            />
            
            <input
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
              type="email"
              placeholder="Email"
              width={100}
              className="text-black border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
            />
            <input
            onChange={(e)=> setPhone(e.target.value)}
            value={phone}
              type="tel"
              placeholder="Phone"
              width={100}
              className="text-black border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
            />
            <input
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
              type="password"
              placeholder="New Password"
              width={20}
              className="text-black border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
            />
            {/* <input
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
              type="password"
              placeholder="Confirm Password"
              width={20}
              className="text-black border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
            /> */}
            
                        
                        <button type="submit" className="text-white rounded-md bg-green-800 px-3 py-2 mb-1 w-96">
                            Sign Up
                        </button>
                        
                        <p className="text-gray-500 self-center mt-4 mb-1">
                            Already have an account?{" "}
                            <button 
                                type="button"
                                onClick={switchToSignIn} 
                                className="text-green-800 font-semibold no-underline hover:underline"
                            >
                                Sign In
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        )
    )
}