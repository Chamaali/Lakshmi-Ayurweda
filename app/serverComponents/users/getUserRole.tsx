export const getUserRole = async (email: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/${email}`);
      const data = await response.json();
  
        const user = data.user;

      if (data.user) {

        console.log(data.user.role);
        return data.user.role;
        

       
         
      } else {
        return null; // User not found
      }
    } catch (error) {
      console.error("Error fetching user role:", error);
      return null;
    }
  };