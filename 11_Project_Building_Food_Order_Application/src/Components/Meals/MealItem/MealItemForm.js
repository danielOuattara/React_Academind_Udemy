import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const entererAmount = Number(amountInputRef.current.value.trim());

    if (entererAmount.length === 0 || entererAmount < 1 || entererAmount > 5) {
      setAmountValid(false);
      return;
    }

    props.addToCart(entererAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        inputParams={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add </button>
      {!amountValid && <p>Please enter a valid amount (1-5) </p>}
    </form>
  );
}

export default MealItemForm;
