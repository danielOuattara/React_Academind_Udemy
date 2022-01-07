import { useState } from 'react';
import './../../styles/expenses.css';
import Card from './../UI/Card';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses({expenses}) {

    const [year, setYear ] = useState("");
    
    const handleFilteredYear = (yearReceived) => {
        setYear(() => {
            return yearReceived;
        });
    }
    let filteredExpenses = year === "" ? expenses : expenses.filter(item => item.date.getFullYear() === Number(year));
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter handleFilteredYear={handleFilteredYear}/>
                { filteredExpenses.length > 0 && filteredExpenses.map((item) => {
                    return ( 
                        <ExpenseItem 
                            key={item.id} 
                            title={item.title} 
                            date={item.date} 
                            amount={item.amount}
                        />
                    );
                })} 

                { filteredExpenses.length === 0 && <h2 style={{color: "white"}}>No Data for {year}</h2>} 
            </Card>
        </div>
    );
}

export default Expenses;
