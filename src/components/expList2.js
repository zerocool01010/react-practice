import React from 'react';
import './expList.css'
import ExpenseItem from "./expense-item";

const ExpensesList2 = props => {
    
    console.log('Los expenses Data en expList2:', props.expensesData)

    return <ul className='expenses-list'>{props.expensesData.map((expenseData) => (
        <ExpenseItem key={expenseData.id} /* estos valores bajan */
        name={expenseData.name}
        price={expenseData.price}
        date={expenseData.date}

        hiddenValue={props.passingHiddenValueAction} /* estos valores suben */
        placedNameValue={props.passingPlacedNameVAction}
        placedPriceValue={props.passingPlacedPriceVAction}
        placedDateValue={props.passingPlacedDateVAction}/>
    ))}</ul>
}

export default ExpensesList2;

//reducir la logica a un esquema binario, si viene con datos, renderizar, si viene sin datos, mostrar un mensaje de que no viene nada