import connectMongoDB from "@/libs/mongodb";
import Chestpain from "@/models/chestpain";
import { NextResponse } from "next/server";

//post chestpains
export async function POST(request) {
    const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24 } = await request.json();
  
    try {
      await connectMongoDB();
      await Chestpain.create({ q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24 });
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
