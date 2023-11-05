import React from 'react';
import './Result.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

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
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>{formatter.format(yearData.savingsEndOfYear - props.initial - yearData.yearlyContribution * yearData.year)}</td>
            <td>{formatter.format(props.initial+ yearData.yearlyContribution* yearData.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Result;
