import connectMongoDB from "@/libs/mongodb";
import Cholesterol from "@/models/cholesterol";





//post cholesterol
export async function POST(request) {
    const { 
        qc1, qc2, qc3, qc4, qc5, qc6, qc7, qc8, qc9, qc10, 
        qc11, qc12, qc13, qc14, qc15, qc16, qc17, qc18, qc19, qc20, 
        qc21, qc22, qc23, qc24, qc25, qc26, qc27, qc28, qc29, qc30, qc31 
      } = await request.json();
      
  
    try {
      await connectMongoDB();
      await Cholesterol.create({ 
        qc1, qc2, qc3, qc4, qc5, qc6, qc7, qc8, qc9, qc10, 
        qc11, qc12, qc13, qc14, qc15, qc16, qc17, qc18, qc19, qc20, 
        qc21, qc22, qc23, qc24, qc25, qc26, qc27, qc28, qc29, qc30, qc31 
      });
      
      return NextResponse.json(
        { message: "Cholesterol was created successfully" },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json({ error, message: "Something went wrong" });
    }
  }
  
  //get all cholesterol
  export async function GET(request) {
    try {
      await connectMongoDB();
      const cholesterol = await Cholesterol.find();
      return NextResponse.json({ cholesterol });
    } catch (error) {
      return NextResponse.json({ message: "Cholesterol was not found" });
    }
  }
