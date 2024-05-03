import connectMongoDB from "@/libs/mongodb";
import Patient from "@/models/patient";
import { NextResponse } from "next/server";

//post patients
export async function POST(request) {
  const { name, age, district, town, address, phone, email, note } = await request.json();

  try {
    await connectMongoDB();
    await Patient.create({ name, age, district, town, address, phone, email, note });
    return NextResponse.json(
      { message: "Patient was created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error, message: "Something went wrong" });
  }
}

//get all patients
export async function GET(request) {
  try {
    await connectMongoDB();
    const patients = await Patient.find();
    return NextResponse.json({ patients });
  } catch (error) {
    return NextResponse.json({ message: "Patient was not found" });
  }
}


// get by desease

//get by name

//delete each patient (check = http://localhost:3001/api/patients?id=6625a74d63606ac8b4be654b, frontend=http://localhost:3001/api/products?id=${id})
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Patient.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Patient was deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Patient was not deleted." });
  }
}

