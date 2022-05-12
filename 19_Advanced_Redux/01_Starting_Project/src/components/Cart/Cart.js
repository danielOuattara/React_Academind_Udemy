// import Card from "../UI/Card";
// import classes from "./Cart.module.css";
// import CartItem from "./CartItem";
// import { useSelector } from "react-redux";

// const Cart = (props) => {
//   const itemsInCart = useSelector((state) => state.cart.cartItems);
//   const showCart = useSelector((state) => state.cart.showCart);
//   return (
//     <>
//       {showCart && (
//         <Card className={classes.cart}>
//           <h2>Your Shopping Cart</h2>
//           <ul>
//             <CartItem
//               item={{
//                 title: "Test Item",
//                 quantity: 3,
//                 total: 18,
//                 price: 6,
//                 id: 1,
//               }}
//             />
//           </ul>
//         </Card>
//       )}
//     </>
//   );
// };

// export default Cart;


import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const itemsInCart = useSelector((state) => state.cart.cartItems);
  const showCart = useSelector((state) => state.cart.showCart);
  const cartState = useSelector(state => state.cart)

  console.log("cartState = ", cartState)
  return (
    <>
      {showCart && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {itemsInCart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;

