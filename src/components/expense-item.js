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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, {useState, useEffect} from 'react';
import Card from './cards/Card';
import './expense-item.css';
import ExpenseDate from './expDate';

const ExpenseItem = (props) => {
    const expenseName = props.name //valores que vienen de la db, sin modificar
    const expensePrice = props.price
    const expenseDate = props.date

    const [name, setName] = useState(expenseName); // en expenseName seteo un state inicial, y luego useState retorna un array de dos elementos, donde name como variable recibe el valor que se pasa por
                                                    //parametro llamando setName
                                                    //una vez que se completa el proceso, el componente/funcion donde se encuentra el State es re-evaluado ejecutando el codigo otra vez
                                                    //tener en cuenta que como el comp ExpenseItem es llamado mas de una vez en el parent component, entonces cada ExpenseItem comp tendra su PROPIO state particular,
                                                    //eso permite que al hacer click en uno de los buttons solo cambie el estado del title correspondiente, y no todos los titles cambien al mismo tiempo
                                                    //y tener en cuenta que expenseName sera el valor inicial de useState solo la primera vez que el codigo del componente ExpenseItem es ejecutado
                                                    //en ese momento que es ejecutado, el parametro que le pasemos a setName sera el nuevo valor actualizado del useState, y por ende si se vuelve a utilizar
                                                    //ese sera el valor inicial de useState en lugar de expenseName, entonces modifica el valor de inicializacion
    const [price, setPrice] = useState(expensePrice)
    const [date, setDate] = useState(expenseDate)

    const clickHandlerEvent = () => {
        props.hiddenValue() //al expenses.js father component
        props.placedNameValue(name) //aca la idea es mandar los valores de este item hasta App y de ahi a expenseForm
        props.placedPriceValue(price)
        props.placedDateValue(date)
    }

   /*  useEffect( () => {
        setName(props.narrowingDownNameToEdit)
    }, [props.narrowingDownNameToEdit])

    useEffect( () => {
        setPrice(props.narrowingDownPriceToEdit)
    }, [props.narrowingDownPriceToEdit])

    useEffect( () => {
        setDate(props.narrowingDownDateToEdit)
    }, [props.narrowingDownDateToEdit]) */

    return <Card className='expense-item'> {/* al agregar el componente Card con estilos definidos, el componente ya no soporta el className, solo lo que trae Card, y si queremos que soporte el className, tenemos que pasarlo a traves de props */}
            <ExpenseDate dateChild={new Date(date)}/>   
        <div className='expense-item__description'> {/* pero el resto de custom comps default (jsx o falso html) sigue soportando el estilo de los className */}
            <h2>{name}</h2>
        </div>
        <div className='expense-item__price'>$ {price}</div>
        {/* <input placeholder='Ingresa el titulo' type='text' id='title'></input> */}
        <button onClick={clickHandlerEvent}/* el onClick es para reaccionar al evento del click. Aca no estamos llamando a la funcion porque no hay parentesis */>
            Edit</button> {/* en su lugar estamos generando un apuntador que apunta a la funcion mas arriba declarada */}
    </Card>;
}

export default ExpenseItem;