import React from 'react';
import './form.css';

function Form(props) {
  const [currentSavings, setCurrentSavings] = React.useState(0);
  const [yearlyContribution, setYearlyContribution] = React.useState(0);
  const [expectedReturn, setExpectedReturn] = React.useState(0);
  const [duration, setDuration] = React.useState(0);


  const handleContribution = (contribution) =>{
    setYearlyContribution(contribution.target.value);
  }

  const handleCurrentSavings = (savings) =>{
    setCurrentSavings(savings.target.value);
  }

  const handleexpectedReturn = (returnRate) =>{
    setExpectedReturn(returnRate.target.value);
  }

  const handleduration = (duration) =>{
    setDuration(duration.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    const yearlyData = {
      currentSavings: currentSavings,
      yearlyContribution: yearlyContribution,
      expectedReturn: expectedReturn,
      duration: duration,
    }

    console.log(yearlyData)
    props.calculateHandler(yearlyData)
    setYearlyContribution(0)
    setCurrentSavings(0)
    setExpectedReturn(0)
    setDuration(0)
  }

  const handleReset = (event) => {
    setYearlyContribution(0)
    setCurrentSavings(0)
    setExpectedReturn(0)
    setDuration(0)

    props.handleReset();
  }

    return (
        <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={handleCurrentSavings}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={handleContribution} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={handleexpectedReturn}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={handleduration}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="button" >
            Calculate
          </button>
        </p>
      </form>
    );
}

export default Form;
