import React from 'react'

const Book = (props) => {
  const { img, title, auth } = props.book
  console.log(props)

  const clickHandler = () => {
    alert('hello world')
  }

  const deleteHandler = () => {
    alert('delete complited')
  }

  return (
    <section>
      <article className='book'>
        {/* <Image></Image>
        <Title></Title>
        <Auther></Auther> */}
        <img src={img} alt='' />
        <p>{title}</p>
        <p>{auth}</p>
        <button type='button' onClick={clickHandler}>
          click
        </button>

        <button type='button' onClick={deleteHandler}>
          delete
        </button>
        {/* {props.children} */}
      </article>
    </section>
  )
}

export default Book
