import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import { data } from './Books'
import Book from './Book'

function Booklist() {
  return (
    <body>
      <h1>BookList</h1>
      <section className='booklist'>
        {data.map((book) => {
          return <Book key={book.id} book={book}></Book>
        })}
      </section>
    </body>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'))
