// serverComponents/diseases/getDiseaseData.tsx

export const getDiseaseData = async (diseases: string,  headers: unknown = {}) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/${diseases}`,
        {
          cache: "no-cache",
          headers: headers as HeadersInit,
        }
      );
  
      if (!res.ok) {
        throw new Error(`Failed to fetch data for ${diseases}`);
      }
  
      const data = await res.json();
      return data[diseases];
    } catch (error) {
      console.error(`Error loading data for ${diseases}: `, error);
      throw error;
    }
  };
  