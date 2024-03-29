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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { items, totalAmount, addItem, removeItem, clearCartItems } =
    useContext(CartContext);

  const cartItemAdd = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItemRemove = (id) => {
    removeItem(id);
  };

  const handleUserConfirm = async (userData) => {
    try {
      setIsSubmitting(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: userData,
          items,
          totalAmount,
        }),
      });

      if (!response.ok) {
        setIsSubmitting(false);
        throw new Error(`${response.statusText} ${response.status} `);
      }

      const data = await response.json();
      if (data) {
        setSubmitSuccess(true);
        clearCartItems();
      }
    } catch (err) {
      setError(err.message);
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const cartItems = (
    <>
      {!isSubmitting && (
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
      )}
    </>
  );

  const amounts = (
    <>
      {!isSubmitting && (
        <div className={styles.total}>
          <span>Total amount</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      )}
    </>
  );

  const formOrder = (
    <>
      {isCheckOut && (
        <CheckOutForm
          handleUserConfirm={handleUserConfirm}
          onCancelOrder={props.hideCartHandler}
          closeCheckOutForm={() => setIsCheckOut(false)}
        />
      )}
    </>
  );

  const cartModalContent = (
    <>
      {cartItems}
      {amounts}
      {formOrder}
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
    </>
  );

  const submittingModalContent = <p>Sending Order ...</p>;

  const orderSuccessful = (
    <>
      <p>Your order is successfully sent</p>
      <div className={styles.actions}>
        <button className={styles["button"]} onClick={props.hideCartHandler}>
          close
        </button>
      </div>
    </>
  );

  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      {!isSubmitting && !submitSuccess && cartModalContent}
      {isSubmitting && submittingModalContent}
      {!isSubmitting && submitSuccess && orderSuccessful}
    </Modal>
  );
}

export default Cart;
