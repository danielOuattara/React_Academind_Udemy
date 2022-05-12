import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + action.payload,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter + action.payload,
    };
  }

  return state;
};

export default createStore(counterReducer);
