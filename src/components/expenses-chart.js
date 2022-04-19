import React from "react";

import Chart from "./chart/chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    {id: 'a1', label: "jan", value: 0 },
    {id: 'a2', label: "feb", value: 0 },
    {id: 'a3', label: "mar", value: 0 },
    {id: 'a4', label: "apr", value: 0 },
    {id: 'a5',label: "may", value: 0 },
    {id: 'a6', label: "jun", value: 0 },
    {id: 'a7', label: "jul", value: 0 },
    {id: 'a8', label: "aug", value: 0 },
    {id: 'a9', label: "sep", value: 0 },
    {id: 'a10', label: "oct", value: 0 },
    {id: 'a11', label: "nov", value: 0 },
    {id: 'a12', label: "dec", value: 0 },
  ];

  /* console.log(props.expenses) */

  for (const expense of props.expenses) {
      /* console.log(expense.props.price) */
      const expenseMonth = expense.props.date.getMonth() //empezando en 0 => Enero
      /* console.log(expenseMonth) */
      chartDataPoints[expenseMonth].value += expense.props.price
  }

  return <Chart dataPoints={chartDataPoints}/>;
};

export default ExpensesChart;
