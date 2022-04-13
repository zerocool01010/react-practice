import React from 'react';
import './expList.css'

const ExpensesList = props => {
    console.log(props.expenses)
    console.log('Expenses filtrado ', props.expenses[1].length > 0)
    console.log('Booleano de anio vacio ', props.expenses[2])
    if (props.expenses[1].length > 0 || props.expenses[2]) { //el expenses[1] trae los expenses filtrados por anio, el expenses[2] trae el booleano que indica si en ese anio no habia elementos para mostrar
        console.log('estoy en el if del expensesF')
        if (props.expenses[2]) {
            props.expenses[0] = <p className="expenses-list__fallback">There is no match for this year!</p>
        }
        props.expenses[0] = props.expenses[1];
    } else {
        if (props.expenses[0].length > 0) {
            console.log('no toco nada')
        } else {
            props.expenses[0] = <p className="expenses-list__fallback">There are no elements to show!</p>
        }
    }

    return <ul className='expenses-list'>{props.expenses[0]}</ul>
}

export default ExpensesList;

//reducir la logica a un esquema binario, si viene con datos, renderizar, si viene sin datos, mostrar un mensaje de que no viene nada