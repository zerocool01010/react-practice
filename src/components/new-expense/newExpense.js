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

    const editingName = (nameEvent) => { //al App.js
        props.nameValueEdit(nameEvent)
    }
    const editingAmount = (amountEvent) => { //al App.js
        props.amountValueEdit(amountEvent)
    }
    const editingDate = (dateEvent) => { //al App.js
        props.dateValueEdit(dateEvent)
    }
    
    const changingHiddenValue = () => {
        props.toAppFatherAgain()
    }

    console.log(props.hiddenValue)

    return <div className='new-expense'>
        <ExpForm expensedDataFromChild={expensedDataHandler} /* //el expensedDataFromChild es como un puente (en realidad una funcion en el child component) que permite que ciertos datos que vienen del child al parent (el parent es ESTE componente, 
                                                                    y el child es obviamente el ExpForm) y cuando ALGO ocurre dentro del componente como el
                                                                    submit event entonces el expensedDataFromChild apunta a una funcion llamada expensedDataHandler a la cual le pasara los datos*/
        nameValueEdit={editingName} 
        amountValueEdit={editingAmount} 
        dateValueEdit={editingDate}
        hiddenV={props.hiddenValue} /* trae el state de valueHidden de App.js */
        toFatherAgain={changingHiddenValue}
        />
        <ExpButtons emptyingDB={emptyingDBHandler}/>
        </div>; 
}

export default NewExpense;