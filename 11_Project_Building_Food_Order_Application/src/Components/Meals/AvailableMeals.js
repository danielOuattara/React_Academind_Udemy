import React from "react";
import { DUMMY_MEALS } from "../../data/dummy-meals";
import styles from "./AvailableMeals.module.css";

function AvailableMeals() {
  return (
    <section className={styles.meals}>
      <ul>
        {DUMMY_MEALS.map((meal) => {
          return <li key={meal.id}>{meal.name}</li>;
        })}
      </ul>
    </section>
  );
}

export default AvailableMeals;
