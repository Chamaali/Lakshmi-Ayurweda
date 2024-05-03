import connectMongoDB from "@/libs/mongodb";
import Clinic from "@/models/clinic";
import { NextResponse } from "next/server";

//post clinics
export async function POST(request) {
  const { name, address, district, province, phone, doctor, email, location, openDays, image } = await request.json();

  try {
    await connectMongoDB();
    await Clinic.create({ name, address, district, province, phone, doctor, email, location, openDays, image });
    return NextResponse.json(
      { message: "Clinic was created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error, message: "Something went wrong" });
  }
}

//get all clinics
export async function GET(request) {
  try {
    await connectMongoDB();
    const clinics = await Clinic.find();
    return NextResponse.json({ clinics });
  } catch (error) {
    return NextResponse.json({ message: "Clinic was not found" });
  }
}


// get by desease

//get by name

//delete each clinic (check = http://localhost:3001/api/clinics?id=6625a74d63606ac8b4be654b, frontend=http://localhost:3001/api/products?id=${id})
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Clinic.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Clinic was deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Clinic was not deleted." });
  }
}

