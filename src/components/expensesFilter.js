import React from 'react';
import './expensesFilter.css';

const ExpensesFilter = props => {
    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className='expenses__filter'>
            <div className='expenses_filt'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value=''>Sin filtro</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter