import connectMongoDB from "@/libs/mongodb";
import Appointment from "../../../../models/appointment";

// PATCH request handler
export async function PATCH(req, { params }) {
  const { id } = params;
  await connectMongoDB();

  try {
    const { checked } = await req.json();
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, { checked }, { new: true });
    return new Response(JSON.stringify(updatedAppointment), { status: 200 });
  } catch (error) {
    console.error("Database update error:", error);
    return new Response(JSON.stringify({ message: "Failed to update checked state", error }), { status: 400 });
  }
}

// Other methods (like GET, POST, DELETE) can also be exported similarly if needed
