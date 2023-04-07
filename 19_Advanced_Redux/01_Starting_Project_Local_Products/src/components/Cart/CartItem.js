import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function CartItem(props) {
  const dispatch = useDispatch();
  const { title, quantity, subTotalPrice, price, id } = props;

  const handleUpdateQuantity = (id, value) => {
    dispatch(cartActions.updateQuantity({ id, quantity: value, price }));
  };

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${subTotalPrice.toFixed(2)}{" "}
          <span className={styles["item-price"]}>
            (${price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={() => handleUpdateQuantity(id, -1)}>-</button>
          <button onClick={() => handleUpdateQuantity(id, +1)}>+</button>
        </div>
      </div>
    </li>
  );
}
