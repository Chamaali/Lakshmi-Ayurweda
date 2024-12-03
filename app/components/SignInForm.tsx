"use client";

import React, { useState, useContext } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { useRouter } from "next/navigation";
import SignUpForm from "./SignUpForm";
import { UserContext } from "../context/userContext"; // Import the user context

interface SignInFormProps {
  onClose: () => void;
}

export default function SignInForm({ onClose }: SignInFormProps) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { setUser, setToken } = useContext(UserContext); // Access context to set user and token
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message on form submission

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Set user and token in context
        setUser(data.user);
        setToken(data.token);

        // Navigate to the home page and refresh
        router.push("/");
        router.refresh();

        alert("Login successful!");
        onClose();
      } else {
        // Show error message from the server response
        setErrorMessage(data.error || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  const switchToSignUp = () => {
    setShowSignUp(true);
  };

  if (showSignUp) {
    return <SignUpForm onClose={onClose} onLogin={function (email: string): void {
      throw new Error("Function not implemented.");
    } } />;
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
          
          {errorMessage && (
            <p className="text-red-500 mb-4">{errorMessage}</p>
          )}

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
