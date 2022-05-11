import { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/CartContext";

function MealItem(props) {
  const { addItem } = useContext(CartContext);

  const addToCart = (amount) => {
    addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price
    })
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={props.id} addToCart={addToCart} />
      </div>
    </li>
  );
}

export default MealItem;
