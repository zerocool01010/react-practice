import React from 'react';
import './expList.css'

const ExpensesList = props => {
    console.log(props.expenses)
    
    if (props.expenses[1].length > 0) { //el expenses[1] trae los expenses filtrados por anio
        console.log('estoy en el if del expensesF')
        props.expenses[0] = props.expenses[1];
    }

    return <ul className='expenses-list'>{props.expenses[0]}</ul>
    
}

export default ExpensesList;