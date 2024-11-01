import { useState } from "react";

export const useCheckboxChange = (diseases: any[]) => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(diseases.map((disease) => disease.checked || false));

  const handleCheckboxChange = async (index: number, diseaseId: string) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);

    try {
      const response = await fetch(`/api/cholesterols/${diseaseId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ checked: updatedCheckedItems[index] }),
      });

      if (response.ok) {
        console.log(`Record with ID ${diseaseId} updated successfully.`);
        alert(`Record with ID ${diseaseId} updated successfully.`);
      } else {
        throw new Error(`Failed to update record with ID ${diseaseId}.`);
      }
    } catch (error) {
      console.error("Error updating checked state:", error);
      alert("An error occurred while updating the record.");
    }
  };

  return { checkedItems, handleCheckboxChange };
};
