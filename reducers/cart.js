import { createSlice } from "@reduxjs/toolkit";

// reducer pour contenir les polo dans le panier

const initialState = {
  value: [],
};

export const trendSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
      console.log(action.payload);
    },
    clearCart: (state, action) => {
      state.value = [];
    },
    removeCart: (state, action) => {
      state.value = state.value.filter((e) => e._id !== action.payload);
    },
    addQuantity: (state, action) => {
      state.value.some((e) => e_id === action.payload)
    },
    suppQuantity: (state, action) => {
      state.value.quantity -= 1;
    },
  },
});

export const { addToCart, removeCart, clearCart, addQuantity, suppQuantity } =
  trendSlice.actions;
export default trendSlice.reducer;
