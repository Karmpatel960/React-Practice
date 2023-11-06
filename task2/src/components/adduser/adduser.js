import React, { useState } from 'react'
import styles from './adduser.module.css'
import Card from './Card'

function Adduser({ handleData }) {
  const [userData, setUserData] = useState({ name: '', age: '' })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleData(userData)
  }

  return (
    <div className={styles.centered}>
      <Card>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <div className={styles.label}>
              <label htmlFor='name'>Enter Name</label>
              <input
                className={styles['input input']}
                type='text'
                name='name'
                value={userData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.label}>
              <label htmlFor='age'>Enter Age(Years)</label>
              <input
                className={styles['input input']}
                type='text'
                name='age'
                value={userData.age}
                onChange={handleInputChange}
              />
            </div>
            <button type='submit' className={styles.button}>
              Add User
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Adduser
