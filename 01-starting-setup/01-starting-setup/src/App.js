import React, { useState } from 'react'
import Expense from './components/Expense'
import './components/Expense.css'
import Newexpense from './components/Newexpense/Newexpense'

const d_expense = [
  {
    id: 1,
    date: new Date(2021, 4, 28),
    title: 'Car Insurance',
    amount: 294.67,
  },
  {
    id: 2,
    date: new Date(2022, 4, 28),
    title: 'Bike Insurance',
    amount: 290.67,
  },
  {
    id: 3,
    date: new Date(2023, 4, 28),
    title: 'Home Insurance',
    amount: 294.67,
  },
  {
    id: 4,
    date: new Date(2024, 4, 28),
    title: 'Life Insurance',
    amount: 294.67,
  },
]

function App() {
  const [expenses, setExpenses] = useState(d_expense)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div>
      <Newexpense newexpense={addExpenseHandler} />
      <div className='expenses'>
        <Expense item={expenses}></Expense>
      </div>
      <p>This is Paragraph in React</p>
    </div>
  )
}

export default App
