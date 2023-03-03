import api from "./axios";

export const getPosts = async (date) => {
  
    try {
      
      const response = await api.get("/posts/todo", {
        params: { date: date },
        
      });
      
      return response.data;
  
    } catch (error) {
      console.log(error);
    }
   
  };