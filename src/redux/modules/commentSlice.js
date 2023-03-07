import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie, setCookie } from '../../shared/Cookie';
import instance from "../..//api/instance";
import { __readArticles, __readOneArticle } from './articleSlice';


const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: getCookie('ACCESS_TOKEN'),
  },
};

// 생성
export const __createComment = createAsyncThunk(
  'createComment',
  async (payload, thunkAPI) => {
    try {
      // console.log(payload);
      const id =parseInt(payload.postId);
      const {data} = await instance.post(
        `/api/comment/?postId=${id}`,
        {content:payload.content},
        config
      );
      console.log(data);
      return thunkAPI.dispatch(__readOneArticle(payload.postId));
      // return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
  {
    // serializableError 옵션 사용
    serializableError: true,
  }
);

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: {
    // 생성
    [__createComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__createComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
      console.log(action.payload);
    },
    [__createComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    // 전체 조회
    // [__readArticles.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__readArticles.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.articles = action.payload;
    // },
    // [__readArticles.rejected]: (state, action) => {
    //   state.error = action.payload;
    // },
    // 상세 조회
    // [__readOneArticle.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__readOneArticle.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.detail = action.payload;
    // },
    // [__readOneArticle.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // 삭제
    // [__deleteArticles.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [__deleteArticles.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.articles = state.articles.filter(
    //     (article) => article.id !== action.payload
    //   );
    // },
    // [__deleteArticles.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export default commentSlice.reducer;
