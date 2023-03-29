import React from "react";
import { DUMMY_MEALS } from "../../data/dummy-meals";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => {
            return <MealItem key={meal.id} {...meal} />;
          })}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
