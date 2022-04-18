import React from "react";

import Chart from "./chart/chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
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
