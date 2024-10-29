// 'use client'

// import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
// import Link from "next/link";
// import { HiPencilAlt } from "react-icons/hi";
// import { getAppointments } from "@/app/serverComponents/appointments/getAppointments";

// const AppointmentsPage =  () => {

//     // const appointments =  getAppointments();
//     const [appointments, setAppointments] = useState<any[]>([]);
//     // const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchAppointments = async () => {
//             try {
//                 const data = await getAppointments();
//                 setAppointments(data); // Update state with fetched appointments
//             } catch (error) {
//                 console.error("Failed to fetch appointments:", error);
//             } 
//         };

//         fetchAppointments();
//     }, []); // Empty dependency array ensures this runs once on mount

// //     if (loading) {
// //         return <div>Loading...</div>; // Display loading state
// //     }    

//     if (!appointments) {
//       console.error("No appointments data fetched");
//       return <div>Error loading appointments</div>;
//     }
  


//   return (
//     <Container className="py-8">
//       <div className="flex flex-row pb-4">
//         <div className="grid basis-3/4">
//           <h4 className="justify-self-center font-bold">Appointment Details</h4>
//         </div>
        
//       </div>

//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr className="bg-white border-b">
//               <th scope="col" className="px-6 py-3">No.</th>
//               <th scope="col" className="px-6 py-3">Consultation</th>
//               <th scope="col" className="px-6 py-3">Plan</th>
//               <th scope="col" className="px-6 py-3">Name</th>
//               <th scope="col" className="px-6 py-3">Age</th>
//               <th scope="col" className="px-6 py-3">Gender</th>
//               <th scope="col" className="px-6 py-3">Phone</th>
//               <th scope="col" className="px-6 py-3">Email</th>
//               <th scope="col" className="px-6 py-3">Total(LKR)</th>
//               <th scope="col" className="px-6 py-3">Payment Method</th>
//               <th scope="col" className="px-6 py-3">Card Number</th>
//               <th scope="col" className="px-6 py-3">Expiration</th>
//               <th scope="col" className="px-6 py-3">CVV</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((appointment:any, index:number) => (
//               <tr
//                 key={index}
//                 className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//               >
//                 <td className="px-6 py-4">{index + 1}</td>
//                 <td className="px-6 py-4">{appointment.consultation}</td>
//                 <td className="px-6 py-4">{appointment.plan}</td>
//                 <td className="px-6 py-4">{appointment.name}</td>
//                 <td className="px-6 py-4">{appointment.age}</td>
//                 <td className="px-6 py-4">{appointment.gender}</td>
//                 <td className="px-6 py-4">{appointment.phone}</td>
//                 <td className="px-6 py-4">{appointment.email}</td>
//                 <td className="px-6 py-4">{appointment.total}</td>
//                 <td className="px-6 py-4">{appointment.paymentMethod}</td>
//                 <td className="px-6 py-4">{appointment.cardNumber}</td>
//                 <td className="px-6 py-4">{appointment.cardExpire}</td>
//                 <td className="px-6 py-4">{appointment.cvv}</td>
//                 <td className="flex items-center px-6 py-4">
//                   {/* <Link
//                     href={`/admin/editAppointment/${index}`}
//                     className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3"
//                   >
//                     <HiPencilAlt size={24} color="gray" />
//                   </Link> */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Container>
//   );
// };

// export default AppointmentsPage;


// 'use client'

// import React, { useEffect, useState } from 'react';
// import { getAppointments } from "@/app/serverComponents/appointments/getAppointments";

// export default function Page() {
//     const [appointments, setAppointments] = useState<any[]>([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchAppointments = async () => {
//             try {
//                 const data = await getAppointments();
//                 setAppointments(data); // Update state with fetched appointments
//             } catch (error) {
//                 console.error("Failed to fetch appointments:", error);
//             } finally {
//                 setLoading(false); // Set loading to false after fetching
//             }
//         };

//         fetchAppointments();
//     }, []); // Empty dependency array ensures this runs once on mount

//     if (loading) {
//         return <div>Loading...</div>; // Display loading state
//     }

//     return (
//         <div>
//             {appointments.map((appointment, index) => (
//                 <div key={index}>
//                     <p className="px-6 py-4">{appointment.consultation}</p>
//                     <p className="px-6 py-4">{appointment.plan}</p>
//                     <p className="px-6 py-4">{appointment.name}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }



import React from "react";
import { Container } from "react-bootstrap";
import { getAppointments } from "@/app/serverComponents/appointments/getAppointments";
import Link from "next/link";

const AppointmentsPage = async () => {
  const appointments = await getAppointments();

  if (!appointments) {
    console.error("No appointments data fetched");
    return <div>Error loading appointments</div>;
  }

  return (
    <Container className="py-8">
      <div className="flex flex-row pb-4 ">
        <div className="grid basis-3/4">
          <h4 className="justify-self-center font-bold">Appointment Details</h4>
        </div>
        <div className="grid basis-1/4">
          <Link
            href="/admin/addNewAppointment"
            className="justify-self-end py-2 px-3 font-medium bg-teal-800 no-underline rounded shadow-sm text-white hover:bg-teal-900"
          >
            Add New Appointment
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white border-b">
               <th scope="col" className="px-6 py-3">No.</th>
               <th scope="col" className="px-6 py-3">Consultation</th>
               <th scope="col" className="px-6 py-3">Plan</th>
               <th scope="col" className="px-6 py-3">Name</th>
               <th scope="col" className="px-6 py-3">Age</th>
               <th scope="col" className="px-6 py-3">Gender</th>
               <th scope="col" className="px-6 py-3">Phone</th>
               <th scope="col" className="px-6 py-3">Email</th>
               <th scope="col" className="px-6 py-3">Total(LKR)</th>
               <th scope="col" className="px-6 py-3">Payment Method</th>
               <th scope="col" className="px-6 py-3">Card Number</th>
               <th scope="col" className="px-6 py-3">Expiration</th>
               <th scope="col" className="px-6 py-3">CVV</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment: any, index: number) => (
              <tr
                key={appointment._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                 <td className="px-6 py-4">{appointment.consultation}</td>
                 <td className="px-6 py-4">{appointment.plan}</td>
                 <td className="px-6 py-4">{appointment.name}</td>
                 <td className="px-6 py-4">{appointment.age}</td>
                 <td className="px-6 py-4">{appointment.gender}</td>
                 <td className="px-6 py-4">{appointment.phone}</td>
                 <td className="px-6 py-4">{appointment.email}</td>
                 <td className="px-6 py-4">{appointment.total}</td>
                 <td className="px-6 py-4">{appointment.paymentMethod}</td>
                 <td className="px-6 py-4">{appointment.cardNumber}</td>
                 <td className="px-6 py-4">{appointment.cardExpire}</td>
                 <td className="px-6 py-4">{appointment.cvv}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default AppointmentsPage;


