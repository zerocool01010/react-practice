import React, {useState} from 'react';
import './expenseForm.css';

const expenseForm = () => {

    const nameChangeHandler = (event) => {
        
        /* console.log(event);
        console.log('El segundo en que se ingreso el valor del input: '+event.timeStamp);
        console.log('El valor del input es: ' +event.target.value); */

    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title/Name</label>
                    <input type='text' onChange={nameChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2021-01-01' max='2022-12-31'/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add expense</button>
                </div>
            </div>
        </form>
    )
}

export default expenseForm;