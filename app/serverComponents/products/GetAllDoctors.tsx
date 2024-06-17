// import HomeColumnSeven from '../../components/home/HomeColumnSeven'

// export const GetAllDoctors = () => {

//     const doctors = [
//         {
//           name: "Dr.S. Priyantha",
//           id: 1,
//           photo: "https://via.placeholder.com/300x150",
//         },
//         {
//           name: "Dr. N. Kamal",
//           id: 2,
//           photo: "https://via.placeholder.com/300x150",
//         },
//         {
//           name: "Dr. R. Saman",
//           id: 3,
//           photo: "https://via.placeholder.com/300x150",
//         },
//     ];

//   return (
//     <div>

//             <HomeColumnSeven doctors={doctors} />

//     </div>
//   )
// }


// 'use client'

// import { useEffect, useState } from "react";
// import HomeColumnSeven from "../../components/home/HomeColumnSeven";
// import doctors from './../../constants/doctors'
// import { getDoctors } from '../../realServerComponents/doctors/getDoctors';




//   export default getDoctors;
  


// export const GetAllDoctors = () => {

//     const quotes = getDoctors();

//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     const fetchDoctots = async () => {
//       try {
//         const data = await getDoctors();
//         console.log(data);
//         setDoctors(data.doctots); // Assuming 'doctots' is the correct key in the response
//       } catch (error) {
//         console.log("Couldn't fetch products", error);
//       }
//     };

//     fetchDoctots();
//   }, []);

//   return (
//     <div>
//       <HomeColumnSeven quotes={quotes} />
//     </div>
//   );
// };
