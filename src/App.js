/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
/* import ExpItem from './components/expense-item'

function App() {
  const expenses = [
    {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 10 * (Math.random()),
    date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
    title: 'New TV', 
    amount: 10*(Math.random()), 
    date: new Date(2021, 2, 12) 
    },
    {
    id: 'e3',
    title: 'Car Insurance',
    amount: 10 * (Math.random()),
    date: new Date(2021, 2, 28),
    },
  ];

return (
  <div>
    <h2>Let's get started!</h2>
    <ExpItem name={expenses[0].title} price={expenses[0].amount} date={expenses[0].date}></ExpItem>
    <ExpItem name={expenses[1].title} price={expenses[1].amount} date={expenses[1].date}></ExpItem>
    <ExpItem name={expenses[2].title} price={expenses[2].amount} date={expenses[2].date}></ExpItem>
  </div>
);
}

export default App; */

import Expenses from "./components/expenses";
import NewExp from "./components/new-expense/newExpense";
import React, { useState } from "react";

function expensesArray() {
  let finalExpenses = [];

  function generateExpWithDynamicIds() {
    let expenses = [
      {
        id: "e",
        name: "Toilet Paper",
        price: "",
        date: new Date(2020, 7, 14),
      },
      {
        id: "e",
        name: "New TV",
        price: "",
        date: new Date(2021, 2, 12),
      },
      {
        id: "e",
        name: "Car Insurance",
        price: "",
        date: new Date(2021, 3, 28),
      },
      {
        id: "e",
        name: "PlayStation 5",
        price: "",
        date: new Date(2019, 6, 22),
      },
      {
        id: "e",
        name: "Acer computer",
        price: "",
        date: new Date(2022, 11, 19),
      },
      {
        id: "e",
        name: "Dell computer",
        price: "",
        date: new Date(2022, 12, 21),
      },
      {
        id: "e",
        name: "Mac computer",
        price: "",
        date: new Date(2019, 8, 8),
      },
      {
        id: "e",
        name: "Bangho computer",
        price: "",
        date: new Date(2020, 5, 17),
      },
    ];

    let idD = 1;
    for (const expense of expenses) {
      if (expense.id) {
        expense.id = "e" + idD.toString();
        idD++;
      }
      if (expense.price === "") {
        expense.price = Math.round(Math.random() * 100);
      }
    }
    return expenses;
  }

  finalExpenses = generateExpWithDynamicIds();

  return finalExpenses;
}

function App() {
  const initial_exp = expensesArray();
  /* const ExpensesArray = (exp) =>{
    console.log(exp)
    return exp;
  } */

  const [expenses, setExpenses] = useState(initial_exp);
  console.log(expenses);

  const addExpenseHandler = (expenseToAdd) => {
    console.log(expenseToAdd); //aca llega el object llamado en el child comp como expData y pasado al parent de la misma forma que se paso de ExpenseForm a NewExpense
    /* setExpensesUpdt([expenseToAdd, ...expenses]); */
    setExpenses((prevExp) => {
      //aca en teoria seteo los Expenses del estado previo (seteados como iniciales en linea 66 con el useState)
      return [
        ...prevExp,
        expenseToAdd, //le agrego el nuevo expense
      ]; //le digo que mantenga los previos
    });
    /*  console.log(newExpenses); // por que llega como undefined cuando hago click en el button Add expense? */
  };

  const emptyingDB = () => {
    setExpenses([]);
  }

  return (
    <>
      <NewExp onAppExpenses={addExpenseHandler} emptyTheDB={emptyingDB}/>
      <Expenses
        initialexpenses={expenses} /* onAppInitialExp={ExpensesArray} */
      />
    </>
  );
}

export default App;
