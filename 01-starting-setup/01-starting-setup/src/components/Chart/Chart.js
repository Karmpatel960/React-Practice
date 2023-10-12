import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';


const Chart = (props) =>{
    const dataPointValues = props.dataPoint.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);
    return(
        <div className="chart">
            {
                props.dataPoint.map(dataPoint => (
                    <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                    />
                ))
            }
        </div>
    )
}

export default Chart;