/* import './expense-item.css';

function ExpenseItem(props) {
    const expDate = props.date;
    const expTitle = props.name;
    const expPrice = props.price;

    return <div className='expense-item'>
            <div>{expDate.toISOString()}</div> {/* el toISOString() sirve para objetos tipo Date }*//*
                <div className='expense-item__description'>
                    <h2>{expTitle}</h2>
                <div className='expense-item__price'>${expPrice}</div>
                </div>
    </div>
}

export default ExpenseItem; */
import Card from './cards/Card';
import './expense-item.css';
import ExpenseDate from './expDate';

const ExpenseItem = (props) => {
    const expenseTitle = props.name
    const expenseAmount = props.price

    const props2 = props; //para el componente hijo en expDate.js

    const clickHandlerEvent = () => {
        console.log('Clicked');
    }

    return <Card className='expense-item'> {/* al agregar el componente Card con estilos definidos, el componente ya no soporta el className, solo lo que trae Card, y si queremos que soporte el className, tenemos que pasarlo a traves de props */}
            <ExpenseDate dateChild={props2.date}/>   
        <div className='expense-item__description'> {/* pero el resto de custom comps default (jsx o falso html) sigue soportando el estilo de los className */}
            <h2>{expenseTitle}</h2>
        </div>
        <div className='expense-item__price'>${expenseAmount}</div>
        <button onClick={clickHandlerEvent}/* aca no estamos llamando a la funcion porque no hay parentesis */>
            Change the title</button> {/* en su lugar estamos generando un apuntador que apunta a la funcion mas arriba declarada */}
    </Card>;
}

export default ExpenseItem;