import React from 'react';
import './Result.css';

function Result(props) {

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.yearlyData.map((yearData, index) => (
          <tr key={index}>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear.toFixed(2)}</td>
            <td>{yearData.yearlyInterest.toFixed(2)}</td>
            <td>{(yearData.savingsEndOfYear - props.initial - yearData.yearlyContribution * yearData.year).toFixed(2)}</td>
            <td>{(props.initial+ yearData.yearlyContribution* yearData.year).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Result;