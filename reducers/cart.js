import { createSlice } from "@reduxjs/toolkit";

// reducer pour contenir les polo dans le panier

const initialState = {
  value: [],
  render: true,
  color : ""
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
      const item = state.value.find(
        (e) => e._id === action.payload._id && e.size === action.payload.size
      );
      if (item) {
        item.quantity++;
      }
    },
    suppQuantity: (state, action) => {
      const item = state.value.find(
        (e) => e._id === action.payload._id && e.size === action.payload.size
      );
      if (item) {
        item.quantity--;
        if (item.quantity === 0) {
          state.value = state.value.filter(
            (e) =>
              e._id !== action.payload._id || e.size !== action.payload.size
          );
        }
      }
    },
    reRender: (state) => {
      state.render = !state.render;
    },
    chooseColor: (state,action) => {
      state.color = action.payload
      console.log(action.payload)
    }
  },
});

export const totalBasket = (state) =>
  state.cart.value
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

export const totalQuantityBasket = (state) =>
  state.cart.value.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0
  );

export const {
  addToCart,
  removeCart,
  clearCart,
  addQuantity,
  suppQuantity,
  reRender,
  chooseColor
} = trendSlice.actions;
export default trendSlice.reducer;
