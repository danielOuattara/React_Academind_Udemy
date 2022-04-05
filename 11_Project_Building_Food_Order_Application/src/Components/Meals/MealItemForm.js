import React from "react";
import styles from './MealItemForm.module.css'
function MealItemForm(props) {
  return (
    <form className={styles.form} /* onSubmit={handleQuantityChange} */>
      <label> Amount</label>
      <input type="number" min="0" />
      <button type="submit">+ Add</button>
    </form>
  );
}

export default MealItemForm;
