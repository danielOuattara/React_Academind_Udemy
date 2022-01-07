
import './../../styles/expensesFilter.css';

const ExpensesFilter = ({handleFilteredYear}) => {

  const handleSelectYear = (event) => {
      return handleFilteredYear(event.target.value);
  }
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={handleSelectYear}>
          <option  default >Select a year</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;