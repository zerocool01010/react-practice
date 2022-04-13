import React from 'react';
import './expList.css'

const ExpensesList = props => {
    let expensesContent = props.expenses[0]
    let expensesFiltered = props.expenses[1]
    let emptyYear = props.expenses[2]

    console.log(props.expenses)
    console.log('Expenses filtrado ', expensesFiltered.length > 0)
    console.log('Booleano de anio vacio ', emptyYear)

    if (expensesFiltered.length > 0 || emptyYear) { //el expenses[1] trae los expenses filtrados por anio, el expenses[2] trae el booleano que indica si en ese anio no habia elementos para mostrar
        console.log('estoy en el if del expensesF')
        if (emptyYear) {
            expensesContent = <p className="expenses-list__fallback">There is no match for this year!</p>
        }
        expensesContent = expensesFiltered;
    } 
    
    else {
        if (expensesContent.length > 0) {
            console.log('no toco nada')
        } else {
            expensesContent = <p className="expenses-list__fallback">There are no elements to show!</p>
        }
    }

    return <ul className='expenses-list'>{expensesContent}</ul>
}

export default ExpensesList;

//reducir la logica a un esquema binario, si viene con datos, renderizar, si viene sin datos, mostrar un mensaje de que no viene nada