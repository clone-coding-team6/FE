import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie, setCookie } from '../../shared/Cookie';
import instance from "../..//api/instance";



const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: getCookie('ACCESS_TOKEN'),
  },
};

// 생성
export const __createArticles = createAsyncThunk(
  'createArticles',
  async (payload, thunkAPI) => {
    // console.log('payload!!!!', payload);
    try {
      const formConfig = {
        headers: {
          'Content-type': 'multipart/form-data',
          responseType: 'blob',
          Authorization: getCookie('ACCESS_TOKEN'),
        },
      };
      const {data} = await instance.post(
        "/api/posts",
        payload,
        formConfig
      );
      console.log('업로드!!', data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 전체 조회
export const __readArticles = createAsyncThunk(
  'readArticles',
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/api/posts`, config);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

// 상세 조회
export const __readOneArticle = createAsyncThunk(
  'readOneArticle',
  async (payload, thunkAPI) => {
    try {
      
      const { data } = await instance.get(
        `/api/posts/${payload}`,
        config
      );
      
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// 삭제
export const __deleteArticles = createAsyncThunk(
  'deleteArticles',
  async (payload, thunkAPI) => {
    try {
      const data = await instance.delete(
        `/api/posts/${payload}`,
        config
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 좋아요
export const __likeArticle = createAsyncThunk(
  'likeArticle',
  async (payload, thunkAPI) => {
    try {
      // 기존 방식으로 접근 불가능. payload에 hearder가 담기는 문제 발생
      const data = await instance({
        method: 'post',
        url: `/api/posts/likes/${payload}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: getCookie('ACCESS_TOKEN'),
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  articles: [],
  detail: {},
  isLoading: false,
  error: null,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: {
    // 생성
    [__createArticles.pending]: (state) => {
      state.isLoading = true;
    },
    [__createArticles.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    [__createArticles.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 전체 조회
    [__readArticles.pending]: (state) => {
      state.isLoading = true;
    },
    [__readArticles.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    [__readArticles.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 상세 조회
    [__readOneArticle.pending]: (state) => {
      state.isLoading = true;
    },
    [__readOneArticle.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
      
    },
    [__readOneArticle.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 삭제
    [__deleteArticles.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteArticles.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.articles = state.articles.filter(
        (article) => article.id !== action.payload
      );
    },
    [__deleteArticles.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 좋아요
    [__likeArticle.pending]: (state) => {
      state.isLoading = true;
    },
    [__likeArticle.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    [__likeArticle.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default articleSlice.reducer;
