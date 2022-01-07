
import { useState } from 'react';
import './../../styles/expenses.css';
import Card from './../UI/Card';

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';

function Expenses({expenses}) {

    const [year, setYear ] = useState("");
    
    const handleFilteredYear = (yearReceived) => {
        setYear(() => {
            return yearReceived;
        });
    }
    
    let filteredExpenses = year === "" ? 
        expenses : expenses.filter(item => item.date.getFullYear() === Number(year));

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter handleFilteredYear={handleFilteredYear}/>
                <ExpensesList filteredExpenses={filteredExpenses} year={year} /> 
            </Card>
        </div>
    );
}

export default Expenses;
