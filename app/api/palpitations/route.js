import connectMongoDB from "@/libs/mongodb";
import Palitation from "@/models/palitation";
import { NextResponse } from "next/server";



///post palitations

export async function POST(request) {
    const {
        qp1, qp2, qp3, qp4, qp5, qp6, qp7, qp8, qp9, qp10,
        qp11, qp12, qp13, qp14, qp15, qp16, qp17, qp18, qp19, qp20,
        qp21, qp22, qp23, qp24, qp25, qp26, qp27, qp28
    } = await request.json();

    try {
        await connectMongoDB();
        await Palitation.create({
            qp1, qp2, qp3, qp4, qp5, qp6, qp7, qp8, qp9, qp10,
            qp11, qp12, qp13, qp14, qp15, qp16, qp17, qp18, qp19, qp20,
            qp21, qp22, qp23, qp24, qp25, qp26, qp27, qp28
        });
        return NextResponse.json(
            { message: "Palitation was created successfully" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ error, message: "Something went wrong" });
    }
}










///get all palitations


export async function GET(request){
    try{
      await connectMongoDB();
      const palitations= await Palitation.find();
      return NextResponse.json({palitations});
  
    }catch (error) {
      return NextResponse.json({message : "Palitation was not found"});
    }
  }