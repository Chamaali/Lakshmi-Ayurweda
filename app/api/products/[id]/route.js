import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product";
import { NextResponse } from "next/server";

//put(update) a product
export async function PUT(request, { params }) {
    try {
      const { id } = params;
      const {newName: name, newDescription: description, newImage: image, newPrize: price, newSize: size} = await request.json();
      await connectMongoDB();
      await Product.findByIdAndUpdate(id, {
        name,
        description,
        image,
        price,
        size,
      });
      return NextResponse.json(
        { message: "Product was Updated" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json({ message: "Product was not Updated" });
    }
  }
  
  
//get one product by id
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDB();
    const product = await Product.findOne({ _id: id });
    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Product was not Found" });
  }
}