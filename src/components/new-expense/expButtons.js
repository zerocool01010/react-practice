
const ExpenseButton = (props) => {

    const emptyDBHandler = () => {
        props.emptyingDB()
    }

    return <button type="button" onClick={emptyDBHandler}>Vaciar base de datos</button>
}

export default ExpenseButton