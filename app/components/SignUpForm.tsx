"use client";

import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import SignInForm from "./SignInForm";  // Make sure to import SignInForm

interface SignUpFormProps {
  onLogin: (email: string) => void;
  onClose: () => void;
}

export default function SignUpForm({ onLogin, onClose }: SignUpFormProps) {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const [nameInput, setnameInput] = useState("");
    const [addressInput, setAddressInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showSignIn, setShowSignIn] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!nameInput || !emailInput || !passwordInput) {
            alert("Please fill in all required fields");
            return;
        }
    
        if (passwordInput !== confirmPasswordInput) {
            setPasswordError("Passwords do not match");
            return;
        }
    
        setPasswordError("");
    
        try {
            // First, check if the email already exists
            const checkRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${emailInput}`);
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
                body: JSON.stringify({
                    role: 'patient',
                    name: nameInput,
                    address: addressInput,
                    email: emailInput,
                    phone: phoneInput,
                    password: passwordInput
                }),
            });
    
            if (res.ok) {
                alert("Sign up successful");
                onLogin(emailInput);
            } else {
                throw new Error("Failed to add user");
            }
        } catch (error) {
            console.error('Error during sign up:', error);
            alert("An error occurred while creating the account. Please try again.");
        }
    };

    const switchToSignIn = () => {
        setShowSignIn(true);
    };

    if (showSignIn) {
        return <SignInForm onClose={onClose} />;
    }

    return (
        <form onSubmit={handleSubmit} className="fixed bottom-0 left-0 w-full h-full bg-opacity-20 flex justify-center items-center shadow-lg">
            <div className="bg-white p-8 rounded-lg shadow-lg border-teal-800">
                <div className="flex flex-row justify-between pb-3">
                    <p className="text-teal-800 text-2xl font-bold">Sign Up</p>
                    <button type="button" className="text-gray-400 self-auto" onClick={onClose}>
                        <FaRegWindowClose size={30} className="text-gray-400" />
                    </button>
                </div>

                <div className="flex flex-col">
                    <input
                        value={nameInput}
                        onChange={(e) => setnameInput(e.target.value)}
                        type="text"
                        placeholder="First Name"
                        className="text-black border-2 rounded-md border-teal-800 px-3 py-2 mb-4 w-96"
                        required
                    />
                    <input
                        value={addressInput}
                        onChange={(e) => setAddressInput(e.target.value)}
                        type="text"
                        placeholder="Address"
                        className="text-black border-2 rounded-md border-teal-800 px-3 py-2 mb-4 w-96"
                        required
                    />
                    <input
                        value={phoneInput}
                        onChange={(e) => setPhoneInput(e.target.value)}
                        type="tel"
                        placeholder="Phone"
                        className="text-black border-2 rounded-md border-teal-800 px-3 py-2 mb-4 w-96"
                        required
                    />
                    <input
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className="text-black border-2 rounded-md border-teal-800 px-3 py-2 mb-4 w-96"
                        required
                    />
                    <input
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="text-black border-2 rounded-md border-teal-800 px-3 py-2 mb-4 w-96"
                        required
                    />
                    <input
                        value={confirmPasswordInput}
                        onChange={(e) => setConfirmPasswordInput(e.target.value)}
                        type="password"
                        placeholder="Confirm Password"
                        className="text-black border-2 rounded-md border-teal-800 px-3 py-2 mb-4 w-96"
                        required
                    />
                    {passwordError && <p className="text-red-500 mb-4">{passwordError}</p>}
                    
                    <button type="submit" className="text-white rounded-md bg-teal-800 px-3 py-2 mb-4 w-96">
                        Sign Up
                    </button>

                    <p className="text-gray-500 self-center mb-1">
                        Already have an account?{" "}
                        <button 
                            type="button"
                            onClick={switchToSignIn} 
                            className="text-teal-800 font-semibold no-underline hover:underline"
                        >
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        </form>
    );
}