import React from 'react'
import styles from './list.module.css'

function List(props) {
  return (
    <div className={styles.users}>
      <ul className={styles.ul}>
        {props.items.map(
          (
            item // Changed 'props.item' to 'props.items'
          ) => (
            <li className={styles.li} key={item.id}>
              {item.name} ({item.age} years old)
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default List
