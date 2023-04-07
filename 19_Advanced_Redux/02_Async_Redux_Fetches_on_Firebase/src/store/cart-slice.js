import { createSlice } from "@reduxjs/toolkit";

//------------------------------------------------
const initialCartState = {
  // showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
  cartItemsChanged: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    //---------------------------------------------
    replaceCart(state, action) {
      console.log("action = ", action);
      state.cartItems = action.payload.cartItems;
      state.totalItems = action.payload.totalItems;
      state.totalPrice = action.payload.totalPrice;
    },

    //---------------------------------------------
    addToCart(state, action) {
      /* First: check if item is already in cart */
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (!itemInCart) {
        /* add new item */
        state.cartItems.push({
          ...action.payload,
          subTotalPrice: action.payload.price,
        });
      } else {
        /* item in cart, increase quantity */
        itemInCart.subTotalPrice += action.payload.price;
        itemInCart.quantity += action.payload.quantity;
      }

      // anyway
      state.totalPrice += action.payload.price;
      state.totalItems += action.payload.quantity;
      state.cartItemsChanged = true;
    },

    //---------------------------------------------
    // removeFromCart(state, action) {},

    //---------------------------------------------
    updateQuantity(state, action) {
      /* Here you can increase/ decrease item quantity.
      If quantity = 1, then decreasing = remove item */

      const itemToUpdate = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (
        itemToUpdate &&
        itemToUpdate["quantity"] === 1 &&
        action.payload.quantity === -1
      ) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        itemToUpdate["quantity"] += action.payload.quantity;
        itemToUpdate["subTotalPrice"] +=
          itemToUpdate["price"] * action.payload.quantity;
      }
      // any case
      state.totalItems += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
      state.cartItemsChanged = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
