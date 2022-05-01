import { useState } from "react";

function useInput(validateInput) {
  const [inputValue, setInputValue] = useState("");
  const [inputFieldTouched, setInputFieldTouched] = useState(false);

  const inputValueIsValid = validateInput(inputValue); // an external validator function received as argument
  const inputHasError = !inputValueIsValid && inputFieldTouched;

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputFieldBlurHandler = () => {
    setInputFieldTouched(true);
  };

  return {
    inputValue,
    setInputValue,
    inputFieldTouched,
    setInputFieldTouched,
    inputHasError,
    inputChangeHandler,
    inputFieldBlurHandler,
  };
}

export default useInput;
