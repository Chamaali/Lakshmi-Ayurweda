// type infoType = {
//   name: string;
//   id: number;
//   photo: string;
// };

// type propType = {
//   doctors: infoType[];
// };

// const HomeColumnSeven = (props: propType) => {
//   const { doctors } = props;

//   return (
//     <div className="p-4">
//       {doctors.map((doctor)=>(
//         <div>
//             <h1>
//         Displaying {doctor.name} {doctor.id}
//       </h1>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HomeColumnSeven;

// type infoType = {
//     name: string;
//     id: number;
//     photo: string;
//   };

//   type propType = {
//     quotes: infoType[];
//   };


//`${process.env.NEXT_PUBLIC_BASE_URL}/api/doctors`
//'http://localhost:3000/api/doctors'

export const getDoctors = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/doctors`, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch doctors");
    }

    const data = await res.json();

    return data.doctors;
  } catch (error) {
    console.error("Error loading doctors", error);
  }
};

const HomeColumnSeven = async () => {
  const doctors = await getDoctors();

  return (
    <div className="p-4">
      {doctors.map((doctor:any, index:any) => (
        <div key={index}>
          <h1>
            Displaying {doctor.name} 
          </h1>
        </div>
      ))}
    </div>
  );
};

export default HomeColumnSeven;
