import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemInCart = state.items.find(
      (item) => item.id === action.payload.id
    );

    let updatedItems = [...state.items];

    // check if item already in cart: so just increase the amount,
    if (existingItemInCart) {
      let updatedItem = {
        ...existingItemInCart,
        amount: existingItemInCart.amount + action.payload.amount,
      };
      let indexExistingItemInCart = updatedItems.indexOf(existingItemInCart);
      updatedItems[indexExistingItemInCart] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    // any case, money increases, item already present or not
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems = [...state.items];
    const itemToReduce = state.items.find((item) => item.id === action.payload);

    if (itemToReduce.amount === 1) {
      /* in this case we remove the item completely */
      updatedItems = updatedItems.filter((item) => item.id !== action.payload);

    } else {
      /* in this case we reduce the item number & the total price*/
      let updatedItem = {
        ...itemToReduce,
        amount: itemToReduce.amount - 1,
      };
      let indexItemToReduceInCart = updatedItems.indexOf(itemToReduce);
      updatedItems[indexItemToReduceInCart] = updatedItem;
    }

    // About Money $
    const updatedTotalAmount = state.totalAmount - itemToReduce.price;

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
};

function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCart = (item) => {
    dispatchCart({ type: "ADD", payload: item });
  };
  const removeItemFromCart = (id) => {
    dispatchCart({ type: "REMOVE", payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
