import React from 'react';
import CartContext from './cartContext';

function CartProvider(props) {
  return (
    <CartContext.Provider value ={{}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider