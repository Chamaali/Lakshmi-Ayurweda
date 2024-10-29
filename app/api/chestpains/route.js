import connectMongoDB from "@/libs/mongodb";
import Chestpain from "@/models/chestpain";
import { NextResponse } from "next/server";

//post chestpains
export async function POST(request) {
    const { qh1, qh2, qh3, qh4, qh5, qh6, qh7, qh8, qh9, qh10, qh11, qh12, qh13, qh14, qh15, qh16, qh17, qh18, qh19, qh20, qh21, qh22, qh23, qh24 } = await request.json();
  
    try {
      await connectMongoDB();
      await Chestpain.create({  qh1, qh2, qh3, qh4, qh5, qh6, qh7, qh8, qh9, qh10, qh11, qh12, qh13, qh14, qh15, qh16, qh17, qh18, qh19, qh20, qh21, qh22, qh23, qh24 });
      return NextResponse.json(
        { message: "Chestpain was created successfully" },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json({ error, message: "Something went wrong" });
    }
  }
  
  //get all chestpains
  export async function GET(request) {
    try {
      await connectMongoDB();
      const chestpains = await Chestpain.find();
      return NextResponse.json({ chestpains });
    } catch (error) {
      return NextResponse.json({ message: "Chestpain was not found" });
    }
  }
