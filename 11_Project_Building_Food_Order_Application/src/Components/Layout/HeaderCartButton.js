import React from "react";
import CartIcon from "./../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  return (
    <button className={styles.button} onClick={props.showCartHandler}>
      <span className={styles.icon}>
        <div style={{ border: "1px solid yellow" }}>
          <CartIcon />
        </div>
      </span>
      <span> Your Cart </span>
      <span className={styles.badge}> 3 </span>
    </button>
  );
}

export default HeaderCartButton;
