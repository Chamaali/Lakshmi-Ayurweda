import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

//post products
export async function POST(request) {
  const { name, description, image, price, size } = await request.json();

  try {
    await connectMongoDB();
    await Product.create({ name, description, image, price, size });
    return NextResponse.json(
      { message: "Product was created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error, message: "Something went wrong" });
  }
}

//get all products
export async function GET(request) {
  try {
    await connectMongoDB();
    const products = await Product.find();
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ message: "Product was not found" });
  }
}


// get by desease

//get by name

//delete each product (check = http://localhost:3001/api/products?id=6625a74d63606ac8b4be654b, frontend=http://localhost:3001/api/products?id=${id})
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Product.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Product was deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Product was not deleted." });
  }
}

