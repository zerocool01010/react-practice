//despues veré como puedo traerla

const expensesDB = () => {
    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: Math.random() * 10,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', 
        title: 'New TV', 
        amount: Math.random() * 10, 
        date: new Date(2021, 2, 12)},
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: Math.random() * 10,
          date: new Date(2021, 2, 28),
        },
      ];
    return expenses;
}

export default expensesDB;