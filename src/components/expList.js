import React from 'react';
import './expList.css'

const ExpensesList = props => {
    let expensesContent = props.expenses[0] //pueden venir elementos sin filtrar o puede no venir nada
    let expensesFiltered = props.expenses[1] //pueden venir elementos filtrados o puede venir elementos de un anio vacio (o sea nada)
    let emptyYear = props.expenses[2] //true, cuando en los elementos filtrados se dio un anio que no tenia nada, o false en caso contrario

    if (expensesFiltered.length > 0 || emptyYear) { //a este IF se entra SOLO si ocurre el evento del select y se llama a filterChangeHandler en el father comp, pero si se elige la opcion sin filtro NO entra en este IF
        if (emptyYear && expensesFiltered.length === 0) { //la segunda condicion es porque el state de emptyYear puede quedar seteado en true y seguir entrando aca luego de que el usuario quiere volver a seleccionar un anio que SI tiene elementos para filtrar
            expensesContent = <p className="expenses-list__fallback">There are no elements to show for this year!</p>
        } else {
            expensesContent = expensesFiltered;
        }
    } 
    
    return <ul className='expenses-list'>{expensesContent}</ul>
}

export default ExpensesList;

//reducir la logica a un esquema binario, si viene con datos, renderizar, si viene sin datos, mostrar un mensaje de que no viene nada