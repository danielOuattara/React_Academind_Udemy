import { useState } from 'react';
import './../../styles/expenseForm.css';

function ExpenseForm() {

    const [ title, setTitle] = useState('');
    const [ amount, setAmount] = useState('');
    const [ date, setDate] = useState('');

    const handleExpenseTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleExpenseAmount = (event) => {
        setAmount(event.target.value);
    }

    const handleExpenseDate = (event) => {
        setDate(event.target.value);
    }

    
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input 
                       type="text" 
                       value={title} 
                       onChange={handleExpenseTitle} 
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input 
                       type="number" 
                       value={amount} 
                       min="0.01" 
                       step="0.01" 
                       onChange={handleExpenseAmount} 
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input 
                       type="date" 
                       value={date} 
                       min="2019-01-01" 
                       max="2022-12-31" 
                       onChange={handleExpenseDate} 
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
        );
}

export default ExpenseForm;
