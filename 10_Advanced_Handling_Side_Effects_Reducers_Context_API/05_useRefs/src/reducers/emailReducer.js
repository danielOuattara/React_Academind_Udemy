export const emailInitialState = { value: "", isValid: false };

export const emailReducer = (state = emailInitialState, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.payload, isValid: action.payload.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { ...state, value: state.value };
  }

  return { value: "", isValid: false };
};
