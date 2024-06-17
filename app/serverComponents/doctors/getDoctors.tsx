export const getDoctors = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/doctors`, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch doctors");
    }

    const data = await res.json();

    return data.doctors;
  } catch (error) {
    console.error("Error loading doctors", error);
  }
};
//http://localhost:3000/api/doctors