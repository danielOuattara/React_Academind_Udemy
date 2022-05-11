import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import CheckOutForm from "./CheckOutForm";

const url =
  "https://food-app-academind-udemy-default-rtdb.europe-west1.firebasedatabase.app/orders.json";

function Cart(props) {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const cartItemAdd = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItemRemove = (id) => {
    removeItem(id);
  };

  const handleUserConfirm = async (userData) => {
    try {
      setIsLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: userData,
          items,
          totalAmount,
        }),
      });

      if (!response.ok) {
        setIsLoading(false);
        throw new Error(`${response.statusText} ${response.status} `);
      }

      const data = await response.json();
      console.log(data, data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

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

      {isCheckOut && (
        <CheckOutForm
          handleUserConfirm={handleUserConfirm}
          onCancelOrder={props.hideCartHandler}
        />
      )}

      {!isCheckOut && (
        <div className={styles.actions}>
          <button
            className={styles["button--alt"]}
            onClick={props.hideCartHandler}
          >
            close
          </button>
          {items.length > 0 && (
            <button
              className={styles.button}
              onClick={() => setIsCheckOut(true)}
            >
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
}

export default Cart;
