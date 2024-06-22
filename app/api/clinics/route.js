import connectMongoDB from "@/libs/mongodb";
import Clinic from "@/models/clinic";
import { NextResponse } from "next/server";


export async function GET(request) {
    try {
      await connectMongoDB();
      const clinics = await Clinic.find();
      return NextResponse.json({ clinics });
    } catch (error) {
      return NextResponse.json({ message: "Clinic was not found" });
    }
  } 


  export async function POST(request) {
    const { name, address, district, province, phone, email, doctor, location, openDays, image } = await request.json();
  
    try {
      await connectMongoDB();
      const res = await Clinic.create({ name, address, district, province, phone, email, doctor, location, openDays, image});
      return NextResponse.json(
        { message: "Clinic was created successfully", res },
        { status: 201 }

      );
    } catch (error) {
      return NextResponse.json({ error, message: "Something went wrong" });
    }
  }