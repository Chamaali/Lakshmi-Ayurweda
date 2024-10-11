

export const getAppointments = async () => {
    
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments`,
      {
        // cache: "force-cache",
        // cache: "no-store",
        cache: "no-cache"
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch appointments");

    }

    const data = await res.json();
    return data.appointments;
  } catch (error) {
    console.error("Error loading appointments", error);
    
  }
};

