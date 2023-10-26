import React,{useState} from 'react';
import Form from './components/main_form/form';
import FormHeader from './components/header/Header';
import Result from './components/result/Result';

function App() {
  const [yearData,setyearData] =useState([]);


  const calculateHandler = (userInput) => {

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlyContribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      const totalInvestedCapital = yearlyContribution * duration;
      const totalInterest = currentSavings - totalInvestedCapital;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        investedcapital: totalInvestedCapital,
        totalinterest: totalInterest,
      });
  }
    console.log(yearlyData)
    setyearData(yearlyData);
  };

  const handleReset = () => {
    setyearData([]);
  };

  return (
    <div>
      <FormHeader/>
      <Form calculateHandler={calculateHandler}  handleReset={handleReset}/>
      <Result yearlyData={yearData}/>
    </div>
  );
}

export default App;
