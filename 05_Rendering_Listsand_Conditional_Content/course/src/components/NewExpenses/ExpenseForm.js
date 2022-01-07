import { useState } from 'react';
import './../../styles/expenseForm.css';

function ExpenseForm({handleSendExpense, handleShowForm}) {

    const [ title, setTitle] = useState('');
    const [ amount, setAmount] = useState('');
    const [ date, setDate] = useState('');

    const handleExpenseTitle = (event) => {
        setTitle(() => {
            return event.target.value
        });
    }

    const handleExpenseAmount = (event) => {
        setAmount(() => {
            return event.target.value
        });
    }

    const handleExpenseDate = (event) => {
        setDate(() => {
            return event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const expenseData = { title, amount, date: new Date(date) };
        handleSendExpense(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
        handleShowForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input 
                       type="text" 
                       value={title} 
                       onChange={handleExpenseTitle} 
                       required
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
                       required 
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
                       required
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={handleShowForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
        );
}

export default ExpenseForm;
