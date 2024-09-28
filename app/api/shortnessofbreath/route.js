import connectMongoDB from "@/libs/mongodb";
import ShortnessOfBreath from "@/models/shortnessOfBreath"; // Ensure this path is correct
import { NextResponse } from "next/server";

/// POST shortness of breath responses
export async function POST(request) {
    const {
        qsb1, qsb2, qsb3, qsb4, qsb5, qsb6, qsb7, qsb8, qsb9, qsb10,
        qsb11, qsb12, qsb13, qsb14, qsb15, qsb16, qsb17, qsb18, qsb19, 
        qsb20, qsb21, qsb22, qsb23, qsb24, qsb25, qsb26, qsb27
    } = await request.json();

    try {
        await connectMongoDB();
        await ShortnessOfBreath.create({
            qsb1, qsb2, qsb3, qsb4, qsb5, qsb6, qsb7, qsb8, qsb9, qsb10,
            qsb11, qsb12, qsb13, qsb14, qsb15, qsb16, qsb17, qsb18, qsb19, 
            qsb20, qsb21, qsb22, qsb23, qsb24, qsb25, qsb26, qsb27
        });
        return NextResponse.json(
            { message: "Shortness of breath assessment was created successfully" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ error, message: "Something went wrong" });
    }
}
