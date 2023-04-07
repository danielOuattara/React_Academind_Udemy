/* Redux store using Toolkit 
----------------------------*/

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products-slice";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;
