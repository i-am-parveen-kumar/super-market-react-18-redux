import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      let product = null;
      if (index !== -1) {
        product = state.products[index];
        product.qty = product.qty + 1;
      } else {
        index = state.products.length > 0 ? state.products.length : 0;
        product = { ...action.payload, qty: 1 };
      }
      state.products[index] = product;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

const exports = {
  products: productsSlice.reducer,
};

export default exports;
