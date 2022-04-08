import ExpenseItem from './expense-item';
import './expenses.css';
import Card from './cards/Card';
import { useState } from 'react';
import ExpensesFilter from './expensesFilter';

function expensesArray(){

  let finalExpenses = [];

  function generateExpWithDynamicIds(){
    let expenses = [
      {
        id: 'e',
        title: 'Toilet Paper',
        amount: Math.random() * 10,
        date: new Date(2020, 7, 14),
      },
      { 
        id: 'e', 
        title: 'New TV', 
        amount: Math.random() * 10, 
        date: new Date(2021, 2, 12)
      },
      {
        id: 'e',
        title: 'Car Insurance',
        amount: Math.random() * 10,
        date: new Date(2021, 3, 28),
      },
      {
        id: 'e',
        title: 'PlayStation 5',
        amount: Math.random() * 10,
        date: new Date(2019, 6, 22),
      },
      {
        id: 'e',
        title: 'Acer computer',
        amount: Math.random() * 10,
        date: new Date(2022, 11, 19),
      },
      {
        id: 'e',
        title: 'Dell computer',
        amount: Math.random() * 10,
        date: new Date(2022, 12, 21),
      },
      {
        id: 'e',
        title: 'Mac computer',
        amount: Math.random() * 10,
        date: new Date(2019, 8, 8),
      },
      {
        id: 'e',
        title: 'Bangho computer',
        amount: Math.random() * 10,
        date: new Date(2020, 5, 17),
      },
    ];

    let idD = 1;
    for (const expense of expenses) {
      if (expense.id){
        expense.id = 'e'+(idD.toString());
        idD++
      }
    }
    return expenses;
  }

  finalExpenses = generateExpWithDynamicIds();

  return finalExpenses;
}
  

const Expenses = (props) => {
  const initialExpenses = expensesArray();
  console.log(initialExpenses);
  props.onAppInitialExp(initialExpenses); //paso al parent comp los expenses

  const [yearFiltered, setFilteredYear] = useState('2000')

  const filterChangeHandler = yearSelected => {
    setFilteredYear(yearSelected);
    console.log(yearSelected);
  }
  const expensesMapped = initialExpenses.map((expense, index) => 
  <ExpenseItem name={expense.title}
  price={expense.amount}
  date={expense.date}/>)
    
  return <Card className="expenses">
    <ExpensesFilter selected={yearFiltered} onChangeFilter={filterChangeHandler}/> 
    <>{expensesMapped}</>
  </Card>
  ;
}

export default Expenses;
