// app/api/cholesterols/route.js

import { NextResponse } from "next/server";
import connectMongoDB from "./../../../libs/mongodb";
import Cholesterol from "./../../../models/cholesterol";

// Add this function to handle OPTIONS requests
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400'
    },
  });
}

export async function POST(request) {
    try {
        const data = await request.json();
        await connectMongoDB();
        await Cholesterol.create(data);

        return new NextResponse(
            JSON.stringify({ message: "Cholesterol was created successfully" }), 
            {
                status: 201,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                }
            }
        );
    } catch (error) {
        console.error("Error creating cholesterol entry:", error);
        
        return new NextResponse(
            JSON.stringify({ error: error.message }), 
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                }
            }
        );
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

