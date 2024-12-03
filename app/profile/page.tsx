'use client'

import React, { useContext } from 'react';
import { UserContext } from "../context/userContext";

export default function Page() {
  const { user, token, logout } = useContext(UserContext);

  const LogoutClick = () => {
    logout();
    window.location.href = "/";
  };

  // Add a check for user existence
  if (!user) {
    return <div>Loading user information...</div>;
  }

  return (
    <>
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        {/* Dynamically display all user properties */}
        {/* {Object.entries(user).map(([key, value]) => ( */}
          <div className="mb-4">
            <div className="text-gray-600 text-sm">Name</div>
            <div className="text-gray-900">
              {user.name}
            </div>
            <div className="text-gray-600 text-sm">Address</div>
            <div className="text-gray-900">
              {user.address}
            </div>
            <div className="text-gray-600 text-sm">Phone</div>
            <div className="text-gray-900">
              {user.phone}
            </div>
            <div className="text-gray-600 text-sm">Email</div>
            <div className="text-gray-900">
              {user.email}
            </div>
          </div>
        {/* ))} */}
      </div>

      {/* <button
        onClick={LogoutClick}
        type="button"
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 font-bold rounded transition duration-200"
      >
        Sign Out
      </button> */}
      {/* Button container */}
      <div className="flex gap-4 mb-6">
      {user.role === "admin" && (
        <button
        type="button"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-bold rounded transition duration-200"
        onClick={() => (window.location.href = "/admin/appointments")}
      >
        Dashboard
      </button>
      )}
        
        {/* <button
          type="button"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 font-bold rounded transition duration-200"
          onClick={() => console.log("View 2")}
        >
          View 2
        </button> */}
        <button
        onClick={LogoutClick}
        type="button"
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 font-bold rounded transition duration-200"
      >
        Sign Out
      </button>
      </div>

      
    </div>
    
    </>
    
  );
}