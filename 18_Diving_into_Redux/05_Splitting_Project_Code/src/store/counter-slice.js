import { createSlice } from "@reduxjs/toolkit";

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
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
