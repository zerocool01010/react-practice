import ExpenseItem from "./expense-item";
import "./expenses.css";
import Card from "./cards/Card";
import { useState } from "react";
import ExpensesFilter from "./expensesFilter";
import ExpensesList from "./expList";
import ExpensesList2 from './expList2'

import ExpensesChart from './expenses-chart'

const Expenses = (props) => {
  let expensesMapped = [];

  const [expensesFiltered, setExpensesF] = useState(expensesMapped); //inicializo states
  const [yearFiltered, setFilteredYear] = useState(2000);
  const [emptyYear, setEmptyYear] = useState(false)
  

  const filterChangeHandler = (yearSelected) => {
    
    if (yearSelected !== '') {
        expensesMapped = [] //vacio el arreglo porque de aca tiene que salir un arreglo con los elementos filtrados por anio, y si me olvido de vaciarlo, se vuelven a cargar luego de los anteriores
        
        setFilteredYear(Number(yearSelected));
        
        for (const obj of props.theExpenses) {
          if (obj.date.getFullYear() === (Number(yearSelected))) { //cambie el yearFiltered por el yearSelected porque cuando hacia la evaluacion de la condicion el yearFiltered siempre estaba un estado atras del que queria
            expensesMapped.push(<ExpenseItem
              key={obj.id}
              name={obj.name}
              price={obj.price}
              date={new Date(obj.date)}/>);
          }
        }

        if (expensesMapped.length === 0){ //si en ese anio no hay elementos para mostrar
          setEmptyYear(true)
        }

        setExpensesF(expensesMapped) //aca le asigno un nuevo estado, ahora el arreglo de componenentes expensesMapped reemplaza el arreglo vacio inicial de expensesMapped en el state
      } else {
        setFilteredYear(yearSelected);
        setExpensesF(expensesMapped) //tengo que asignarle esto aunque sea redudante con el estado inicial para que reevalue el codigo del comp
      }
    };
  
    const passingHiddenValue = () => {
      props.hiddenValue() //al App.js father component
    }

    const passingPlacedNameV = (namePlaced) => {
      props.placedName(namePlaced) //al App.js father component
    }

    const passingPlacedPriceV = (pricePlaced) => {
      props.placedPrice(pricePlaced) //al App.js father component
    }

    const passingPlacedDateV = (datePlaced) => {
      props.placedDate(datePlaced) //al App.js father component
    }

    //en definitiva a ExpensesList2 voy a pasar el arreglo sin filtrar (expensesContent), el arreglo filtrado si es que se pudo filtrar algo (expensesFiltered), y un booleano en caso de que el anio no tuviera elementos para filtrar (emptyYear)
    
    return <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearFiltered}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={expensesFiltered}/>
        {/* <ExpensesList expenses={[props.theExpenses, expensesFiltered, emptyYear]}></ExpensesList> */}
        <ExpensesList2
        expensesData={[props.theExpenses, expensesFiltered, emptyYear]}
        passingHiddenValueAction={passingHiddenValue} /* estos valores suben */
        passingPlacedNameVAction={passingPlacedNameV}
        passingPlacedPriceVAction={passingPlacedPriceV}
        passingPlacedDateVAction={passingPlacedDateV}
        />
      </Card>
    </li>;
};

export default Expenses;

//debajo hay explicaciones y formas de renderizar condicionalmente como con ifs pero sin ifs

/* 
Tenemos dos maneras de renderizar con logica condicional en React
Tenemos la ternaria (ejemplo):

return <div>
  {someArray.length === 0 ? <p>No elements were found</p>} //aca el signo de pregunta hace de if, como diciendo que si la condicion antes del ? se cumple, 
  entonces que se ejecute lo que esta a la derecha del ?
  </div>

Otro ejemplo:
return <div>
  {someArray.length === 0 ? (<p>No elements were found</p>) : (someArray.map(elem => (elem.nombre, elem.apellido)) )}  //aca lo que tenemos a diferencia del caso de arriba es que luego del if vienen 
  los : (dos puntos) que funcionan como un else, entonces nos dice que si no se cumple la condicion anterior, entonces se ejecute lo que sigue a los :
</div>


Pero la ternaria tiene otra posibilidad: 
Ejemplo: 

return <div>
  {someArray.length === 0 && <p>Nothing was found</p>} //usando el operador AND hacemos el if liberandonos del else y funciona como el ?
  {someArray.length > 0 && someArray.map(elem => (elem.nombre, elem.apellido))} //y aca hacemos simplemente otro if con otra condicion diferente
</div>

Estas son distintas opciones sintacticas de renderizado condicional, pero en el codigo de arriba vamos a ver otra forma mas conocida
*/

/* 
Posibles salidas del codigo:
a. inicio el browser,
  1. 
    
    b. - (no hago nada)
    c. llega el arreglo expenses con sus elementos por el parent y se guarda en theExpenses
    c2. inicializo el state de yearFiltered con el integer 2000 como valor inicial
    c3. inicializo el state de emptyYear con el booleano false como valor inicial
    d. inicializo expensesMapped como arreglo vacio
    d2. inicializo el state de expensesFiltered con el arreglo expensesMapped (vacio) como valor inicial
    e. inicializo expensesContent con un string
    f. ignora el filterChangeHandler porque no hay evento que lo llame
    g. se itera theExpenses creando un componente por cada iteracion y se asigna todo en expensesMapped
    h. entra en el if del expensesMapped.length > 0 y asigna el valor de expensesMapped a expensesContent, ahora expensesContent es el arreglo de componentes
    i. en el return voy al ExpensesList comp y le paso expenses con tres elementos: [expensesContent (arreglo de comps expenseItem), 
      expensesFiltered (que tiene el arreglo vacio que era el valor inicial de expensesMapped), emptyYear (que trae el valor inicial false, que nunca fue alterado)]
          
        sigue en expList.js: 
          
          j. NO entra en el IF porque expensesFiltered.length no es > 0 y el emptyYear == false (OR operator)
          k. ENTRA en el ELSE
          l. ENTRA en el IF anidado porque expensesContent.length es > 0
          m. no hace nada
          n. NO entra en el ELSE anidado
          o. return de expensesContent que traia el arreglo de todos los ExpenseItem componentes y renderiza TODOS los elementos
  2.

    b. selecciono un anio que tiene elementos
    c. llega el arreglo expenses con sus elementos por el parent y se guarda en theExpenses
    c2. inicializo el state de yearFiltered con el integer 2000 como valor inicial
    c3. inicializo el state de emptyYear con el booleano false como valor inicial
    d. inicializo expensesMapped como arreglo vacio
    d2. inicializo el state de expensesFiltered con el arreglo expensesMapped (vacio) como valor inicial
    e. inicializo expensesContent con un string
    f. entro en el filterChangeHandler por el EVENTO del SELECT de un anio que llegara por parametro como yearSelected
    g. entro en el primer IF porque se cumple la condicion de yearSelected !== '' ya que llega el value de un anio con elementos (ejem: 2021)
    h. vacio el arreglo expensesMapped (ya estaba vacio)
    i. llamo a setFilteredYear que pasa el yearSelected parseado a Number como valor de yearFiltered del state
    j. hago un FOR de theExpenses con el IF anidado que pone como condicion que el anio del elemento iterado sea === al yearSelected
    k. pushea ExpensesItem componentes que cumplen con la condicion anterior dentro del arreglo vacio de expensesMapped
    l. NO se mete en el segundo IF anidado porque no se cumple la condicion de que expensesMapped.length sea === 0 ya que le acabo de pushear elementos del anio 2021
    m. llama a setExpensesF y pasa el expensesMapped con los elementos del 2021 como valor a expensesFiltered del state
    m2. ignoro el ELSE anidado y salgo de la funcion filterChangeHandler
    n. se itera theExpenses creando un componente por cada iteracion y se asigna todo en expensesMapped, en este punto tengo un expensesFiltered que tiene los
    elementos filtrados del anio 2021 que antes estaban en expensesMapped, y ahora a expensesMapped le he asignado un nuevo valor que es el de todos los componentes ExpenseItem iterados desde theExpenses
    n2. entra en el if del expensesMapped.length > 0 y asigna el valor de expensesMapped a expensesContent, ahora expensesContent es el arreglo de componentes
    n3. en el return voy al ExpensesList comp y le paso expenses con tres elementos: [expensesContent (arreglo de comps expenseItem), 
      expensesFiltered (que tiene el arreglo con los componentes/elementos filtrados del anio 2021), emptyYear (que trae el valor inicial false, que nunca fue alterado)]

        sigue en expList.js:
          
          o. ENTRA en el IF porque expensesFiltered.length es > 0 aunque el emptyYear == false (OR operator)
          o2. NO entra en el IF anidado porque emptyYear == false
          o3. ASIGNA el valor de expensesFiltered (que trae los componentes ExpensesItem filtrados del anio 2021) a expensesContent (que antes tenia todos los componentes sin filtrado)
          p. NO ENTRA o IGNORA el else anidado
          q. return de expensesContent que tiene los componentes ExpensesItem filtrados del anio 2021
  3.
    
    b. selecciono un anio que NO tiene elementos
    c. llega el arreglo expenses con sus elementos por el parent y se guarda en theExpenses
    c2. inicializo el state de yearFiltered con el integer 2000 como valor inicial
    c3. inicializo el state de emptyYear con el booleano false como valor inicial
    d. inicializo expensesMapped como arreglo vacio
    d2. inicializo el state de expensesFiltered con el arreglo expensesMapped (vacio) como valor inicial
    e. inicializo expensesContent con un string
    f. entro en el filterChangeHandler por el EVENTO del SELECT de un anio que llegara por parametro como yearSelected
    g. entro en el primer IF porque se cumple la condicion de yearSelected !== '' ya que llega el value de un anio SIN elementos (ejem: 2014)
    h. vacio el arreglo expensesMapped (ya estaba vacio)
    i. llamo a setFilteredYear que pasa el yearSelected parseado a Number como valor de yearFiltered del state
    j. hago un FOR de theExpenses con el IF anidado que pone como condicion que el anio del elemento iterado sea === al yearSelected
    k. pushea ExpensesItem componentes que cumplen con la condicion anterior dentro del arreglo vacio de expensesMapped, PERO el anio es uno sin elementos asi que no va a pushear nada, porque no
    se va a cumplir la conficion del IF anidado en el FOR de j (entonces expensesMapped va a quedar vacio)
    l. SI se mete en el segundo IF anidado porque se cumple la condicion de que expensesMapped.length sea === 0 ya que NO le pushee ningun elemento porque el anio 2014 no tiene
    m. llama al setEmptyYear y le pasa true de valor que se almacenara como emptyYear
    n. llama a setExpensesF y pasa el expensesMapped con los elementos del 2014 como valor a expensesFiltered del state, pero expensesMapped esta vacio entonces expensesFiltered quedara como arreglo vacio
    n2. ignoro el ELSE anidado y salgo de la funcion filterChangeHandler
    o. se itera theExpenses creando un componente por cada iteracion y se asigna todo en expensesMapped, en este punto tengo un expensesFiltered que tiene los
    elementos filtrados del anio 2014 que antes estaban en expensesMapped (o sea ningun elemento), y ahora a expensesMapped le he asignado un nuevo valor que es el de todos los componentes ExpenseItem iterados desde theExpenses
    o2. entra en el if del expensesMapped.length > 0 y asigna el valor de expensesMapped a expensesContent, ahora expensesContent es el arreglo de componentes
    o3. en el return voy al ExpensesList comp y le paso expenses con tres elementos: [expensesContent (arreglo de comps expenseItem), 
      expensesFiltered (que tiene el arreglo con los componentes/elementos filtrados del anio 2014, o sea arreglo vacio), emptyYear (que trae el valor true, que fue alterado en uno de los IF)]

        sigue en expList.js:

        p. ENTRA en el IF porque aunque expensesFiltered.length NO es > 0 el emptyYear == true valida la expresion logica (OR operator)
        q. ENTRA en el IF anidado porque emptyYear es == true
        q2. asigna un string que dice "there is no match for this year" a la variable expensesContent que tenia el arreglo de comps expenseItem
        q3. sale del IF anidado y asigna expensesFiltered (que viene vacio porque es un anio sin elementos) a la variable expensesContent, que acababa de ser asiganda con un string
        r. IGNORA el ELSE y retorna expensesContent que termina siendo un arreglo vacio, por eso en el output no sale nada

  4.  
    
    b. selecciono la opcion de SIN FILTRO
    c. llega el arreglo expenses con sus elementos por el parent y se guarda en theExpenses
    c2. inicializo el state de yearFiltered con el integer 2000 como valor inicial
    c3. inicializo el state de emptyYear con el booleano false como valor inicial
    d. inicializo expensesMapped como arreglo vacio
    d2. inicializo el state de expensesFiltered con el arreglo expensesMapped (vacio) como valor inicial
    e. inicializo expensesContent con un string
    f. entro en el filterChangeHandler por el EVENTO del SELECT de un anio que llegara por parametro como yearSelected
    g. IGNORO el IF porque NO se cumple la condicion de que yearSelected !== '' ya que llega justamente como valor de yearSelected === ''
    h. ENTRO en el ELSE, y llamo a setExpensesF y le paso como argumento expensesMapped, por lo cual ahora a expensesFiltered se le asignara
    el valor de expensesMapped, que era el mismo que tenia inicialmente (arreglo vacio)
    i. salgo de filterChangeHandler y luego se itera theExpenses creando un componente por cada iteracion y se asigna todo en expensesMapped, en este punto tengo un expensesFiltered 
    que tiene el mismo valor inicial de expensesMapped (o sea ningun elemento en el arreglo), 
    y ahora a expensesMapped le he asignado un nuevo valor que es el de todos los componentes ExpenseItem iterados desde theExpenses
    j. entra en el if del expensesMapped.length > 0 y asigna el valor de expensesMapped a expensesContent, 
    ahora expensesContent es el arreglo de componentes
    k. en el return voy al ExpensesList comp y le paso expenses con tres elementos: [expensesContent (arreglo de comps expenseItem), 
      expensesFiltered (que tiene el ultimo valor asignado por setExpensesF en el ELSE que es el de un arreglo vacio, igual que su valor inicial), 
      emptyYear (que trae el valor false de inicializacion)]

        sigue en expList.js:

        l. NO entra en el IF porque expensesFiltered.length NO es > 0 y el emptyYear == false invalida la expresion logica (OR operator)
        m. ENTRA en el ELSE anidado
        n2. ENTRA en el IF anidado del ELSE porque expensesContent cumple la condicion de > 0 ya que trae el arreglo de componentes expenseItem
        n3. dentro del IF no se hace nada mas que un console.log
        o. IGNORA el ELSE y retorna expensesContent que termina siendo el arreglo de comps expenseItem que llego por props

Conclusiones: -el paso de "entra en el if del expensesMapped.length > 0" se cumple siempre, esa logica estaria de mas pero es una buena practica
siempre chequear si viene algo en un arreglo ya que en la practica real eso viene de un base de datos y nosotros no sabemos si trae o no algo
-deberia sacar el ELSE que viene luego del IF del yearSelected porque lo que hace es redundante, ya se hizo antes asi que si no entra en el IF
del yearSelected entonces lo que se hace en el ELSE está de más
-en expList el expensesContent = expensesFiltered deberia ir antes del if y no despues

*/
