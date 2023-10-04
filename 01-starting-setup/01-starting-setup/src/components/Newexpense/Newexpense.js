import React from 'react'
import './Newexpense.css'
import ExpenseForm from './ExpenseForm'

const Newexpense = (props) => {
  const SaveData = (entereddata) => {
    const expenseData = {
      ...entereddata,
      id: Math.random().toString(),
    }
    console.log(expenseData)
    props.newexpense(expenseData)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={SaveData} />
    </div>
  )
}

export default Newexpense
