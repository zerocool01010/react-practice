import ExpenseItem from './expense-item';
import './expenses.css';
import Card from './cards/Card';

const expenses = () => {
    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: Math.random() * 10,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', 
        title: 'New TV', 
        amount: Math.random() * 10, 
        date: new Date(2021, 2, 12)},
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: Math.random() * 10,
          date: new Date(2021, 2, 28),
        },
      ];
    
      return <Card className="expenses">
      <ExpenseItem name={expenses[0].title} 
      price={expenses[0].amount} 
      date={expenses[0].date}></ExpenseItem>
      <ExpenseItem name={expenses[1].title} 
      price={expenses[1].amount} 
      date={expenses[1].date}></ExpenseItem>
      <ExpenseItem name={expenses[2].title} 
      price={expenses[2].amount} 
      date={expenses[2].date}></ExpenseItem>
      </Card>
      ;
}

export default expenses;