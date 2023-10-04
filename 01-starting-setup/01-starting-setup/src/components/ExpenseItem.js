import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'

function ExpenseItem(props) {
  // const expensedate = new Date(2021, 4, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  // this is normal controller it will nor change state
  //   let title = props.title

  //   const clickHandler = () => {
  //     title = 'Updated!'
  //     console.log('clicked!!')
  //   }

  return (
    <>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className=' expense-item__price '>${props.amount}</div>
        </div>
      </Card>
    </>
  )
}

export default ExpenseItem
