import { createSlice } from "@reduxjs/toolkit";

//------------------------------------------------
const initialCartState = {
  showCart: false,
  cartItems: [],
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
      if (itemInCart) {
        itemInCart["quantity"] += 1;
        itemInCart["total"] += itemInCart["price"];
      } else {
        state.cartItems.push({
          ...action.payload,
          total: action.payload.price,
        });
      }
    },

    updateQuantity(state, action) {
      const itemToUpdate = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemToUpdate && itemToUpdate["quantity"] > 1) {
        itemToUpdate["quantity"] += action.payload.quantity;
        itemToUpdate["total"] += itemToUpdate["price"] * action.payload.quantity;
        console.log("itemToUpdate['quantity'] =", itemToUpdate["quantity"])
      } else if (
        itemToUpdate &&
        itemToUpdate["quantity"] === 1 &&
        action.payload.quantity === -1
      ) {
        console.log("itemToUpdate = ", itemToUpdate);
        state.cartItems.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
