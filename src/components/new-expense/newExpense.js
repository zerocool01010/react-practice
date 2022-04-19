import './newExpense.css';
import ExpForm from './expenseForm';
import ExpButtons from './expButtons';

const NewExpense = (props) => {
    const expensedDataHandler = expensedDataFromTheChildComponent => { //sintaxis de unico parametro que va sin los (), este param es el dato que viene del child component
        const expData = { //lo llamo igual que en el child component porque estoy en un componente/funcion diferente y usando otro nombre para el que viene del child comp as a parameter
            id: (Math.random()*10).toString(),
            ...expensedDataFromTheChildComponent, //a lo que venga por parametro lo vamos a mantener y lo vamos a actualizar agregandole un id aleatorio que se convierte a string
        }
        props.onAppExpenses(expData);
    }

    const emptyingDBHandler = () => {
        props.emptyTheDB()
    }

    const editingName = (name) => { //al App.js
        props.GoingUpNameValueEdit(name)
    }
    const editingPrice = (price) => { //al App.js
        props.GoingUpPriceValueEdit(price)
    }
    const editingDate = (date) => { //al App.js
        props.GoingUpDateValueEdit(date)
    }
    
    const changingHiddenValue = () => {
        props.toAppFatherAgain()
    }

    return <div className='new-expense'>
        <ExpForm addExpenseData={expensedDataHandler} /* //el expensedDataFromChild es como un puente (en realidad una funcion en el child component) que permite que ciertos datos que vienen del child al parent (el parent es ESTE componente, 
                                                                    y el child es obviamente el ExpForm) y cuando ALGO ocurre dentro del componente como el
                                                                    submit event entonces el expensedDataFromChild apunta a una funcion llamada expensedDataHandler a la cual le pasara los datos*/
        GoingUpNameToEdit={editingName} 
        GoingUpPriceToEdit={editingPrice} 
        GoingUpDateToEdit={editingDate}
        hiddenV={props.hiddenValue} /* trae el state de valueHidden de App.js */
        toFatherAgain={changingHiddenValue}
        narrowingDownPlacedN={props.narrowDownPlacedName} /* pasando los valores para setear el Form */
        narrowingDownPlacedP={props.narrowDownPlacedPrice}
        narrowingDownPlacedD={props.narrowDownPlacedDate}
        />
        <ExpButtons emptyingDB={emptyingDBHandler}/>
        </div>; 
}

export default NewExpense;