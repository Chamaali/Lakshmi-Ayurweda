import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";



export async function GET(request, { params }) {
  try {
    const { email } = params;
    await connectMongoDB();
    const user = await User.findOne({ email: email });
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "User was not Found" });
  }
}
