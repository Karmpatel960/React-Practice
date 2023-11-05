import React, { useState } from 'react'
import styles from './adduser.module.css'

function Adduser({ handleData }) {
  const [userData, setUserData] = useState({ name: '', age: '' })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = () => {
    // Pass the userData object to the handleData function
    handleData(userData)
  }

  return (
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
        <label htmlFor='age'>Enter Age</label>
        <input
          className={styles['input input']}
          type='text'
          name='age'
          value={userData.age}
          onChange={handleInputChange}
        />
      </div>
      <button type='submit' className={styles.button} onClick={handleSubmit}>
        Add User
      </button>
    </div>
  )
}

export default Adduser
