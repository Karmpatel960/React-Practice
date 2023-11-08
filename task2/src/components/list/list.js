import React from 'react'
import styles from './list.module.css'
import Card from '../adduser/Card' // Changed '../Card' to '.

function List(props) {
  return (
    <div className={styles.centered}>
      <Card>
        <div className={styles.users}>
          <ul className={styles.ul}>
            {props.items.map((item) => (
              <li className={styles.li} key={item.id}>
                {item.name} ({item.age} years old)
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  )
}

export default List
