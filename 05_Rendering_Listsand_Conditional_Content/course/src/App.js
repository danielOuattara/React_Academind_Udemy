import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const initialData = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 90.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 599.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 350,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Laptop",
      amount: 400,
      date: new Date(2021, 8, 12),
    },
    {
      id: "e6",
      title: "Chair",
      amount: 150,
      date: new Date(2019, 1, 12),
    },
  ];

  const [expenses, setExpenses] = useState(initialData);

  const addNewExpense = (newExpense) => {
    return setExpenses((prevState) => [...prevState, newExpense]);
  };

  return (
    <div>
      <NewExpense addNewExpense={addNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}
export default App;
