// app/admin/diseases/cholesterol/page.tsx
import CommonTable from "../CommonTable";
import { getDiseaseData } from "../../../serverComponents/diseases/getDiseaseData"; // Update path as needed

// Define page as an async function to allow server-side fetching
const Page = async () => {
  const headers = [
    'qh1', 'qh2', 'qh3', 'qh4', 'qh5', 'qh6', 'qh7', 'qh8', 
    'qh9', 'qh10', 'qh11', 'qh12', 'qh13', 'qh14', 'qh15', 
    'qh16', 'qh17', 'qh18', 'qh19', 'qh20', 'qh21'
  ];

  // Fetch data directly in the component
  try {
    const diseases = await getDiseaseData('cholesterols');

    return (
      <div>
        {/* <h1>Cholesterol Data</h1> */}
        <CommonTable headers={headers} diseases={diseases} />
      </div>
    );
  } catch (error) {
    return <p>Failed to load data</p>;
  }
};

export default Page;
