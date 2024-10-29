import connectMongoDB from "@/libs/mongodb";
import Diabetic from "@/models/diabetic";
import { NextResponse } from "next/server";



///post diabetics

export async function POST(request) {
    const {
        qh1, qh2, qh3, qh4, qh5, qh6, qh7, qh8, qh9, qh10, qh11, qh12, qh13, qh14, qh15, qh16, qh17, qh18, qh19, qh20, qh21, qh22
    } = await request.json();

    try {
        await connectMongoDB();
        await Diabetic.create({
            qh1, qh2, qh3, qh4, qh5, qh6, qh7, qh8, qh9, qh10, qh11, qh12, qh13, qh14, qh15, qh16, qh17, qh18, qh19, qh20, qh21, qh22
        });
        return NextResponse.json(
            { message: "Diabetic was created successfully" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ error, message: "Something went wrong" });
    }
}


///get all diabetics


export async function GET(request){
    try{
      await connectMongoDB();
      const diabetics= await Diabetic.find();
      return NextResponse.json({diabetics});
  
    }catch (error) {
      return NextResponse.json({message : "Diabetic was not found"});
    }
  }