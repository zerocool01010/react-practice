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

  const [expenses, setExpenses] = useState(initial_exp);

  const [nameWasPlaced, setNamePlaced] = useState('') //valores seteados del exp item para el exp form
  const [priceWasPlaced, setPricePlaced] = useState('')
  const [dateWasPlaced, setDatePlaced] = useState('')

  const [valueHidden, setValueHidden] = useState('not-hidden') 

  console.log(expenses);

  const passingHiddenValue = () => { //este viene del expItem cuando haces click en un expItem en el boton de editar
    setValueHidden('hidden')
  }

  const hiddenValueHandler = hidden => {
    if (hidden === 'hidden') {
      setValueHidden('not-hidden')
    }
    if (hidden === 'not-hidden') {
      setValueHidden('hidden')
    }
  }

  const addExpenseHandler = (expenseToAddEdit) => { //expenseToAddEdit es un object que tiene attr de name, price y date
    console.log(expenseToAddEdit); 

    if (valueHidden === 'hidden') { //para editar
     

      console.log('entre aca en el edit mode')
      console.log('El nameWasPlaced es: ', nameWasPlaced)
      
      const expensesEdited = expenses.map((expense) => {
        if (expense.name === nameWasPlaced) {
          expense.name = expenseToAddEdit.name
          expense.price = expenseToAddEdit.price
          expense.date = expenseToAddEdit.date        
        }
        return expense
      })
      console.log(expensesEdited)
      setExpenses([...expensesEdited])
      setValueHidden('not-hidden')

    } else { //para agregar

      setExpenses((prevExp) => {
        //aca en teoria seteo los Expenses del estado previo (seteados como iniciales en linea 66 con el useState)
        return [
          ...prevExp,
          expenseToAddEdit, //le agrego el nuevo expense
        ]; //le digo que mantenga los previos
      });
      setValueHidden('hidden')
    }
    console.log(valueHidden)
  };

  const emptyingDB = () => {
    setExpenses([]);
  }

  const narrowingDownPlacedName = (namePlaced) => {
    setNamePlaced(namePlaced)
  }
  const narrowingDownPlacedPrice = (pricePlaced) => {
    setPricePlaced(pricePlaced)
  }
  const narrowingDownPlacedDate = (datePlaced) => {
    setDatePlaced(datePlaced)
  }

  return (
    <>
      <NewExp onAppExpenses={addExpenseHandler} /* valores que subieron y ahora van a bajar por expenses */
      hiddenValueOnApp={hiddenValueHandler} /* este vino del expForm luego de hacer click en edit or add expense */
      emptyTheDB={emptyingDB} 
      narrowDownPlacedName={nameWasPlaced} /* son los que vienen del exp-item y ahora bajan hasta el expform */
      narrowDownPlacedPrice={priceWasPlaced}
      narrowDownPlacedDate={dateWasPlaced}
      hiddenValue={valueHidden} /* este valor baja para decirle al expForm que ocultar/mostrar */
      />
      <Expenses
        theExpenses={expenses} /* valores que bajan */
        hiddenValue={passingHiddenValue} /* valores que subieron */
        placedName={narrowingDownPlacedName}
        placedPrice={narrowingDownPlacedPrice}
        placedDate={narrowingDownPlacedDate}
      />
    </>
  );
}

export default App;
