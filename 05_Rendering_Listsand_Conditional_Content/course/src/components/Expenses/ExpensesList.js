import './../../styles/expensesList.css';
import ExpenseItem from './ExpenseItem';


function ExpensesList({ filteredExpenses, year}) {

    if(filteredExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found for {year}</h2>
    }

    return (
        <ul className='expenses-list'>
            {filteredExpenses.map((item) => {
                return ( 
                    <ExpenseItem 
                        key={item.id} 
                        title={item.title} 
                        date={item.date} 
                        amount={item.amount}
                    />
                );
            })}
        </ul>
    );
}

export default ExpensesList;
