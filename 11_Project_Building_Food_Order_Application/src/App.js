import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { meals_list } from "./data/dummy-meals";
import MealsSummary from "./Components/MealSummary/MealsSummary";
import CartItem from "./Components/CartItem/CartItem";
import AvailableMeals from "./Components/Meals/AvailableMeals";
function App() {
  const [userMeals, setUserMeals] = useState([]);

  const onRemove = (id) => {
    return userMeals.filter((item) => item.id !== id);
  };

  const onAdd = (id) => {
    const mealToAdd = meals_list.filter((item) => item.id === id);
    return userMeals.push(mealToAdd);
  };

  return (
    <div className>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
}

export default App;
