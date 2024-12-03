'use client';

import { getAppointments } from '@/app/serverComponents/appointment/getAppointment';
import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import RemoveAppointmentButton from '../components/RemoveAppointmentButton';
import { UserContext } from "../../context/userContext"; // Import the user context

export default function Page() {
  const router = useRouter();
  const [appointments, setAppointments] = useState([]);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]); 
  const { user, token, logout } = useContext(UserContext);
  // Fetch appointments on component mount
  useEffect(() => {
    async function fetchAppointments() {
      try {
        const data = await getAppointments(token);
        setAppointments(data);
        setCheckedItems(data.map((appointment: any) => appointment.checked || false));
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    }
    fetchAppointments();
  }, [token]);

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);

    const selectedIds = appointments
      .filter((_, i) => updatedCheckedItems[i])
      .map((appointment: { _id: string }) => appointment._id)
      .join(',');
    router.push(`?selectedIds=${selectedIds}`);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      
      const updateResults = await Promise.all(
        appointments.map((appointment: { _id: string }, index: number) =>
          fetch(`/api/appointments/${appointment._id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'authorization': `${token}`
            },
            body: JSON.stringify({
              checked: checkedItems[index],
            }),
          })
        )
      );

      const success = updateResults.every((res) => res.ok);

      if (success) {
        alert('All records updated successfully.');
      } else {
        alert('Some records failed to update.');
        console.error('Some records failed to update.');
      }
    } catch (error) {
      alert('An error occurred while updating records.');
      console.error('An error occurred while updating records:', error);
    }
  };

  if (!Array.isArray(appointments) || !appointments.length) {
    return <div>Loading appointments...</div>;
  }

  return (
    <Container className="py-8">
      <form onSubmit={handleSubmit}>
        <div className="d-flex place-content-around">
          <h5 className="capitalize font-bold">Appointments</h5>
          <button className="bg-teal-800 hover:bg-teal-700 p-2 m-2 rounded text-white" type="submit">
            Update
          </button>
        </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white border-b">
              <th scope="col" className="px-6 py-3">
                Check
              </th>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Type of consultation
              </th>
              <th scope="col" className="px-6 py-3">
                Type of Package
              </th>
              <th scope="col" className="px-6 py-3">
                Total Amount
              </th>
              <th scope="col" className="px-6 py-3">
                URL
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment: any, index: number) => (
              <tr
                key={appointment._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">
                <input
                        type="checkbox"
                        checked={checkedItems[index]}
                        onChange={() => handleCheckboxChange(index)}
                      />
                </td>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{appointment.name}</td>
                <td className="px-6 py-4">{appointment.age}</td>
                <td className="px-6 py-4">{appointment.gender}</td>
                <td className="px-6 py-4">{appointment.phone}</td>
                <td className="px-6 py-4">{appointment.email}</td>
                <td className="px-6 py-4">{appointment.typeOfConsultation}</td>
                <td className="px-6 py-4">{appointment.typeofPackage}</td>
                <td className="px-6 py-4">{appointment.totalAmount}</td>
                <td className="px-6 py-4">{appointment.url}</td>

{/*name, address, district, province, phone, email, doctor, location, openDays, image */}

                <td className="flex items-center px-6 py-4">
                  {/* <Link
                    href={`./../../admin/editProduct/${product._id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3"
                  >
                    <HiPencilAlt size={24} color="gray" />
                  </Link> */}
                  <RemoveAppointmentButton id={appointment._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        </form>
    </Container>
  )
}


// import React from 'react'

// export default function page() {
//   return (
//     <div>
      
//     </div>
//   )
// }
