/* Redux store using Toolkit 
----------------------------*/

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products-slice";
import cartReducer from "./cart-slice";
import uiReducer from "./ui-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    ui: uiReducer,
  },
});

export default store;
