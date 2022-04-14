import React from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

function Cart() {
  return (
    <Modal>
      <ul className={styles["cart-items"]}>
        {[{ id: "c1", name: "sushi", amount: 2, price: 20.99 }].map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total amount</span>
        <span>20.99</span>
      </div>
      <div className={styles.actions}>
          <button className={styles["button--alt"]}>close</button>
          <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
