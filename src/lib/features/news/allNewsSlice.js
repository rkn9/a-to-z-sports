import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api_url from "@/app/utils/urls";
import axios from "axios";
const initialState = {
  news: [],
  loading: false,
  error: null,
};

export const getAllNews = createAsyncThunk("allnews", async () => {
  try {
    const res = await axios.get(`${api_url}news/allnews`);
    return res.data;
  } catch (error) {
    console.log("error:" + error);
  }
  return api_url;
});

export const AllNewsSlice = createSlice({
  name: "AllNews",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(getAllNews.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default AllNewsSlice.reducer;
