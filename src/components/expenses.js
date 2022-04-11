import ExpenseItem from "./expense-item";
import "./expenses.css";
import Card from "./cards/Card";
import { useState } from "react";
import ExpensesFilter from "./expensesFilter";

let filtered = false;

const Expenses = (props) => {
  /* console.log(initialExpenses); */
  /* props.onAppInitialExp(initialExpenses); */ //paso al parent comp los expenses
  const theExpenses = props.initialexpenses;
  const [yearFiltered, setFilteredYear] = useState(2019);
  

  let expensesMapped = []; //inicializo
  const [expensesF, setExpensesF] = useState(expensesMapped);

  let expensesContent = <p>Nothing was found</p>; //si el arreglo de abajo es = 0 entonces mostraremos este mensaje en el return tal cual

  const filterChangeHandler = (yearSelected) => {
    
    if (yearSelected !== '') {
      expensesMapped = []
      setFilteredYear(Number(yearSelected));
      console.log(Number(yearSelected));
      
      /* expensesMapped = theExpenses.map((expense, index) => {
        if (expense.date.getFullYear() === yearFiltered) 
        { 
            return(
              <ExpenseItem
                key={expense.id}
                name={expense.name}
                price={expense.price}
                date={expense.date}
              />
              )
          ;
        }}
      ); */
      for (const obj of theExpenses) {
        console.log(obj.date.getFullYear());
        if (obj.date.getFullYear() === yearFiltered) {
          console.log('here')
          expensesMapped.push(<ExpenseItem
            key={obj.id}
            name={obj.name}
            price={obj.price}
            date={obj.date}/>);
        }
      }
      console.log(expensesMapped)
      /* expensesFiltered = expensesMapped.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          name={expense.name}
          price={expense.price}
          date={expense.date}
        />
      ))  */
      
      filtered = true;
      console.log(filtered)
      /* setExpensesF(expensesFiltered) */

    } else {
      console.log('Anio no elegido')
      setFilteredYear(yearSelected);
      filtered = false;
    }
  };

  console.log(filtered)

  if (!filtered) {
    expensesMapped = theExpenses.map((expense, index) => (
        <ExpenseItem
          key={expense.id}
          name={expense.name}
          price={expense.price}
          date={expense.date}/>
    ));
  }

  
  if (expensesMapped.length > 0) {
    //verifico si el arreglo tiene elementos para decidir renderizarlo
    console.log('estoy aca aca aca')
    expensesContent = expensesMapped;
  }


  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={yearFiltered}
        onChangeFilter={filterChangeHandler}
      />
      <>{expensesContent}</>
    </Card>
  );
};
//debajo hay explicaciones y formas de renderizar condicionalmente como con ifs pero sin ifs
export default Expenses;

/* 
Tenemos dos maneras de renderizar con logica condicional en React
Tenemos la ternaria (ejemplo):

return <div>
  {someArray.length === 0 ? <p>No elements were found</p>} //aca el signo de pregunta hace de if, como diciendo que si la condicion antes del ? se cumple, entonces que se ejecute lo que esta a la derecha del ?
  </div>

Otro ejemplo:
return <div>
  {someArray.length === 0 ? (<p>No elements were found</p>) : (someArray.map(elem => (elem.nombre, elem.apellido)) )}  //aca lo que tenemos a diferencia del caso de arriba es que luego del if vienen los : (dos puntos) que funcionan como un else, entonces nos dice que si no se cumple la condicion anterior, entonces se ejecute lo que sigue a los :
</div>


Pero la ternaria tiene otra posibilidad: 
Ejemplo: 

return <div>
  {someArray.length === 0 && <p>Nothing was found</p>} //usando el operador AND hacemos el if liberandonos del else y funciona como el ?
  {someArray.length > 0 && someArray.map(elem => (elem.nombre, elem.apellido))} //y aca hacemos simplemente otro if con otra condicion diferente
</div>

Estas son distintas opciones sintacticas de renderizado condicional, pero en el codigo de arriba vamos a ver otra forma mas conocida
*/



/* for (const obj of theExpenses) {
  console.log(obj.date.getFullYear());
  if (obj.date.getFullYear() === yearFiltered) {
    
    expensesMapped.push(obj);
  }
}

for (const expense of expensesMapped) {
  <ExpenseItem
    key={expense.id}
    name={expense.name}
    price={expense.price}
    date={expense.date}
  />
} */