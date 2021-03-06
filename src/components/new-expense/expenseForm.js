import React, {useState} from 'react';
import './expenseForm.css';

const ExpenseForm = (props) => { //usare el props para poder ejecutar una funcion en este componente que esta definida en el parent component (o sea en NewExpense)
    const [inputName, setInputName] = useState('name/title'); //se puede tener multiples States porque cada uno trabaja por separado incluso estando en el mismo componente
    const [inputPrice, setInputPrice] = useState('amount/price');
    const [inputDate, setInputDate] = useState('date');

    //una alternativa para no tener 3 states y tener uno solo es la siguiente que va a estar comentada:

   /*  const [userInput, setUserinput] = useState(
        {
            inputName: '',
            inputPrice: '',
            inputDate: ''
        }
    ) //y abajo el changeHandler para esta forma de State multiple
    const nameChangeHandlerForMultState = (event) => {
        setUserinput({
            ...userInput, //con esto, que es parte de vainilla JS (no de React), estamos pasando los valores del ultimo estado de userInput, para no perder el Price y el Date, y luego si solo reemplazamos el Name 
            inputName: event.target.value, //si solamente queremos actualizar el Name pero SOLO ingresaramos el inputName aca, lo que estariamos haciendo es perder el inputName, Price y Date del estado anterior y reemplazarlos por un nuevo inputName, y para solucionar eso hacemos lo que sale arriba de este comentario
        })
     //luego deberiamos hacer otros changeHandler para el Price y el Date, y actualizar unicamente el inputPrice en uno, y el inputDate en el otro, siempre usando el ...userInput antes para salvar el estado anterior de lo que no queremos actualizar
        //pero hay otra sintaxis mejor cuando necesitas el estado previo y solo queres actualizar una unica de las variables (o no todas)
        //esta es una alternativa al setUserinput de arriba:
            setUserinput((prevState) => {
                return {...prevState, inputName: event.target.value}; //con esto logramos lo mismo que antes pero con una sintaxis mas recomendada y menos propensa a errores o bugs
            })
    } */

    const nameChangeHandler = (event) => { //event devuelve un JSON del que podemos aprovechar un monton de sus atributos, por ejemplo el que usamos debajo
        /* console.log(event);
        console.log('El segundo en que se ingreso el valor del input: '+event.timeStamp);
        console.log('El valor del input es: ' +event.target.value); */ 
                                            //el target.value nos muestra el value del input, que a medida que se va escribiendo en el input, el value cambia debido al onChangeHandler que llamamos cuando escribimos en el input
        setInputName(event.target.value); //y aca usamos ese valor para actualizar el estado del inputName
    }

    const amountChangeHandler = (event) => {
        setInputPrice(event.target.value);
    }
    const dateChangHandler = (event) => {
        setInputDate(event.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const expData = {
            name: inputName,
            price: inputPrice,
            date: new Date(inputDate) //por el huso horario a veces esta libreria puede devolverte un dia antes de la fecha que ingresas, algo raro
        } 
        /* new Date(Date.UTC(inputDate.split('-')[0]), inputDate.split('-')[1], inputDate.split('-')[2]) */ //una posibilidad para hacer el date pero me devuelve invalid Date
        /* console.log(expData); */
        props.expensedDataFromChild(expData) //paso el expData como dato o parametro que quiero que SUBA al parent component, que es el de NewExpense
        setInputName('')
        setInputPrice('')
        setInputDate('') //con esto reseteamos el value de los inputs
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title/Name</label>
                    <input type='text' value={inputName} onChange={nameChangeHandler}/> {/* el onChange como el onClick reacciona al event que indica el nombre, en este caso a cualquier cambio dentro del input */}
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={inputPrice} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={inputDate} min='1900-01-01' max='2025-12-31' onChange={dateChangHandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add expense</button> {/* aca no llamos a un onClick porque los forms con submit buttons cuando se hace click en uno ya ejecutan un event por defecto (el submit event) por ende
                                                                vamos a leer ese event al principio del form*/}
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;