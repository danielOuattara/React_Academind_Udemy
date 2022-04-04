export const passwordInitialState = { value: "", isValid: false };

export const passwordReducer = (state = passwordInitialState, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.payload, isValid: action.payload.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { ...state, value: state.value };
  }

  return { value: "", isValid: false };
};
