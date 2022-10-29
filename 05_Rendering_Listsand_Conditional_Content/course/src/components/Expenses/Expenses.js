// /* conditional rendering method 1
// -----------------------------------*/

// import { useState } from "react";
// import "./../../styles/expenses.css";
// import Card from "./../UI/Card";
// import ExpenseItem from "./ExpenseItem";
// import ExpensesFilter from "./ExpensesFilter";

// function Expenses({ expenses }) {
//   const [year, setYear] = useState("");

//   const handleFilteredYear = (yearReceived) => {
//     return setYear(() => yearReceived);
//   };

//   let filteredExpenses =
//     year === ""
//       ? expenses
//       : expenses.filter((item) => item.date.getFullYear() === Number(year));

//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter handleFilteredYear={handleFilteredYear} />
//         {filteredExpenses.length === 0 ? (
//           <h2 style={{ color: "white" }}>No Data for {year}</h2>
//         ) : (
//           filteredExpenses.map((expense) => {
//             return (
//               <ExpenseItem
//                 key={expense.id}
//                 title={expense.title}
//                 date={expense.date}
//                 amount={expense.amount}
//               />
//             );
//           })
//         )}
//       </Card>
//     </div>
//   );
// }

// export default Expenses;

//-----------------------------------------------------------------------

/* conditional rendering method 2 
-----------------------------------*/

// import { useState } from "react";
// import "./../../styles/expenses.css";
// import Card from "./../UI/Card";

// import ExpenseItem from "./ExpenseItem";
// import ExpensesFilter from "./ExpensesFilter";

// function Expenses({ expenses }) {
//   const [year, setYear] = useState("");

//   const handleFilteredYear = (yearReceived) => {
//     setYear(() => {
//       return yearReceived;
//     });
//   };

//   let filteredExpenses =
//     year === ""
//       ? expenses
//       : expenses.filter((item) => item.date.getFullYear() === Number(year));
//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter handleFilteredYear={handleFilteredYear} />
//         {filteredExpenses.length === 0 && (
//           <h2 style={{ color: "white" }}>No Data for {year}</h2>
//         )}
//         {filteredExpenses.length > 0 &&
//           filteredExpenses.map((item) => {
//             return (
//               <ExpenseItem
//                 key={item.id}
//                 title={item.title}
//                 date={item.date}
//                 amount={item.amount}
//               />
//             );
//           })}
//       </Card>
//     </div>
//   );
// }

// export default Expenses;

//-----------------------------------------------------------------------

/* conditional rendering method 3 (BACK UP)
-----------------------------------*/

// import { useState } from "react";
// import "./../../styles/expenses.css";
// import Card from "./../UI/Card";

// import ExpenseItem from "./ExpenseItem";
// import ExpensesFilter from "./ExpensesFilter";

// function Expenses({ expenses }) {
//   const [year, setYear] = useState("");

//   const handleFilteredYear = (yearReceived) => {
//     setYear(() => {
//       return yearReceived;
//     });
//   };

//   let filteredExpenses =
//     year === ""
//       ? expenses
//       : expenses.filter((item) => item.date.getFullYear() === Number(year));

//   let expensesContent = <h2 style={{ color: "white" }}>No Data for {year}</h2>;

//   if (filteredExpenses.length > 0) {
//     expensesContent = filteredExpenses.map((item) => {
//       return (
//         <ExpenseItem
//           key={item.id}
//           title={item.title}
//           date={item.date}
//           amount={item.amount}
//         />
//       );
//     });
//   }
//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter handleFilteredYear={handleFilteredYear} />
//         {expensesContent}
//       </Card>
//     </div>
//   );
// }

// export default Expenses;

/* conditional rendering method 3 
-----------------------------------*/

import { useState } from "react";
import "./../../styles/expenses.css";
import Card from "./../UI/Card";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [year, setYear] = useState("");

  const handleFilteredYear = (yearReceived) => {
    setYear(() => {
      return yearReceived;
    });
  };

  let filteredExpenses =
    year === ""
      ? expenses
      : expenses.filter((item) => item.date.getFullYear() === Number(year));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter handleFilteredYear={handleFilteredYear} />
        <ExpensesChart filteredExpenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} year={year} />
      </Card>
    </div>
  );
}

export default Expenses;
