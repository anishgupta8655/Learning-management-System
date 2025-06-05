import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./admin.slice";
import cardSlice from "./cardSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    admin: adminSlice,
    card: cardSlice,
    product: productSlice,
  },
});

export default store;
