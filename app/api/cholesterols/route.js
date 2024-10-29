import connectMongoDB from "@/libs/mongodb";
import Cholesterol from "./../../../models/cholesterol"; 
import { NextResponse } from "next/server";

//post cholesterols
export async function POST(request) {
    const {qh1, qh2, qh3, qh4, qh5, qh6, qh7, qh8, qh9, qh10, qh11, qh12, qh13, qh14, qh15, qh16, qh17, qh18, qh19, qh20, qh21}=await request.json();
    try {
        await connectMongoDB();
        await Cholesterol.create({qh1, qh2, qh3, qh4, qh5, qh6, qh7, qh8, qh9, qh10, qh11, qh12, qh13, qh14, qh15, qh16, qh17, qh18, qh19, qh20, qh21});
        return NextResponse.json(
            { message: "Cholesterol was created successfully" },
            { status: 201 }
          );
    } catch (error) {
        return NextResponse.json({ error, message: "Something went wrong" });
      }
}

//  get all cholesterols
export async function GET(request){
  try{
    await connectMongoDB();
    const cholesterols= await Cholesterol.find();
    return NextResponse.json({cholesterols});
  }catch (error) {
    return NextResponse.json({message : "Cholesterol was not found"});
  }
}