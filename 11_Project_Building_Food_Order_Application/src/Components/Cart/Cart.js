import { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

function Cart(props) {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const cartItemAdd = (item) => addItem({ ...item, amount: 1 });

  const cartItemRemove = (id) => removeItem(id);

  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      <ul className={styles["cart-items"]}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            cartItemRemove={cartItemRemove.bind(null, item.id)}
            cartItemAdd={cartItemAdd.bind(null, item)}
          />
        ))}
      </ul>

      <div className={styles.total}>
        <span>Total amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>

      <div className={styles.actions}>
        <button
          className={styles["button--alt"]}
          onClick={props.hideCartHandler}
        >
          close
        </button>
        {items.length > 0 && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
