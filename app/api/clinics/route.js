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


  //delete each clinic (check = http://localhost:3001/api/products?id=6625a74d63606ac8b4be654b, frontend=http://localhost:3001/api/products?id=${id})
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
  