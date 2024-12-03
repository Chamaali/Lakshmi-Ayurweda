import connectMongoDB from "@/libs/mongodb";
import Appointment from "./../../../models/appointment"
import { NextResponse } from "next/server";
import authMiddleware from "../middleware";

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

  export async function GET(request) {
    // Authenticate the request
    const authResult = await authMiddleware(request);
    // console.log(request.headers.get("authorization"))

    // If the middleware returns an error (e.g., unauthorized), respond with it
    if (authResult instanceof NextResponse) {
      return authResult;
    }
    try {
      await connectMongoDB();
      const appointments = await Appointment.find();
      return NextResponse.json({ appointments });
    } catch (error) {
      return NextResponse.json({ message: "Appointment was not found" });
    }
  } 

  export async function DELETE(request) {
    // Authenticate the request
    const authResult = await authMiddleware(request);
    console.log(request.headers.get("authorization"))

    // If the middleware returns an error (e.g., unauthorized), respond with it
    if (authResult instanceof NextResponse) {
      return authResult;
    }
    try {
      const id = request.nextUrl.searchParams.get("id");
      await connectMongoDB();
      await Appointment.findByIdAndDelete(id);
      return NextResponse.json(
        { message: "Appointment was deleted successfully" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json({ message: "Appointment was not deleted." });
    }
  }