import connectMongoDB from "@/libs/mongodb";
import authMiddleware from "../middleware";

import User from "@/models/user";
import { NextResponse } from "next/server";

// Get all users
export async function GET(request) {
  // Authenticate the request
  const authResult = await authMiddleware(request);

  // If the middleware returns an error (e.g., unauthorized), respond with it
  if (authResult instanceof NextResponse) {
    return authResult;
  }

  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Fetch all users from the database
    const users = await User.find();

    // Respond with the list of users
    return NextResponse.json({ users });
  } catch (error) {
    // Handle errors during the database query
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Signup (Create a new user)
export async function POST(request) {
  const { role, name, address, email, phone, password } = await request.json();

  try {
    await connectMongoDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    // Create a new user
    const user = await User.create({ role, name, address, email, phone, password });
    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
