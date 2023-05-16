/*---------------------- thunk logic starts here */
// Note remove/comment this bloc if you prefer using useEffect in component
// Then you also have to comment out/ in the thunk part in App.js

import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

const url =
  "https://shop-app-redux-academind-udemy-default-rtdb.europe-west1.firebasedatabase.app/products.json";

//----------------------------------------------------------------
export function fetchCartData() {
  return async function (dispatch) {
    //------------------
    async function fetchData() {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status}`);
      }
      const data = await response.json();
      return data;
    }
    //-------------------

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          cartItems: cartData.cartItems || [],
          totalItems: cartData.totalItems,
          totalPrice: cartData.totalPrice,
        }),
      );
    } catch (error) {
      console.log(error.message);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error ...",
          message: "Fetch cart data failed",
        }),
      );
    }
  };
}

//----------------------------------------------------------------
export function sendCartData(cart) {
  return async function (dispatch) {
    //! IMPORTANT any Async task must be done here before calling dispatch

    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending ...",
        message: "Sending cart data",
      }),
    );

    //---
    async function fetchData() {
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cartItems: cart.cartItems,
          totalItems: cart.totalItems,
          totalPrice: cart.totalPrice,
        }),
      });

      if (!response.ok) {
        throw new Error(`${response.statusText} ${response.status}`);
      }
    }
    //---

    try {
      await fetchData();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success ...",
          message: "Sent cart data successfully",
        }),
      );
    } catch (error) {
      console.log(error.message);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error ...",
          message: "Sent cart data failed",
        }),
      );
    }
  };
}
