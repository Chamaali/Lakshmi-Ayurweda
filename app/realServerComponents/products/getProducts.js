const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/products", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
  
      const data = await res.json();
      console.log(data); // Log the data to check the response structure
      return data;
    } catch (error) {
      console.error("Error loading products", error);
      throw error; // Re-throw the error so it can be caught in the component
    }
  };

  export default getProducts;
  