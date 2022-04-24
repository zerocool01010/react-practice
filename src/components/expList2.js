import React from 'react';
import './expList.css'
import ExpenseItem from "./expense-item";
import Card from "./cards/Card";

const ExpensesList2 = props => {
    //props.expensesData[0] son los expenses sin filtrar
    //props.expensesData[1] son los expenses filtrados por anio (aunque puede que venga vacio o con todos los elementos sin se selecciono la opcion 'sin filtrar')
    //props.expensesData[2] es el booleano que se setea en true si el anio del filtrado no tiene elementos

    console.log('Los expenses Data en expList2:', props.expensesData[0])

    if (props.expensesData[1].length > 0 || props.expensesData[2]) { //a este IF se entra SOLO si ocurre el evento del select y se llama a filterChangeHandler en el father comp, pero si se elige la opcion sin filtro NO entra en este IF
        if (props.expensesData[2] && props.expensesData[1].length === 0) { //la segunda condicion es porque el state de emptyYear puede quedar seteado en true y seguir entrando aca luego de que el usuario quiere volver a seleccionar un anio que SI tiene elementos para filtrar
            return <p className="expenses-list__fallback">There are no elements to show for this year!</p>
        } else {
            console.log("Entre aca para listar los expenses filtrados");
            console.log(props.expensesData[1]);

            return <ul className='expenses-list'>{props.expensesData[1].map((expenseFiltered) => (
            <ExpenseItem key={expenseFiltered.props.id} /* estos valores bajan */
            name={expenseFiltered.props.name}
            price={expenseFiltered.props.price}
            date={expenseFiltered.props.date}
        
            hiddenValue={props.passingHiddenValueAction} /* estos valores suben */
            placedNameValue={props.passingPlacedNameVAction}
            placedPriceValue={props.passingPlacedPriceVAction}
            placedDateValue={props.passingPlacedDateVAction}/>
            ))}</ul>
        }
    } 

    return <>
    {props.expensesData[0].length === 0 ? (<Card className="expenses"><p>There are no elements in the database</p></Card>)
    : (<ul className='expenses-list'>{props.expensesData[0].map((expenseData) => (
    <ExpenseItem key={expenseData.id} /* estos valores bajan */
    name={expenseData.name}
    price={expenseData.price}
    date={expenseData.date}

    hiddenValue={props.passingHiddenValueAction} /* estos valores suben */
    placedNameValue={props.passingPlacedNameVAction}
    placedPriceValue={props.passingPlacedPriceVAction}
    placedDateValue={props.passingPlacedDateVAction}/>
    ))}</ul>)}
    </>
}

export default ExpensesList2;

//reducir la logica a un esquema binario, si viene con datos, renderizar, si viene sin datos, mostrar un mensaje de que no viene nada