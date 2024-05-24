import connectMongoDB from "@/libs/mongodb";
import Doctor from "@/models/doctor";
import { NextResponse } from "next/server";

//put(update) a doctor
export async function PUT(request, { params }) {
    try {
      const { id } = params;
      const {newName: name, newTitle: title, newDescription: description, newImage: image, newPhone: phone, newEmail: email, newClinicNumber: clinicNumber} = await request.json();
      await connectMongoDB();
      await Doctor.findByIdAndUpdate(id, {
        name,
        title,
        description,
        image,
        phone,
        email,
        clinicNumber
      });
      return NextResponse.json(
        { message: "Doctor was Updated" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json({ message: "Doctor was not Updated" });
    }
  }
  
  
//get one doctor by id
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDB();
    const doctor = await Doctor.findOne({ _id: id });
    return NextResponse.json({ doctor }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Doctor was not Found" });
  }
}