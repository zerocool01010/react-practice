import './newExpense.css';
import ExpForm from './expenseForm';
import ExpButtons from './expButtons';

const NewExpense = (props) => {
    const expensedDataHandler = expDataToAddEdit => { //sintaxis de unico parametro que va sin los (), este param es el dato que viene del child component
        const expData = { //lo llamo igual que en el child component porque estoy en un componente/funcion diferente y usando otro nombre para el que viene del child comp as a parameter
            id: (Math.random()*10).toString(),
            ...expDataToAddEdit, //a lo que venga por parametro lo vamos a mantener y lo vamos a actualizar agregandole un id aleatorio que se convierte a string
        }
        props.toAddOrEditExp(expData); //mando a app.js los datos para agregar o editar
    }

    const hiddenVHandler = (hiddenV) => {
        props.hiddenValueOnApp(hiddenV)
    }

    const emptyingDBHandler = () => {
        props.emptyTheDB()
    }
    
    const changingHiddenValue = () => {
        props.invertingHiddenV()
    }

    return <div className='new-expense'>
                                                   
        <ExpForm addExpenseData={expensedDataHandler}  /* valores que suben */ 
                                                        /* aca vienen datos que seran para agregar o editar al array principal en app.js */
        hiddenValue={hiddenVHandler}                                              
                                    /* valores que bajan */
        hiddenV={props.hiddenValue}  /* trae el ultimo state de valueHidden de App.js que debe ser modificado luego de hacer click en edit or add expense y que la logica de app.js para el hiddenValue modifique su valor*/
        narrowingDownPlacedN={props.narrowDownPlacedName} /* pasando los valores para setear el Form */
        narrowingDownPlacedP={props.narrowDownPlacedPrice}
        narrowingDownPlacedD={props.narrowDownPlacedDate}
        />
        <ExpButtons emptyingDB={emptyingDBHandler}/>
        </div>; 
}

export default NewExpense;