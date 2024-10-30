import { createSlice } from "@reduxjs/toolkit";
import { React } from "react";

// reducer pour contenir les polo dans le panier

const initialState = {
  value: [],
  render: true,
};

export const trendSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      const polo = state.value.find(
        (e) => e._id === action.payload._id && e.size === action.payload.size
      );
      if (polo) {
        polo.quantity++;
      } else {
        state.value.push(action.payload);
      }
    },
    clearCart: (state, action) => {
      state.value = [];
    },
    removeCart: (state, action) => {
      state.value = state.value.filter(
        (e) => e._id !== action.payload._id || e.size !== action.payload.size
      );
    },
    addQuantity: (state, action) => {
      const item = state.value.find((e) => e._id === action.payload._id && e.size === action.payload.size);
      if (item) {
        item.quantity++;
      }
    },
    suppQuantity: (state, action) => {
      const item = state.value.find((e) => e._id === action.payload._id && e.size === action.payload.size);
      if (item) {
        item.quantity--;
        if (item.quantity === 0) {
          state.value = state.value.filter((e) => e._id !== action.payload._id || e.size !== action.payload.size);
        }
      }
    },
    reRender: (state) => {
      state.render = !state.render;
    },
  },
});

export const totalBasket = (state) =>
  state.cart.value
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

export const {
  addToCart,
  removeCart,
  clearCart,
  addQuantity,
  suppQuantity,
  reRender,
} = trendSlice.actions;
export default trendSlice.reducer;
