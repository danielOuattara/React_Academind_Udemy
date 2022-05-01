// import { useState } from "react";

// function useInput(validateInput) {
//   const [inputValue, setInputValue] = useState("");
//   const [inputFieldTouched, setInputFieldTouched] = useState(false);

//   const inputValueIsValid = validateInput(inputValue); // an external validator function received as argument
//   const inputHasError = !inputValueIsValid && inputFieldTouched;

//   const inputChangeHandler = (event) => {
//     setInputValue(event.target.value);
//   };

//   const inputFieldBlurHandler = () => {
//     setInputFieldTouched(true);
//   };

//   return {
//     inputValue,
//     setInputValue,
//     inputFieldTouched,
//     setInputFieldTouched,
//     inputHasError,
//     inputChangeHandler,
//     inputFieldBlurHandler,
//   };
// }

// export default useInput;

//=================================================================

// TODO: correction need to be done ,...later
import { useReducer } from "react";

const initialInputState = {
  inputValue: "",
  inputFielTouched: false,
};

function inputReducer(state, action) {
  if (action.type === "INPUT") {
    return {
      inputValue: action.payload,
      inputFieldTouched: state.inputFielTouched,
    };
  } else if (action.type === "BLUR") {
    return {
      inputFielTouched: true,
    };
  } else {
    return state;
  }
}

function useInput(validateInput) {
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  const inputValueIsValid = validateInput(inputState.inputValue); // an external validator function received as argument
  const inputHasError = !inputValueIsValid && inputState.inputFieldTouched;

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", payload: event.target.value });
  };

  const inputFieldBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  return {
    inputValue: inputState.inputValue,
    setInputValue: inputState,
    inputFieldTouched: inputState.inputFieldTouched,
    setInputFieldTouched: inputState.setInputFieldTouched,
    inputHasError,
    inputChangeHandler,
    inputFieldBlurHandler,
  };
}

export default useInput;

/* 
// Max Solution
//----------------
import { useReducer } from "react";

const initialInputState = {
  inputValue: "",
  inputFielTouched: false,
};

function inputReducer(state, action) {
  if (action.type === "INPUT") {
    return {
      inputValue: action.payload,
      inputFieldTouched: state.inputFielTouched,
    };
  } else if (action.type === "BLUR") {
    return {
      inputFielTouched: true,
    };
  } else {
    return state;
  }
}

function useInputReducer(validateInput) {
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  const inputValueIsValid = validateInput(inputState.inputValue); // an external validator function received as argument
  const inputHasError = !inputValueIsValid && inputState.inputFieldTouched;

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", payload: event.target.value });
  };

  const inputFieldBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  return {
    inputValue: inputState.inputValue,
    setInputValue: inputState,
    inputFieldTouched: inputState.inputFieldTouched,
    setInputFieldTouched: inputState.setInputFieldTouched,
    inputHasError,
    inputChangeHandler,
    inputFieldBlurHandler,
  };
}

export default useInputReducer;
*/