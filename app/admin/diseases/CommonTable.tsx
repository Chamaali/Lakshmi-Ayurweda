"use client";

import { Container } from "react-bootstrap";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CommonTable = ({ headers, diseases }: { headers: string[]; diseases: any[] }) => {
  const totalRows = diseases.length;
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState(
    diseases.map((disease) => disease.checked || false)
  );

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);

    // Update the URL with the checked item IDs
    const selectedIds = diseases
      .filter((_, i) => updatedCheckedItems[i])
      .map((disease) => disease._id)
      .join(",");
    router.push(`?selectedIds=${selectedIds}`);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const updateResults = await Promise.all(
        diseases.map((disease, index) =>
          fetch(`/api/cholesterols/${disease._id}`, {
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
    <Container className="p-2">
      <div className="table-responsive">
        <form onSubmit={handleSubmit}>
          <button className="bg-sky-500" type="submit">Update</button> 
          <table className="table table-bordered table-hover text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="table-light">
              <tr>
                <th className="border-gray-300 text-left">#</th>
                <th className="border-gray-300 text-left">Select</th>
                {headers.map((header) => (
                  <th className="border-gray-300 text-left" key={header}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {diseases.slice().reverse().map((disease, rowIndex) => (
                <tr key={disease._id}>
                  <td className="border-gray-300">{totalRows - rowIndex}</td>
                  <td className="border-gray-300">
                    <input
                      type="checkbox"
                      checked={checkedItems[rowIndex]}
                      onChange={() => handleCheckboxChange(rowIndex)}
                    />
                  </td>
                  {headers.map((header) => (
                    <td className="border-gray-300" key={header}>
                      {disease[header]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </Container>
  );
};

export default CommonTable;
