export const getClinics = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api//clinics`,
      {
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Clinics");
    }

    const data = await res.json();
    return data.clinics;
  } catch (error) {
    console.log("Error loading Clinics: ", error);
  }
};
