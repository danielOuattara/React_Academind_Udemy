import Card from "../UI/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function Cart(props) {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Card className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </ul>
    </Card>
  );
}
