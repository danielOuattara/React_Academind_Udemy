import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }
  if (action.type === "TOGGLE_COUNTER_VIEW") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

export default createStore(counterReducer);
