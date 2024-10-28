import { createSlice } from '@reduxjs/toolkit';

// reducer pour contenir les polo dans le panier


const initialState = {
    value: [ ],
  };

export const trendSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload)
    },
    removeCart : (state, action) => {
        state.value.filter((e) => {e === action.payload})
    },
    cleanCart : (state, action) => {
        state.value = [null]
    }
  },
});

export const { addToCart, removeCart, cleanCart } = trendSlice.actions;
export default trendSlice.reducer;