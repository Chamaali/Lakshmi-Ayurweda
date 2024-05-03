import connectMongoDB from "@/libs/mongodb";
import Patient from "@/models/patient";
import { NextResponse } from "next/server";

//put(update) a patient
export async function PUT(request, { params }) {
    try {
      const { id } = params;
      const {newName: name, newAge: age, newDistrict: district, newTown: town, newAddress: address, newPhone: phone, newEmail: email, newNote: note} = await request.json();
      await connectMongoDB();
      await Patient.findByIdAndUpdate(id, {name, age, district, town, address, phone, email, note});
      return NextResponse.json(
        { message: "Patient was Updated" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json({ message: "Patient was not Updated" });
    }
  }
  
  
//get one patient by id
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDB();
    const patient = await Patient.findOne({ _id: id });
    return NextResponse.json({ patient }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Patient was not Found" });
  }
}