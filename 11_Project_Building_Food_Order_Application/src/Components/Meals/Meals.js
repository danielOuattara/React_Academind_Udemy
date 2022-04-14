import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

function Meals() {
  return (
    <div style={{ border: "1px solid green", marginTop: "1rem" }}>
      <React.Fragment>
        <MealsSummary />
        <AvailableMeals />
      </React.Fragment>
    </div>
  );
}

export default Meals;
