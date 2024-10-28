import { createSlice } from "@reduxjs/toolkit";

// reducer pour contenir les polo dans le panier

const initialState = {
  value: [null],
};

export const trendSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
      console.log(action.payload)
    },
    removeCart: (state, action) => {
      state.value.filter((e) => e === action.payload);
    },
    clearCart: (state, action) => {
      state.value = [null];
    },
    addQuantity: (state, action) => {
      state.value.quantity += 1;
    },
    suppQuantity: (state, action) => {
      state.value.quantity -= 1;
    },
  },
});

export const { addToCart,
   removeCart, 
   clearCart, 
   addQuantity, 
   suppQuantity } = trendSlice.actions;
export default trendSlice.reducer;
