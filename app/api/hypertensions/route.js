import connectMongoDB from "@/libs/mongodb";
import Hypertension from "@/models/hypertension";
import { NextResponse } from "next/server";



//post hypertensions

export async function POST(request) {
    const {qh1, qh2, qh3, qh4, qh5, qh6, qh7, qh8, qh9, qh10, qh11, qh12, qh13, qh14, qh15, qh16, qh17, qh18, qh19, qh20}=await request.json();

    try {
        await connectMongoDB();
        await Hypertension.create({qh1, qh2, qh3, qh4, qh5, qh6, qh7, qh8, qh9, qh10, qh11, qh12, qh13, qh14, qh15, qh16, qh17, qh18, qh19, qh20});
        return NextResponse.json(
            { message: "Hypertension was created successfully" },
            { status: 201 }
          );
    } catch (error) {
        return NextResponse.json({ error, message: "Something went wrong" });
      }

}


//  get all hypertensions

export async function GET(request){
  try{
    await connectMongoDB();
    const hypertensions= await Hypertension.find();
    return NextResponse.json({hypertensions});

  }catch (error) {
    return NextResponse.json({message : "Hypertension was not found"});
  }
}