import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "newpost",
  initialState: {},
  reducers: {
    addPost(state,action){
      
      
    }
  },
});

// export
export const {addPost} = postSlice.actions;

export default postSlice.reducer;