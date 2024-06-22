"use client";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Filter, MapPin } from "react-feather";
import { getClinics } from "@/app/serverComponents/clinics/getClinics";

interface Clinic {
  id: string;
  name: string;
  address: string;
  district: string;
  doctor: string;
  phone: string;
  email: string;
  openDays: string;
  location: string;
  image: string;
}

const DropdownSelect: React.FC = () => {
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [filter, setFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [patientAddress, setPatientAddress] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [selectedClinic, setSelectedClinic] = useState<Clinic | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClinics();
        if (data && Array.isArray(data.clinics)) {
          setClinics(data.clinics);
        } else if (Array.isArray(data)) {
          setClinics(data);
        } else {
          console.error('Unexpected data format from getClinics:', data);
          setClinics([]);
        }
      } catch (error) {
        console.error('Error fetching clinics:', error);
        setClinics([]);
      }
    };
    fetchData();
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredClinics = clinics.filter((clinic) =>
    clinic.district.toLowerCase().includes(filter.toLowerCase())
  );

  const togglePopup = (clinic: Clinic | null = null) => {
    setSelectedClinic(clinic);
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!patientName || !patientAddress || !patientAge || !patientPhone || !patientEmail) {
      alert("Please enter all the information");
      return;
    }
    try {
      const res = await fetch('/api/patients', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          patientName,
          patientAge,
          patientAddress,
          patientPhone,
          patientEmail,
          clinicId: selectedClinic?.id
        }),
      });
      if (res.ok) {
        alert("Appointment booked successfully!");
        setIsOpen(false);
      } else {
        alert("Failed to book the appointment");
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert("Failed to book the appointment");
    }
  };

  return (
    <div className="m-8 pb-8">
      <div>
        <div className="">
          <div className="flex justify-end py-3 gap-2">
            <Filter className="self-center" size={20} color="gray" />
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
          {filteredClinics.map((clinic, index ) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl place-content-around"
            >
              <div className="">
                <Image src={clinic.image} alt={clinic.name} className="rounded-t-xl" width={500} height={300} />
              </div>
              <div className="px-3 pb-3">
                <p className="text-green-700 text-2xl font-bold pt-2 ">
                  {clinic.name}
                </p>
                <p className="text-green-700 text-base pb-3">{clinic.address}</p>
                <p className="text-green-700 text-base pb-3">{clinic.district}</p>
                <p className="text-green-700 text-lg font-medium">{clinic.doctor}</p>
                <p className="text-green-700 text-base">Call: {clinic.phone}</p>
                <p className="text-green-700 text-base">Email: {clinic.email}</p>
                <div className="flex flex-row gap-1">
                  <CalendarDaysIcon className="text-green-800 w-6 " />
                  <span className="text-green-700 text-sm py-2">
                    {clinic.openDays}
                  </span>
                </div>
                <div className="flex flex-row place-content-around p-2 pt-4">
                  <div className="align-middle py-2 ">
                    <a href={clinic.location}>
                      <div className="">
                        <MapPin className="text-green-800 " />
                      </div>
                    </a>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => togglePopup(clinic)}
                      className="rounded-xl py-2 px-3 text-white font-bold bg-green-700 hover:bg-green-800"
                    >
                      Book Now
                    </button>
                    {isOpen && selectedClinic?.id === clinic.id && (
                      <div className="fixed bottom-0 left-0 w-full h-full bg-opacity-20 flex justify-center items-center shadow-lg">
                        <div className="bg-white p-8 rounded-lg shadow-lg border-green-800">
                          <p className="text-green-700 text-2xl font-bold pb-2 ">
                            Book Appointment for {clinic.name}
                          </p>
                          <form
                            onSubmit={handleSubmit}
                            className="flex flex-col"
                          >
                            <input
                              onChange={(e) => setPatientName(e.target.value)}
                              value={patientName}
                              type="text"
                              placeholder="Name"
                              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
                            />
                            <input
                              onChange={(e) => setPatientAddress(e.target.value)}
                              value={patientAddress}
                              type="text"
                              placeholder="Address"
                              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
                            />
                            <input
                              onChange={(e) => setPatientAge(e.target.value)}
                              value={patientAge}
                              type="number"
                              placeholder="Age"
                              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
                            />
                            <input
                              onChange={(e) => setPatientPhone(e.target.value)}
                              value={patientPhone}
                              type="text"
                              placeholder="Phone"
                              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
                            />
                            <input
                              onChange={(e) => setPatientEmail(e.target.value)}
                              value={patientEmail}
                              type="email"
                              placeholder="Email"
                              className="border-2 rounded-md border-green-800 px-3 py-2 mb-4 w-96"
                            />
                            <div className="flex flex-row place-content-around">
                              <button
                                type="button"
                                onClick={() => togglePopup()}
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
                          </form>
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

export default DropdownSelect;