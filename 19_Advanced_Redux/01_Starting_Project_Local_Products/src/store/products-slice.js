import { createSlice } from "@reduxjs/toolkit";

//------------------------------------------------
const initialProductState = {
  counter: 0,
  showCounter: true,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialProductState,
  reducers: {

  },
});
export const productActions = productSlice.actions;

export default productSlice.reducer;
