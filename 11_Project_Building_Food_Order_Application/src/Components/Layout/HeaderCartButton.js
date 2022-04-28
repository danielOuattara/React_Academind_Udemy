import { useContext, useEffect, useState } from "react";
import CartIcon from "./../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";

function HeaderCartButton(props) {
  const [btnHighligthed, setBtnHighlithed] = useState(false);
  const { items } = useContext(CartContext);
  const numberOfCartItems = items.reduce((currrentNumber, item) => {
    return currrentNumber + item.amount;
  }, 0);

  const btnStyles = `${styles.button} ${btnHighligthed ? styles.bump : ""}`;

  useEffect(() => {
    setBtnHighlithed(() => true);
    const timer = setTimeout(() => {
      setBtnHighlithed(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnStyles} onClick={props.showCartHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={styles.badge}> {numberOfCartItems} </span>
    </button>
  );
}

export default HeaderCartButton;
