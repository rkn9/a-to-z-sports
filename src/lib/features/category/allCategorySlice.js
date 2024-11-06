import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api_url from "@/app/utils/urls";
import axios from "axios";
const initialState = {
  category: [],
  loading: false,
  error: null,
};

export const getAllCategory = createAsyncThunk("allcateogry", async () => {
  try {
    const res = await axios.get(`${api_url}category/allcategory`);
    return res.data;
  } catch (error) {
    console.log("error:" + error);
  }
  return api_url;
});

export const AllCategorySlice = createSlice({
  name: "AllCategory",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default AllCategorySlice.reducer;
