import React from "react";

const CartContext = React.createContext({
  // data below just allow auto-completion in later use
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
