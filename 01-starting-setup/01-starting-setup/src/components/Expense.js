import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter'
function Expense(props) {
  const [year, setyear] = useState('2020')
  // const [filterInfotext, setfilterinfotext] = useState('2019,2021,2022')
  // let infoText = '2019,2021,2022'
  // if (year === '2020') {
  //   infoText = '2019,2021,2022'
  // } else if (year === '2019') {
  //   infoText = '2020,2021,2022'
  // } else if (year === '2022') {
  //   infoText = '2019,2020,2021'
  // } else {
  //   infoText = '2019,2020,2022'
  // }

  function handleyear(selectedyear) {
    setyear(selectedyear)
    console.log(selectedyear)
  }

  const listl = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === year
  })

  return (
    <>
      <ExpenseFilter selected={year} onyear={handleyear} />
      {/* <p>Data From year {infoText} is Hidden</p> */}
      {listl.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </>
  )
}

export default Expense
