import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

//post users
export async function POST(request) {
  const { firstName, lastName, email, phone, password } = await request.json();

  try {
    await connectMongoDB();
    await User.create({ firstName, lastName, email, phone, password });
    return NextResponse.json(
      { message: "User was created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error, message: "Something went wrong" });
  }
}

//get all users
export async function GET(request) {
    try {
      await connectMongoDB();
      const users = await User.find();
      return NextResponse.json({ users });
    } catch (error) {
      return NextResponse.json({ message: "User was not found" });
    }
  }
