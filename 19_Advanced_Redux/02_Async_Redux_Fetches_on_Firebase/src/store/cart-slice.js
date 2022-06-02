import { createSlice } from "@reduxjs/toolkit";

//------------------------------------------------
const initialCartState = {
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },

    addToCart(state, action) {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (!itemInCart) {
        // add new item
        state.cartItems.push({
          ...action.payload,
          subTotalPrice: action.payload.price,
        });
        state.totalPrice += action.payload.price;
        state.totalItems += action.payload.quantity;
      } else {
        // item in cart, increase quantity
        state.totalItems += action.payload.quantity;
        state.totalPrice += action.payload.price;
        itemInCart.subTotalPrice += action.payload.price;
        itemInCart.quantity += action.payload.quantity;
      }
    },

    removeFromCart(state, action) {},

    updateQuantity(state, action) {
      const itemToUpdate = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (
        itemToUpdate &&
        itemToUpdate["quantity"] === 1 &&
        action.payload.quantity === -1
      ) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.totalItems += action.payload.quantity;
        state.totalPrice += action.payload.price * action.payload.quantity;
      } else {
        itemToUpdate["quantity"] += action.payload.quantity;
        itemToUpdate["subTotalPrice"] +=
          itemToUpdate["price"] * action.payload.quantity;
        state.totalItems += action.payload.quantity;
        state.totalPrice += action.payload.price * action.payload.quantity;
      }
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
