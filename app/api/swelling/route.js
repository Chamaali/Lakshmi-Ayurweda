import connectMongoDB from "@/libs/mongodb";
import Swelling from "@/models/swelling"; 
import { NextResponse } from "next/server";

/// POST swelling responses
export async function POST(request) {
    const {
        qsw1, qsw2, qsw3, qsw4, qsw5, qsw6, qsw7, qsw8, qsw9, qsw10,
        qsw11, qsw12, qsw13, qsw14, qsw15, qsw16, qsw17, qsw18, qsw19, 
        qsw20, qsw21, qsw22, qsw23, qsw24, qsw25, qsw26, qsw27
    } = await request.json();

    try {
        await connectMongoDB();
        await Swelling.create({
            qsw1, qsw2, qsw3, qsw4, qsw5, qsw6, qsw7, qsw8, qsw9, qsw10,
            qsw11, qsw12, qsw13, qsw14, qsw15, qsw16, qsw17, qsw18, qsw19, 
            qsw20, qsw21, qsw22, qsw23, qsw24, qsw25, qsw26, qsw27
        });
        return NextResponse.json(
            { message: "Swelling assessment was created successfully" },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ error, message: "Something went wrong" });
    }
}
