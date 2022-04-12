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
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                    <option value='2014'>2014</option>
                    <option value='2013'>2013</option>
                    <option value=''>Sin filtro</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter