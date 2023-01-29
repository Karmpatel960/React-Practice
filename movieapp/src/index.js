import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
function Booklist() {
  return (
    <body>
      <h1>BookList</h1>
      <section class='booklist'>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </body>
  )
}

const Book = () => {
  return (
    <section>
      <article class='book'>
        <Image></Image>
        <Title></Title>
        <Auther></Auther>
      </article>
    </section>
  )
}

const Image = () => {
  return (
    <img
      src='data:image/png;base64,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'
      alt=''
    />
  )
}

const auth = 'book Auther'
const Title = () => {
  const title = 'Book Title'
  return <h1>{title}</h1>
}
const Auther = () => <p>{auth}</p>

ReactDom.render(<Booklist />, document.getElementById('root'))
