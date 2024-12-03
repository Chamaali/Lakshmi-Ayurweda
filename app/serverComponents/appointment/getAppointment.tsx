export const getAppointments = async (token: any) => {
  try {
    console.log(token)
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments`,
      {
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`,
        },
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Appointments");
    }

    const data = await res.json();
    return data.appointments;
  } catch (error) {
    console.log("Error loading Appointments: ", error);
    return null; // Return null or handle the error appropriately
  }
};
