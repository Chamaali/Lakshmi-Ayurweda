import connectMongoDB from "@/libs/mongodb";
import Disease from "@/models/disease";
import { NextResponse } from "next/server";

//put(update) a disease
export async function PUT(request, { params }) {
    try {
      const { id } = params;
      const {newName: name, newDescription: description, newImage: image} = await request.json();
      await connectMongoDB();
      await Disease.findByIdAndUpdate(id, {
        name,
        description,
        image
      });
      return NextResponse.json(
        { message: "Disease was Updated" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json({ message: "Disease was not Updated" });
    }
  }
  
  
//get one disease by id
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDB();
    const disease = await Disease.findOne({ _id: id });
    return NextResponse.json({ disease }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Disease was not Found" });
  }
}