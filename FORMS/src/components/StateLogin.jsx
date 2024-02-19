import React, { useState } from 'react'

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [enteredPassword, setEnteredPassword] = useState('')

  const [enterDetails, setEnterDetail] = useState({
    email: '',
    password: '',
  })

  const [didedit, setDidedit] = useState({
    email: false,
    password: false,
  })

  const emailIsValid = didedit.email && !enterDetails.email.includes('@')
  const passwordIsValid = enterDetails.password.trim().length > 6

  function handleSubmit(event) {
    event.preventDefault()

    console.log(enterDetails)
    console.log('Form submitted')
    // enterDetails.email = ' '
    // enterDetails.password = ' '
  }

  function handleInput(identifier, value) {
    setEnterDetail({
      ...enterDetails,
      [identifier]: value,
    })
    setDidedit((prevedit) => ({
      ...prevedit,
      [identifier]: false,
    }))
  }

  function handleBlur(identifier) {
    setDidedit((prevedit) => ({
      ...prevedit,
      [identifier]: true,
    }))
  }
  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value)
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value)
  // }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            // onChange={handleEmailChange}
            // value={enteredEmail}
            onBlur={() => handleBlur('email')}
            onChange={(event) => handleInput('email', event.target.value)}
            value={enterDetails.email}
          />
          <div className='control-error'>
            {emailIsValid && <p>Email must include "@"</p>}
          </div>
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            onBlur={() => handleBlur('password')}
            onChange={(event) => handleInput('password', event.target.value)}
            value={enterDetails.password}
          />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  )
}
