import { getClinics } from '@/app/serverComponents/clinics/getClinics'
import React from 'react'
import { Container } from "react-bootstrap";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveClinicButton from '../components/RemoveClinicButton';
  
export default async function page() {

const clinics = await getClinics();


if (!clinics) {
    console.error("No clinics data fetched");
    return <div>Error loading clinics</div>;
  }

  return (
    <Container className="py-8">
      <div className="flex flex-row pb-4 ">
        <div className="grid basis-3/4">
          <h4 className="justify-self-center font-bold">Clinic Details</h4>
        </div>
        <div className="grid basis-1/4">
          <Link
            href="/admin/addNewClinic"
            className="justify-self-end py-2 px-3 font-medium bg-green-800 no-underline rounded shadow-sm text-white hover:bg-green-900"
          >
            Add New Clinic
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white border-b">
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                District
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Doctor
              </th>
              <th scope="col" className="px-6 py-3">
                Location Link
              </th>
              <th scope="col" className="px-6 py-3">
                Open Days
              </th>
              <th scope="col" className="px-6 py-3">
                Image Link
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clinics.map((clinic: any, index: number) => (
              <tr
                key={clinic._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{clinic.name}</td>
                <td className="px-6 py-4">{clinic.address}</td>
                <td className="px-6 py-4">{clinic.district}</td>
                <td className="px-6 py-4">{clinic.phone}</td>
                <td className="px-6 py-4">{clinic.email}</td>
                <td className="px-6 py-4">{clinic.doctor}</td>
                <td className="px-6 py-4">{clinic.location}</td>
                <td className="px-6 py-4">{clinic.openDays}</td>
                <td className="px-6 py-4">{clinic.image}</td>

{/*name, address, district, province, phone, email, doctor, location, openDays, image */}

                <td className="flex items-center px-6 py-4">
                  {/* <Link
                    href={`./../../admin/editProduct/${product._id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3"
                  >
                    <HiPencilAlt size={24} color="gray" />
                  </Link> */}
                  <RemoveClinicButton id={clinic._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
