import { useState } from "react";

export const useCheckboxChange = (diseases: any[], collectionName: string) => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(diseases.length).fill(false));

  const handleCheckboxChange = async (index: number, diseaseId: string) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);

    try {
      const response = await fetch(`/api/${collectionName}/${diseaseId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ checked: updatedCheckedItems[index] }),
      });

      if (!response.ok) {
        throw new Error("Failed to update the checked state in the database");
      }
    } catch (error) {
      console.error("Error updating checked state:", error);
    }
  };

  return { checkedItems, handleCheckboxChange };
};
