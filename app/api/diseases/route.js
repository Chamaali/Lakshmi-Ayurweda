import connectMongoDB from "@/libs/mongodb";
import Disease from "@/models/disease";
import { NextResponse } from "next/server";

//post diseases
export async function POST(request) {
  const { name, description, image } = await request.json();

  try {
    await connectMongoDB();
    await Disease.create({ name, description, image });
    return NextResponse.json(
      { message: "Disease was created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error, message: "Something went wrong" });
  }
}

//get all diseases
export async function GET(request) {
  try {
    await connectMongoDB();
    const diseases = await Disease.find();
    return NextResponse.json({ diseases });
  } catch (error) {
    return NextResponse.json({ message: "Disease was not found" });
  }
}


// get by desease

//get by name

//delete each disease (check = http://localhost:3001/api/diseases?id=6625a74d63606ac8b4be654b, frontend=http://localhost:3001/api/products?id=${id})
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Disease.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Disease was deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Disease was not deleted." });
  }
}

