import React from "react";
import EditDoctorForm from "../../component/EditDoctorForm";

const getDoctorById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/doctors/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch doctor");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditDoctor({ params }) {
  const { id } = params;
  const { doctor } = await getDoctorById(id);
  const { name, title, description, image, phone, clinicNumber, email } = doctor;

  return <EditDoctorForm id={id} name={name} title={title} description={description} image={image} phone={phone} email={email} clinicNumber={clinicNumber}/>;
}





