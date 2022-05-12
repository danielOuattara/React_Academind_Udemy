/* Redux store using Toolkit 
----------------------------*/

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import counterReducer from "./counter-slice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, // for large application
});

export default store;
