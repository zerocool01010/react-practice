import ExpenseItem from "./expense-item";
import "./expenses.css";
import Card from "./cards/Card";
import { useState } from "react";
import ExpensesFilter from "./expensesFilter";

let filtered = false;

const Expenses = (props) => {
  
  const theExpenses = props.initialexpenses;
  const [yearFiltered, setFilteredYear] = useState(2000);
  

  let expensesMapped = []; //inicializo
  const [expensesF, setExpensesF] = useState(expensesMapped);

  let expensesContent = <p>Nothing was found</p>; //si el arreglo de mas abajo es = 0 entonces mostraremos este mensaje en el return tal cual

  const filterChangeHandler = (yearSelected) => {
    
    if (yearSelected !== '') {
      expensesMapped = [] //vacio el arreglo porque de aca tiene que salir un arreglo con los elementos filtrados por anio, y si me olvido de vaciarlo, se vuelven a cargar luego de los anteriores
      setFilteredYear(Number(yearSelected));
      console.log(Number(yearSelected));
      console.log(yearFiltered)
      
      for (const obj of theExpenses) {
        console.log(obj.date.getFullYear());
        if (obj.date.getFullYear() === (Number(yearSelected)) /* yearFiltered */) { //cambie el yearFiltered por el yearSelected porque cuando hacia la evaluacion de la condicion el yearFiltered siempre estaba un estado atras del que queria
          console.log('here')
          expensesMapped.push(<ExpenseItem
            key={obj.id}
            name={obj.name}
            price={obj.price}
            date={obj.date}/>);
        }
      }
      console.log(expensesMapped)
      
      filtered = true;
      console.log(filtered)
      setExpensesF(expensesMapped) //aca le asigno un nuevo estado, ahora el arreglo de componenentes expensesMapped reemplaza el arreglo vacio inicial de expensesMapped en el state

    } else {
      console.log('Anio no elegido')
      /* setFilteredYear(yearSelected); */
      setExpensesF(expensesMapped);
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

  if (expensesF.length > 0) {
    console.log('estoy en el if del expensesF')
    expensesContent = expensesF;
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
