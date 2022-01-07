import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";


function App() {

  const initialData = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 4.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]

  const [ expenses, setExpenses] = useState(initialData);

  const addNewExpense = (data) => {
    console.log("data = ", data);
    // console.log(...expenses);    
    // console.log([...expenses]);    
    setExpenses( () => {
       return expenses;
    });

  }

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense addNewExpense={addNewExpense}  />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
