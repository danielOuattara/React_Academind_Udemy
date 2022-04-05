import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItems(props) {
  return (
    <div className={styles.meal}>
      <>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>${props.price}</p>
      </>
      <MealItemForm />
    </div>
  );
}

export default MealItems;
