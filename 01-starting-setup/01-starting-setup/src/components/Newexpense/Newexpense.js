import React,{ useState } from 'react'
import './Newexpense.css'
import ExpenseForm from './ExpenseForm'

const Newexpense = (props) => {
  const [addexpense,setexpense] = useState(false);
  const SaveData = (entereddata) => {
    const expenseData = {
      ...entereddata,
      id: Math.random().toString(),
    }
    console.log(expenseData)
    props.newexpense(expenseData)
  }

  const startexpense = () =>{
    setexpense(true);
  }

  const stopedit = () =>{
    setexpense(false);
  }
  return (
    <div className='new-expense'>
      {!addexpense && <button onClick={startexpense}>Add New Expense</button> }
      {addexpense && <ExpenseForm onSaveExpenseData={SaveData} onCancel={stopedit}/>  }
    </div>
  )
}

export default Newexpense
