"use client";

import React, { useState, useEffect } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function SignInForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const router = useRouter();

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const fetchUser = async (email:any) => {
        try {
            const res = await fetch(`http://localhost:3000/api/users/${email}`);
            const data = await res.json();
            return data.user;
        } catch (err) {
            console.error('Error fetching user:', err);
            return null;
        }
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        const fetchedUser = await fetchUser(emailInput);
        if (fetchedUser && fetchedUser.password === passwordInput) {
            alert("Login successful");
            setIsOpen(false);
            router.push("/");
            router.refresh();
        } else {
            alert("Login failed");
        }
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {isOpen && (
                <form onSubmit={handleSubmit} className="fixed bottom-0 left-0 w-full h-full bg-opacity-20 flex justify-center items-center shadow-lg">
                    <div className="bg-white p-8 rounded-lg shadow-lg border-green-800">
                        <div className="flex flex-row justify-between pb-3">
                            <p className="text-green-800 text-2xl font-bold">Sign In</p>
                            <button type="button" className="text-gray-400 self-auto" onClick={togglePopup}>
                                <FaRegWindowClose size={30} className="text-gray-400" />
                            </button>
                        </div>

                        <div className="flex flex-col">
                            <input
                                value={emailInput}
                                onChange={(e) => setEmailInput(e.target.value)}
                                type="email"
                                placeholder="Email"
                                className="text-black border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
                            />
                            <input
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                type="password"
                                placeholder="Password"
                                className="text-black border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
                            />
                            <button type="submit" className="text-white rounded-md bg-green-800 px-3 py-2 mb-4 w-96">
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
}