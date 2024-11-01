"use client";

import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { useRouter } from "next/navigation";
import SignUpForm from "./SignUpForm";

interface SignInFormProps {
  onLogin: (email: string) => void;
  onClose: () => void;
}

export default function SignInForm({ onLogin, onClose }: SignInFormProps) {
    const [showSignUp, setShowSignUp] = useState(false);
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const router = useRouter();

    const fetchUser = async (email: string) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${email}`);
            const data = await res.json();
            return data.user;
        } catch (err) {
            console.error('Error fetching user:', err);
            return null;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const fetchedUser = await fetchUser(emailInput);
        if (fetchedUser && fetchedUser.password === passwordInput) {
            alert("Login successful");
            onLogin(emailInput);
            onClose();
            router.push("/");
            router.refresh();
        } else {
            alert("Login failed");
        }
    };

    const switchToSignUp = () => {
        setShowSignUp(true);
    };

    if (showSignUp) {
        return <SignUpForm 
            onLogin={onLogin}  // Changed from onSignUpSuccess to onLogin
            onClose={onClose} 
        />;
    }

    return (
        <form onSubmit={handleSubmit} className="fixed bottom-0 left-0 w-full h-full bg-opacity-20 flex justify-center items-center shadow-lg">
            <div className="bg-white p-8 rounded-lg shadow-lg border-teal-800">
                <div className="flex flex-row justify-between pb-3">
                    <p className="text-teal-800 text-2xl font-bold">Sign In</p>
                    <button type="button" className="text-gray-400 self-auto" onClick={onClose}>
                        <FaRegWindowClose size={30} className="text-gray-400" />
                    </button>
                </div>

                <div className="flex flex-col">
                    <input
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className="text-black border-2 rounded-md border-teal-800 px-3 py-2 mb-4 w-96"
                    />
                    <input
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="text-black border-2 rounded-md border-teal-800 px-3 py-2 mb-4 w-96"
                    />
                    
                    <button type="submit" className="text-white rounded-md bg-teal-800 px-3 py-2 mb-4 w-96">
                        Sign In
                    </button>

                    <p className="text-gray-500 self-center mb-1">
                        Don&apos;t have an account?{" "}
                        <button 
                            type="button"
                            onClick={switchToSignUp} 
                            className="text-teal-800 font-semibold no-underline hover:underline"
                        >
                            Sign Up
                        </button>
                    </p>
                </div>
            </div>
        </form>
    );
}