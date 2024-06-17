export const getProducts = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      {
        cache: "force-cache",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    return data.products;
  } catch (error) {
    console.error("Error loading products", error);
  }
};
