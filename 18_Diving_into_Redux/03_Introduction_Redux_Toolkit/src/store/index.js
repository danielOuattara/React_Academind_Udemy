/* Version of Redux store without Toolkit, for reference only 
--------------------------------------------------------------*/
// import { createStore } from "redux";

// const initialState = {
//   counter: 0,
//   showCounter: true,
// };

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       ...state,
//       counter: state.counter + action.payload,
//     };
//   }
//   if (action.type === "DECREMENT") {
//     return {
//       ...state,
//       counter: state.counter + action.payload,
//     };
//   }
//   if (action.type === "TOGGLE_COUNTER_VIEW") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// export default createStore(counterReducer);

/* Redux store using Toolkit 
----------------------------*/

import { createSlice, configureStore } from "@reduxjs/toolkit";
// import { createStore, combineReducers } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter-slice",
  initialState,
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
      state.showCounter = !state.showCounter;
      /* 
        OK this way (No return) if you only modifying one item of the state
        Redux toolkit will complete the global state and return it itself
      */
    },

    // toggleCounter(state) {
    //   /* OK this way if you return yourself immutably all the state  */
    //   return {
    //     ...state,
    //     showCounter: !state.showCounter,
    //   };
    // },
  },
});

export const counterActions = counterSlice.actions;

// const store = createStore(counterSlice.reducer); // createStore not recommanded

const store = configureStore({
  // reducer: { counter: counterSlice.reducer },  // for large application
  reducer: counterSlice.reducer,
});

export default store;
//------------------------------------------------------------
