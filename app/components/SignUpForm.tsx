"use client"

import React, { useState } from 'react'
import { FaApple, FaFacebook, FaGoogle, FaRegWindowClose } from 'react-icons/fa';
import SignInForm from './SignInForm';

export default function SignUpForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
  
    const togglePopupSignInFrom = () => {
      setIsSignUp(!isSignUp);
      setIsOpen(!isOpen);	
    };

  return (
   
      <div className="fixed bottom-0 left-0 w-full h-full  bg-opacity-20 flex justify-center items-center  shadow-lg">
        <div className="bg-white p-8 rounded-lg shadow-lg border-green-800">
          <div className="flex flex-row justify-between pb-3">
            <p className="text-green-800 text-2xl font-bold">Create an Account</p>
            <button className="text-gray-400 self-auto" onClick={togglePopup}>
              <FaRegWindowClose size={30} className="text-gray-400" />
            </button>
          </div>

          <form className="flex flex-col">
          <input
              type="text"
              placeholder="First Name"
              width={100}
              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
            />
            <input
              type="text"
              placeholder="Last Name"
              width={100}
              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
            />
            
            {/* <input
              type="text"
              placeholder="Email"
              width={100}
              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
            /> */}
            <input
              type="text"
              placeholder="New Password"
              width={20}
              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
            />
            {/* <input
              type="text"
              placeholder="Confirm Password"
              width={20}
              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
            /> */}
            <button className="text-white rounded-md bg-green-800  px-3 py-2 mb-1 w-96">
              Sign Up
            </button>
            <hr className="text-black py-1" />
            <button className="flex justify-center text-green-800 rounded-md bg-white border-2 border-green-800  px-3 py-2 mb-4 w-96">
              <FaGoogle className="mr-2" size={23} />
              Continue with Google
            </button>
            <button className="flex justify-center text-green-800 rounded-md bg-white border-2 border-green-800 px-3 py-2 mb-4 w-96">
              <FaFacebook className="mr-2" size={25} />
              Continue with Facebook
            </button>
            <button className="flex justify-center text-green-800 rounded-md bg-white border-2 border-green-800  px-3 py-2 mb-4 w-96">
              <FaApple className="mr-2" size={25} />
              Continue with Apple
            </button>

            <p className="text-gray-500 self-center mb-1">
              You have an Account:{" "}
              <a onClick={togglePopupSignInFrom} className="text-gray-500 no-underline hover:underline">
                SignIn
              </a>
            </p>
            {isOpen && (
                      <SignInForm />
                    )}
          </form>
        </div>
      </div>
  
  )
}
