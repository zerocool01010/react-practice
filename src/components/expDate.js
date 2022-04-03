import './expDate.css';

const expenseDate = (props2) => {
    const month = props2.dateChild.toLocaleString('en-US', {month: 'long'});
    const day = props2.dateChild.toLocaleString('en-US', {day: '2-digit'});
    const year = props2.dateChild.getFullYear();

    return <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
    </div>
}

export default expenseDate;