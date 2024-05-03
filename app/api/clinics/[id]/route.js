import connectMongoDB from "@/libs/mongodb";
import Clinic from "@/models/clinic";
import { NextResponse } from "next/server";

//put(update) a clinic
export async function PUT(request, { params }) {
    try {
      const { id } = params;
      const {newName: name, newAddress: address, newDistrict: district, newProvince: province, newPhone: phone, newDoctor: doctor, newEmail: email, newLocation: location, newOpenDays: openDays, newImage: image } = await request.json();
      await connectMongoDB();
      await Clinic.findByIdAndUpdate(id, {
        name,
        address,
        district,
        province,
        phone,
        doctor,
        email,
        location,
        openDays,
        image
      });
      return NextResponse.json(
        { message: "Clinic was Updated" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json({ message: "Clinic was not Updated" });
    }
  }
  
  
//get one clinic by id
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDB();
    const clinic = await Clinic.findOne({ _id: id });
    return NextResponse.json({ clinic }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Clinic was not Found" });
  }
}