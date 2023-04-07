import styles from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

export default function CartButton(props) {
  const dispatch = useDispatch();
  const { totalPrice, totalItems } = useSelector((state) => state.cart);

  // const toggleCartHandler = () => {
  //   dispatch(cartActions.toggleCart());
  // };

  return (
    <button
      className={styles.button}
      onClick={() => dispatch(uiActions.toggleCart())}
    >
      <span>My Cart</span>
      <span className={styles.badge}>
        {totalItems} {`${totalItems > 1 ? "articles" : "article"}`} /{" "}
        {totalPrice}€
      </span>
    </button>
  );
}
