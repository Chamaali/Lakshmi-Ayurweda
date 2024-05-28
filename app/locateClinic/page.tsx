"use client";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Filter, MapPin } from "react-feather";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons'

const getClinics = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/clinics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Clinics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading Clinics: ", error);
  }
};

export default function DropdownSelect() {
  const [clinics, setClinics] = useState([]);
  const [filter, setFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getClinics();
      setClinics(data.clinics); // Assuming clinics data is under 'clinics' key
    };
    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredClinics = clinics.filter((clinic) =>
    clinic.district.toLowerCase().includes(filter.toLowerCase())
  );

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!patientName || !patientAddress || !patientAge || !patientPhone || !patientEmail) {
      alert("Please enter all the information");
      return;
    }
    try {
        const res = await fetch('http://localhost:3000/api/patients', {
            method: 'POST',
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({patientName, patientAge, patientAddress, patientPhone, patientEmail}),
        })
    } catch (error) {
        alert("Failed to Book the Appointment");
    }
  };

  return (
    <div className="m-8 pb-8" >
      <div >
        <div className="">
          <div className="flex justify-end py-3 gap-2">
            <Filter className="self-center" size={20} color="gray"/>
        <input
          type="text"
          placeholder="Filter by District"
          value={filter}
          
          onChange={handleFilterChange}
          className="border border-green-800 rounded-md px-3 w-screen"
        />
            
            </div>  
          
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 place-content-around gap-5">
          {filteredClinics.map((c) => (
            <div
              key={c.id}
              className="bg-white shadow-md rounded-xl place-content-around"
            >
              <div className="">
                <Image src={c.image} alt={c.name} className="rounded-t-xl" />
              </div>
              <div className="px-3 pb-3">
                <p className="text-green-700 text-2xl font-bold pt-2 ">
                  {c.name}
                </p>
                <p className="text-green-700 text-base pb-3">{c.address}</p>
                <p className="text-green-700 text-base pb-3">{c.district}</p>
                <p className="text-green-700 text-lg font-medium">{c.doctor}</p>
                <p className="text-green-700 text-base">Call: {c.phone}</p>
                <p className="text-green-700 text-base">Email: {c.email}</p>
                <div className="flex flex-row gap-1">
                  <CalendarDaysIcon className="text-green-800 w-6 " />

                  <span className="text-green-700 text-sm py-2">
                    {c.openDays}
                  </span>
                </div>
                <div className="flex flex-row place-content-around p-2 pt-4">
                  <div className="align-middle py-2 ">
                    <a href={c.location}>
                      <div className="">
                        <MapPin className="text-green-800 " />
                      </div>
                    </a>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={togglePopup}
                      className="rounded-xl py-2 px-3 text-white font-bold bg-green-700 hover:bg-green-800"
                    >
                      Book Now
                    </button>
                    {isOpen && (
                      <div className="fixed bottom-0 left-0 w-full h-full  bg-opacity-20 flex justify-center items-center  shadow-lg">
                        <div className="bg-white p-8 rounded-lg shadow-lg border-green-800">
                          <p className="text-green-700 text-2xl font-bold pb-2 ">
                            Book Appointment for {c.name}
                          </p>

                          <form
                           onSubmit={handleSubmit} 
                            className="flex flex-col"
                          >
                            <input
                              onChange={(e) => setPatientName(e.target.value)}
                              value={patientName}
                              type="text"
                              placeholder="name"
                              width={100}
                              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
                            />
                            <input
                              onChange={(e) => setPatientAddress(e.target.value)}
                              value={patientAddress}
                              type="text"
                              placeholder="address"
                              width={20}
                              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
                            />
                            <input
                              onChange={(e) => setPatientAge(e.target.value)}
                              value={patientAge}
                              type="text"
                              placeholder="age"
                              width={20}
                              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
                            />
                            <input
                              onChange={(e) => setPatientPhone(e.target.value)}
                              value={patientPhone}
                              type="text"
                              placeholder="phone"
                              width={20}
                              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
                            />
                            <input
                              onChange={(e) => setPatientEmail(e.target.value)}
                              value={patientEmail}
                              type="text"
                              placeholder="email"
                              width={20}
                              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
                            />
                          </form>

                          <div className="flex flex-row place-content-around">
                            <button
                              onClick={togglePopup}
                              className="rounded-xl py-2 px-3 text-white font-bold bg-gray-400 hover:bg-gray-500"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="rounded-xl py-2 px-3 text-white font-bold bg-green-700 hover:bg-green-800"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
