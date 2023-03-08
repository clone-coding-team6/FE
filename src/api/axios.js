import instance from "./instance";

const makeHeaders = (accessToken) => {
  return { Authorization: `Bearer  ${accessToken}` };
};

export const signup = async (newUser) => {
  try {
    
    const res = await instance.post(
      "/api/users/signup",
      newUser
    );
    return res;
  } catch (err) { 
    if (instance.isAxiosError(err)) {
      alert(`Error : ${err.response?.data.msg}`);
      return;
    }
    console.error("비처리에러 : ", err);
  }
};

export const login = async (user) => {
  try {
    const res = await instance.post(
      "/api/users/login",
      user
    );
    return res;
  } catch (err) {
    if (instance.isAxiosError(err)) {
      alert(`Error : ${err.response?.data.msg}`);
      return;
    }
    console.error("비처리에러 : ", err);
  }
};

export const getCard = async () => {
  
  try {
    
    const response = await instance.get("/api/posts");
    console.log(response);
    return response.data;
    

  } catch (error) {
    console.log(error);
  }
 
};

export const getCardOne = async (postId) => {
  
  try {
    
    const response = await instance.get("/api/posts",{
      params:{id:postId}
    });

    return response.data;

  } catch (error) {
    console.log(error);
  }
 
};
export const postCard = async (newCard) => {
  
    await instance.post(`/api/posts`,newCard);

};

export const SwitchCard = async (payload) => {
  
  try {
    
    await instance.put(`/api/posts/${payload.id}`,{
      content : payload.content
    });

  } catch (error) {
    console.log(error);
  }
 
};

export const DeleteCard = async (id) => {
  
  try {
    
     await instance.put(`/api/posts/${id}`);

  } catch (error) {
    console.log(error);
  }
};
export const postComment = async (comment) => {
  
  await instance.post(`/api/comment`,comment);

};
export const deleteComment = async (id) => {
  
  try {
    
    await instance.delete(`/api/comment/${id}`);

  } catch (error) {
    console.log(error);
  }
};
export const likesCard = async (id) => {
  
  try {
    
    await instance.delete(`/api/posts/likes/${id}`);

  } catch (error) {
    console.log(error);
  }
};
export const likesComment = async (id) => {
  
  try {
    
    await instance.delete(`/api/comment/likes/${id}`);

  } catch (error) {
    console.log(error);
  }
};

