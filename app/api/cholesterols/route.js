// app/api/cholesterols/route.js

// import { NextResponse } from "next/server";
// import connectMongoDB from "./../../../libs/mongodb";
// import Cholesterol from "./../../../models/cholesterol";

// // Add this function to handle OPTIONS requests
// export async function OPTIONS(request) {
//   return new NextResponse(null, {
//     status: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//       'Access-Control-Max-Age': '86400'
//     },
//   });
// }

// export async function POST(request) {
//     try {
//         const data = await request.json();
//         await connectMongoDB();
//         await Cholesterol.create(data);

//         return new NextResponse(
//             JSON.stringify({ message: "Cholesterol was created successfully" }), 
//             {
//                 status: 201,
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Access-Control-Allow-Origin': '*',
//                     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//                     'Access-Control-Allow-Headers': 'Content-Type, Authorization'
//                 }
//             }
//         );
//     } catch (error) {
//         console.error("Error creating cholesterol entry:", error);
        
//         return new NextResponse(
//             JSON.stringify({ error: error.message }), 
//             {
//                 status: 500,
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Access-Control-Allow-Origin': '*',
//                     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//                     'Access-Control-Allow-Headers': 'Content-Type, Authorization'
//                 }
//             }
//         );
//     }
// }


// import connectMongoDB from "@/libs/mongodb";
// import Cholesterol from "./../../../models/cholesterol"; 
// import { NextResponse } from "next/server";
// import corsMiddleware from "@/middleware/cors";

// // POST handler for creating cholesterol records
// export async function POST(request) {
//   // Apply CORS middleware
//   await corsMiddleware(request, NextResponse);

//   const { qh1, qh2, qh3, qh4, qh5, qh6, qh7, qh8, qh9, qh10, qh11, qh12, qh13, qh14, qh15, qh16, qh17, qh18, qh19, qh20, qh21 } = await request.json();
//   try {
//     await connectMongoDB();
//     await Cholesterol.create({ qh1, qh2, qh3, qh4, qh5, qh6, qh7, qh8, qh9, qh10, qh11, qh12, qh13, qh14, qh15, qh16, qh17, qh18, qh19, qh20, qh21 });
    
//     return NextResponse.json(
//       { message: "Cholesterol was created successfully" },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json({ error, message: "Something went wrong" });
//   }
// }

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

