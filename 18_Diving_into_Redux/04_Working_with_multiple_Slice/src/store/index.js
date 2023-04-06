/* Redux store using Toolkit 
----------------------------*/

import { createSlice, configureStore } from "@reduxjs/toolkit";

//------------------------------------------------
const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter-slice",
  initialState: initialCounterState,
  reducers: {
    incrementByOne(state) {
      state.counter++;
    },

    increment(state, action) {
      state.counter = state.counter + action.payload;
    },

    decrement(state, action) {
      state.counter = state.counter + action.payload;
    },

    toggleCounter(state) {
      /* OK this way if you return yourself immutably all the state  */
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    },
  },
});

//--------------------------------------------------
const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication-slice",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

//---------------------------------------------------

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
  // for larger application
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
//------------------------------------------------------------
