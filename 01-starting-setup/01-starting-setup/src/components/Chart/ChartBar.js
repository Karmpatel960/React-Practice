import React from 'react';
import './ChartBar.css';

const ChartBar = (props) =>{
    let barhight = '0%';
    if(props.maxValue>0){
        barhight = Math.round((props.value/props.maxValue) *100) + '%';
    }
    return(
        <div className="char-bar">
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height: barhight }}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    )
}

export default ChartBar;