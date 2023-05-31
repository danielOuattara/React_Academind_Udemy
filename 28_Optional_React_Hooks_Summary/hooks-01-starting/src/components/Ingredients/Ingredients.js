import { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(
      `https://academind-react-summary-b17f9-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json`,
    )
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        setIngredients(loadedIngredients);
      });
  }, []);

  const handleAddIngredient = (ingredient) => {
    fetch(
      `https://academind-react-summary-b17f9-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json`,
      {
        method: "POST",
        body: JSON.stringify({ ...ingredient }),
        headers: { "Content-Type": "application/json" },
      },
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setIngredients((prevState) => [
          ...prevState,
          { id: responseData.name, ...ingredient },
        ]);
      });
  };

  const handleRemoveIngredient = (id) => {
    setIngredients((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <IngredientForm handleAddIngredient={handleAddIngredient} />

      <section>
        <Search />
        <IngredientList
          ingredients={ingredients}
          handleRemoveIngredient={handleRemoveIngredient}
        />
      </section>
    </div>
  );
}

export default Ingredients;
