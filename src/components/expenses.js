import ExpenseItem from './expense-item';
import './expenses.css';
import Card from './cards/Card';
import { useState } from 'react';
import ExpensesFilter from './expensesFilter';
  

const Expenses = (props) => {
  
  /* console.log(initialExpenses); */
  /* props.onAppInitialExp(initialExpenses); */ //paso al parent comp los expenses
  const theExpenses = props.initialexpenses
  const [yearFiltered, setFilteredYear] = useState('2000')

  const filterChangeHandler = yearSelected => {
    setFilteredYear(yearSelected);
    console.log(yearSelected);
  }

  const expensesMapped = theExpenses.map((expense, index) => 
  <ExpenseItem name={expense.name}
  price={expense.price}
  date={expense.date}/>)
    
  return <Card className="expenses">
    <ExpensesFilter selected={yearFiltered} onChangeFilter={filterChangeHandler}/> 
    <>{expensesMapped}</>
  </Card>
  ;
}

export default Expenses;
