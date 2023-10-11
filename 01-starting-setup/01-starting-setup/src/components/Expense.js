import React, { useState } from 'react'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter'
import ExpenseList from './ExpenseList'
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

  // let expensecontent = <p>Not Data Found</p>

  // if(listl.length > 0){
  //   expensecontent = listl.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  // }

  return (
    <>
      <ExpenseFilter selected={year} onyear={handleyear} />
      {/* <p>Data From year {infoText} is Hidden</p> */}
      {/* {listl.length === 0 && <p>No Expense Found. </p>}
      {
        listl.length  > 0 && listl.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}
      <ExpenseList item={listl}/>
    </>
  )
}

export default Expense
