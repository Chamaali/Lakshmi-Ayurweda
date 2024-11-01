import connectMongoDB from "@/libs/mongodb";
import Cholesterol from "../../../../models/cholesterol";

export async function PATCH(req, { params }) {
  const { id } = params;
  await connectMongoDB();

  try {
    const { checked } = await req.json();
    const updatedCholesterol = await Cholesterol.findByIdAndUpdate(id, { checked }, { new: true });
    
    if (!updatedCholesterol) {
      return new Response(JSON.stringify({ message: "Record not found" }), { status: 404 });
    }

    console.log("Successfully updated cholesterol record with ID:", id);
    return new Response(JSON.stringify(updatedCholesterol), { status: 200 });
  } catch (error) {
    console.error("Database update error:", error);
    return new Response(JSON.stringify({ message: "Failed to update checked state", error }), { status: 400 });
  }
}
