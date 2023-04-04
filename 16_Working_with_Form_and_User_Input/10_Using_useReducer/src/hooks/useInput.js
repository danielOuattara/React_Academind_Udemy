// TODO: correction need to be done ,...later

import { useReducer } from "react";

const initialInputState = {
  inputValue: "",
  inputFieldTouched: false,
};

function inputReducer(state, action) {
  if (action.type === "INPUT") {
    return {
      ...state,
      inputValue: action.payload,
      inputFieldTouched: state.inputFieldTouched,
    };
  }

  if (action.type === "BLUR") {
    return {
      ...state,
      inputFieldTouched: true,
    };
  }

  if (action.type === "RESET") {
    return {
      state: initialInputState,
    };
  }
  return state;
}

export default function useInput(validateInput) {
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  const inputValueIsValid = validateInput(inputState.inputValue); // an external validateInput function received as argument
  const inputHasError = !inputValueIsValid && inputState.inputFieldTouched;

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", payload: event.target.value });
  };

  const inputFieldBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    inputValue: inputState.inputValue,
    inputChangeHandler,
    inputFieldBlurHandler,
    inputHasError,
    reset,
  };
}
