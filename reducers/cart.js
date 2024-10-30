import { createSlice } from "@reduxjs/toolkit";

// reducer pour contenir les polo dans le panier

const initialState = {
  value: [],
  total: 0,
};

export const trendSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload)
      const polo = state.value.find((e) => e._id === action.payload._id)
      if(polo){
        polo.quantity++
      } else {
        state.value.push(action.payload);
      }
    },
    clearCart: (state, action) => {
      state.value = [];
    },
    removeCart: (state, action) => {
      state.value = state.value.filter((e) => e._id !== action.payload);
    },
    addQuantity: (state, action) => {
      const item = state.value.find((e) => e._id === action.payload)
      if(item){
        item.quantity++;
      };
    },
    suppQuantity: (state, action) => {
      const item = state.value.find((e) => e._id === action.payload)
      if(item){
        item.quantity--;
        if(item.quantity === 0){
          state.value = state.value.filter((e) => e._id !== action.payload)
        }
      };
    },
  
  },
});

export const totalBasket = (state) => state.cart.value.reduce(
  (total, item) => total + item.price * item.quantity,
  0
).toFixed(2);

export const { addToCart, removeCart, clearCart, addQuantity, suppQuantity  } =
  trendSlice.actions;
export default trendSlice.reducer;

