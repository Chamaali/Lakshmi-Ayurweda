"use client";
import "./../Table.css"
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CommonTable = ({ headers, diseases, collectionName }: { headers: string[]; diseases: any[]; collectionName: string }) => {
  const totalRows = diseases.length;
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState(diseases.map((disease) => disease.checked || false));

  const handleCheckboxChange = (index:any) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);

    const selectedIds = diseases
      .filter((_, i) => updatedCheckedItems[i])
      .map((disease) => disease._id)
      .join(",");
    router.push(`?selectedIds=${selectedIds}`);
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    try {
      const updateResults = await Promise.all(
        diseases.map((disease, index) =>
          fetch(`/api/${collectionName}/${disease._id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              checked: checkedItems[index],
            }),
          })
        )
      );

      const success = updateResults.every((res) => res.ok);

      if (success) {
        alert("All records updated successfully.");
        console.log("All records updated successfully.");
      } else {
        alert("Some records failed to update.");
        console.error("Some records failed to update.");
      }
    } catch (error) {
      alert("An error occurred while updating records.");
      console.error("An error occurred while updating records:", error);
    }
  };

  return (
    <div className="py-4">
      <form onSubmit={handleSubmit}>
        <div className="d-flex place-content-around">
          <h5 className="capitalize font-bold">{collectionName}</h5>
          <button className="bg-teal-800 hover:bg-teal-700 p-2 m-2 rounded text-white" type="submit">
            Update
          </button>
        </div>

        {/* Wrapper div for the top scrollbar */}
        
        <div className="container border border-gray-300">
          <div className="scrollTop max-h-[500px] ">
            <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 py-2 border-b">No</th>
                  <th className="px-2 py-2 border-b">Check</th>
                  {headers.map((header) => (
                    <th className="px-2 py-2 border-b" key={header}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {diseases.slice().reverse().map((disease, rowIndex) => (
                  <tr key={disease._id} className="odd:bg-white even:bg-gray-50">
                    <td className="px-2 py-2 border-b">{totalRows - rowIndex}</td>
                    <td className="px-2 py-2 border-b">
                      <input
                        type="checkbox"
                        checked={checkedItems[rowIndex]}
                        onChange={() => handleCheckboxChange(rowIndex)}
                      />
                    </td>
                    {headers.map((header) => (
                      <td className="px-2 py-2 border-b" key={header}>
                        {disease[header]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
       
      </form>
    </div>
  );
};

export default CommonTable;
