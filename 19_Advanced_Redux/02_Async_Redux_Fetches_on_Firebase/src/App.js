//------------------------  using useEffect

// import Cart from "./components/Cart/Cart";
// import Layout from "./components/Layout/Layout";
// import Products from "./components/Shop/Products";
// import Notification from "./components/UI/Notification";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect, Fragment } from "react";
// import { uiActions } from "./store/ui-slice";

// const url =
//   "https://shop-app-redux-academind-udemy-default-rtdb.europe-west1.firebasedatabase.app/products.json";

// let isFirstLoaded = true;

// function App() {
//   const { cartIsVisible, notification } = useSelector((state) => state.ui);
//   const cart = useSelector((state) => state.cart);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (isFirstLoaded) {
//       isFirstLoaded = false;
//       return;
//     }
//     const sendCartData = async () => {
//       dispatch(
//         uiActions.showNotification({
//           status: "pending",
//           title: "Sending ...",
//           message: "Sending cart data",
//         }),
//       );
//       const response = await fetch(url, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(cart),
//       });

//       if (!response.ok) {
//         throw new Error(`${response.statusText} ${response.status}`);
//       }

//       // const data = await response.json();
//       // console.log("data = ", data);

//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           title: "Success ...",
//           message: "Sent cart data successfully",
//         }),
//       );
//     };

//     sendCartData().catch((error) => {
//       console.log(error.message);
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error ...",
//           message: "Sent cart data failed",
//         }),
//       );
//     });
//   }, [cart, dispatch]);

//   return (
//     <Fragment>
//       <Notification {...notification} />

//       <Layout>
//         {cartIsVisible && <Cart />}
//         <Products />
//       </Layout>
//     </Fragment>
//   );
// }

// export default App;

//--------------------------------------- using thunk
// thunk logic here
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isFirstLoaded = true;

function App() {
  const { cartIsVisible, notification } = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstLoaded) {
      isFirstLoaded = false;
      return;
    }
    if (cart.cartItemsChanged) {
      dispatch(sendCartData(cart));
    }
    return;
  }, [cart, dispatch]);

  return (
    <Fragment>
      <Notification {...notification} />

      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
