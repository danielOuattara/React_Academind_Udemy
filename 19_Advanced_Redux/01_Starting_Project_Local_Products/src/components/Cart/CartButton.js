import styles from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function CartButton(props) {
  const dispatch = useDispatch();
  const { totalPrice, totalItems } = useSelector((state) => state.cart);

  // const toggleCartHandler = () => {
  //   dispatch(cartActions.toggleCart());
  // };

  return (
    <button
      className={styles.button}
      onClick={() => dispatch(cartActions.toggleCart())}
    >
      <span>My Cart</span>
      <span className={styles.badge}>
        {totalItems} {`${totalItems > 1 ? "articles" : "article"}`} /{" "}
        {totalPrice}€
      </span>
    </button>
  );
}
