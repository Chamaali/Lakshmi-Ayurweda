import CommonTable from "./../CommonTable";
import connectMongoDB from "@/libs/mongodb";
import Cholesterol from "@/models/cholesterol";

interface Cholesterol {
    qh1: String;
    qh2: String;
    qh3: String;
    qh4: String;
    qh5: String;
    qh6: String;
    qh7: String;
    qh8: String;
    qh9: String;
    qh10: String;
    qh11: String;
    qh12: String;
    qh13: String;
    qh14: String;
    qh15: String;
    qh16: String;
    qh17: String;
    qh18: String;
    qh19: String;
    qh20: String;
    qh21: String; 
  checked: boolean;
  // Add any other properties if necessary
}

export default async function CholesterolsPage() {
  await connectMongoDB();
  const cholesterols = await Cholesterol.find({});
  const headers = ["qh1", "qh2", "qh3", "qh4", "qh5", "qh6", "qh7", "qh8", "qh9", "qh10", "qh11", "qh12", "qh13", "qh14", "qh15", "qh16", "qh17", "qh18", "qh19", "qh20", "qh21",]; // Adjust headers based on your model

  return (
    <div>
      <h6>Cholesterols</h6>
      <CommonTable headers={headers} diseases={JSON.parse(JSON.stringify(cholesterols))} collectionName="cholesterols" />
    </div>
  );
}
