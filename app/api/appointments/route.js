import connectMongoDB from "@/libs/mongodb";
import Appointment from "./../../../models/appointment"
import { NextResponse } from "next/server";

//post appointments
export async function POST(request) {
    const { name, age, gender, phone, email, typeOfConsultation, typeofPackage, totalAmount, url, checked, timestamps } = await request.json();
  
    try {
      await connectMongoDB();
      await Appointment.create({ name, age, gender, phone, email, typeOfConsultation, typeofPackage, totalAmount, url, checked, timestamps });
      return NextResponse.json(
        { message: "Appointment was created successfully" },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json({ error, message: "Something went wrong" });
    }
  }