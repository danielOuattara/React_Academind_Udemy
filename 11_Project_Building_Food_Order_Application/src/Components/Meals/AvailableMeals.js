import React from "react";
import { meals_list } from "./../../data/dummy-meals";
import MealItem from "./MealItem";
import styles from "./AvailableMeals.module.css";
function AvailableMeals() {
  return (
    <div className={styles.meals}>
      <ul>
        {meals_list.map((item) => {
          return (
            <li key={item.id}>
              {" "}
              <MealItem {...item} />{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AvailableMeals;
