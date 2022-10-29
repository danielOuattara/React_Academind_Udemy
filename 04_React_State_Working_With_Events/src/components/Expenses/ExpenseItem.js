import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./../../styles/expenseItem.css";
import Card from "./../UI/Card";

function ExpenseItem({ title, amount, date }) {
  const [myTitle, setMyTitle] = useState(title);

  const handleTitleChange = () => {
    setMyTitle("New title");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{myTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={handleTitleChange}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
