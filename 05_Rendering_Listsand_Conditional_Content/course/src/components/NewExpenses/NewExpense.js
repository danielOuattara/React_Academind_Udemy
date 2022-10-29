import "./../../styles/newExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import Card from "../UI/Card";

function NewExpense({ addNewExpense }) {
  const handleReceiveExpense = (receivedExpenses) => {
    const expenseData = {
      ...receivedExpenses,
      id: Math.random().toString(),
    };
    return addNewExpense(expenseData);
  };

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    return setShowForm(() => !showForm);
  };

  return (
    <Card className="new-expense">
      {!showForm && <button onClick={handleShowForm}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          handleSendExpense={handleReceiveExpense}
          handleShowForm={handleShowForm}
        />
      )}
    </Card>
  );
}

export default NewExpense;
