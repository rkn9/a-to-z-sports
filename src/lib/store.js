import { configureStore } from "@reduxjs/toolkit";
import AllNewsSlice from "./features/news/allNewsSlice";
import AllCategorySlice from "./features/category/allCategorySlice";

export const store = configureStore({
  reducer: { AllNewsSlice, AllCategorySlice },
});
