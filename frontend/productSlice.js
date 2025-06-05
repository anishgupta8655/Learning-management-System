import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsApiCall } from "../Apis/callApi";

export const productThunk = createAsyncThunk("product", async () => {
  try {
    const result = await productsApiCall();
    return result;
  } catch (error) {
    console.log(error);
  }
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    cart: [],
    loading: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((res) => res.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(productThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(productThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(productThunk.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;

export default productSlice.reducer;
