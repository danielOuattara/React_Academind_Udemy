
import "./../../styles/newExpense.css";
import ExpenseForm from './ExpenseForm';

function NewExpense({addNewExpense}) {

    const handleReceiveExpense = (receivedExpenses) => {
        const expenseData =  {
            ...receivedExpenses,
            id: Math.random().toString()
        }
        return addNewExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm handleSendExpense={handleReceiveExpense} />
        </div>
    );
}

export default NewExpense;
