import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  // const [forminput, setForminput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // })

  // function formHandler(event) {
  //   setForminpuht((prevState)=>{
  //     return{
  //     ...prevState,
  //     title: event.target.value,
  //     }
  //   })
  //   setForminput({
  //       ...forminput,
  //       title : event.target.value,
  //   }
  //   )
  // }

  function handleText(event) {
    setTitle(event.target.value)
  }

  function handleAmount(event) {
    setAmount(event.target.value)
  }

  function handleDate(event) {
    setDate(event.target.value)
  }

  // function handleallinput(indentifier, value) {
  //   if (indentifier === 'title') {
  //     setTitle(value)
  //   }
  //   if (indentifier === 'amount') {
  //     setAmount(value)
  //   }
  //   if (indentifier === 'date') {
  //     setDate(value)
  //   }
  // }

  function submitHandler(event) {
    event.preventDefault()

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    }

    console.log(expenseData)
    props.onSaveExpenseData(expenseData)
    setTitle('')
    setAmount('')
    setDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__contols'>
        <div className='new-expense__control'>
          <label>Title</label>
          {/* <input
            type='text'
            onChange={(event) => handleallinput('title', event.target.value)}
          /> */}
          <input type='text' value={title} onChange={handleText} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={handleAmount}
            value={amount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={handleDate}
            value={date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
