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

import Expenses from './components/expenses';

function App(){
  return <Expenses/>;
}

export default App;
