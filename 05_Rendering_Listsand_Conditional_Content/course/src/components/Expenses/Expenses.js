import { useState } from 'react';
import './../../styles/expenses.css';
import Card from './../UI/Card';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses({expenses}) {

    const [year, setYear ] = useState(null);

    const handleFilteredYear = (yearReceived) => {
        setYear(() => {
            return yearReceived }
        );
    }
    console.log(year)

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter handleFilteredYear={handleFilteredYear}/>
                {expenses.map((item) => {
                    return( 
                        <ExpenseItem 
                            key={item.id} 
                            title={item.title} 
                            date={item.date} 
                            amount={item.amount}
                        />);
                })} 
            </Card>
        </div>
    );
}

export default Expenses;
