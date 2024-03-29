import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [inputState, setInputState] = useState({ title: "", amount: 0 });
  //-----
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState(0);

  const submitHandler = (event) => {
    event.preventDefault();
    // ...
    props.handleAddIngredient(inputState);
    setInputState({ title: "", amount: 0 });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputState.title}
              onChange={(event) =>
                setInputState((prevState) => ({
                  ...prevState,
                  title: event.target.value,
                }))
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
              onChange={(event) =>
                setInputState((prevState) => ({
                  ...prevState,
                  amount: event.target.value,
                }))
              }
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
