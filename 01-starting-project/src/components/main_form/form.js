import React from 'react';
import './form.css';


const userInputs = {
  currentSavings: 10000,
  yearlyContribution: 1000,
  expectedReturn: 7,
  duration: 10,
};
function Form(props) {
  // const [currentSavings, setCurrentSavings] = React.useState(0);
  // const [yearlyContribution, setYearlyContribution] = React.useState(0);
  // const [expectedReturn, setExpectedReturn] = React.useState(0);
  // const [duration, setDuration] = React.useState(0);

  const [input, setInput] = React.useState(userInputs);


  // const handleContribution = (contribution) =>{
  //   setYearlyContribution(contribution.target.value);
  // }

  // const handleCurrentSavings = (savings) =>{
  //   setCurrentSavings(savings.target.value);
  // }

  // const handleexpectedReturn = (returnRate) =>{
  //   setExpectedReturn(returnRate.target.value);
  // }

  // const handleduration = (duration) =>{
  //   setDuration(duration.target.value);
  // }
  const handleSubmit = (event) => {
    event.preventDefault()

    // const yearlyData = {
    //   currentSavings: userInputs.currentSavings,
    //   yearlyContribution: yearlyContribution,
    //   expectedReturn: expectedReturn,
    //   duration: duration,
    // }
    // setInput(userInputs);

    // console.log(yearlyData)
    props.calculateHandler(input)
    // setYearlyContribution(0)
    // setCurrentSavings(0)
    // setExpectedReturn(0)
    // setDuration(0)
  }

  const handleReset = (event) => {
    // setYearlyContribution(0)
    // setCurrentSavings(0)
    // setExpectedReturn(0)
    // setDuration(0)
    setInput(userInputs);

    props.handleReset();
  }

  const handleInput = (input,value) => {
    setInput((prevInput) =>{ return {
      ...prevInput,[input]:+value
  };});
  }

    return (
        <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
  <p>
    <label htmlFor="current-savings">Current Savings ($)</label>
    <input
      type="number"
      id="currentSavings"
      onChange={(event) => handleInput('currentSavings', event.target.value)}
      value={input.currentSavings}
    />
  </p>
  <p>
    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
    <input
      type="number"
      id="yearlyContribution"
      onChange={(event) => handleInput('yearlyContribution', event.target.value)}
      value={input.yearlyContribution}
    />
  </p>
</div>
<div className="input-group">
  <p>
    <label htmlFor="expected-return">Expected Interest (% per year)</label>
    <input
      type="number"
      id="expectedReturn"
      onChange={(event) => handleInput('expectedReturn', event.target.value)}
      value={input.expectedReturn}
    />
  </p>
  <p>
    <label htmlFor="duration">Investment Duration (years)</label>
    <input
      type="number"
      id="duration"
      onChange={(event) => handleInput('duration', event.target.value)}
      value={input.duration}
    />
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
