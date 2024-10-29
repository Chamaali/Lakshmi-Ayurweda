import connectMongoDB from "@/libs/mongodb";
import Appointment from "../../../models/appointment";
import { NextResponse } from "next/server";

//post Appointment
export async function POST(request) {
    const { consultation, plan, name, age, gender, phone, email, total, paymentMethod, cardNumber, cardExpire, cvv} = await request.json();
  
    try {
      await connectMongoDB();
      await Appointment.create({ consultation, plan, name, age, gender, phone, email, total, paymentMethod, cardNumber, cardExpire, cvv });
      return NextResponse.json(
        { message: "Appointment was created successfully" },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json({ error, message: "Something went wrong" });
    }
  }
  
  //get all appointments
  export async function GET(request) {
    try {
      await connectMongoDB();
      const appointments = await Appointment.find();
      return NextResponse.json({ appointments });
    } catch (error) {
      return NextResponse.json({ message: "Appointment was not found" });
    }
  }
