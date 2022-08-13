import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css"

function Chart({ dataPoints }) {

    
   
    const dataPointVal=dataPoints.map((datapoint)=>datapoint.value)
    const maxValTotal=Math.max(...dataPointVal)

        
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValTotal}
        />
      ))}
    </div>
  );
}

export default Chart;
