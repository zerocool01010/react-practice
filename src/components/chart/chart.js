import React from "react";
import "./chart.css";
import ChartBar from "./chart-bar";

const Chart = (props) => {
    /* console.log(props.dataPoints) */
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  /* console.log(props.dataPoints) */

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.id}
        />
      ))}
    </div>
  );
};

export default Chart;
