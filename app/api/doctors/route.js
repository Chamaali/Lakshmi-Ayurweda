import connectMongoDB from "@/libs/mongodb";
import Doctor from "@/models/doctor";
import { NextResponse } from "next/server";

//post doctors
export async function POST(request) {
    const { name, title, description, image, phone, clinicName, clinicLocation, clinicPhone } = await request.json();
  
    try {
      await connectMongoDB();
      await Doctor.create({ name, title, description, image, phone, clinicName, clinicLocation, clinicPhone });
      return NextResponse.json(
        { message: "Doctor was created successfully" },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json({ error, message: "Something went wrong" });
    }
  }

//get all doctors
export async function GET(request) {
    try {
      await connectMongoDB();
      const doctors = await Doctor.find();
      return NextResponse.json({ doctors });
    } catch (error) {
      return NextResponse.json({ message: "Doctor was not found" });
    }
  } 
  
//delete each doctor (check = http://localhost:3001/api/doctors?id=6625a74d63606ac8b4be654b, frontend=http://localhost:3001/api/doctors?id=${id})
export async function DELETE(request) {
    try {
      const id = request.nextUrl.searchParams.get("id");
      await connectMongoDB();
      await Doctor.findByIdAndDelete(id);
      return NextResponse.json(
        { message: "Doctor was deleted successfully" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json({ message: "Doctor was not deleted." });
    }
  }  