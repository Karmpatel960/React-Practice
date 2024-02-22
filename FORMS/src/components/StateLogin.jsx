import React, { useState } from 'react'
import Input from './Input'
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation'
import { useInput } from '../hooks/useInput'

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [enteredPassword, setEnteredPassword] = useState('')

  // const [enterDetails, setEnterDetail] = useState({
  //   email: '',
  //   password: '',
  // })

  // const [didedit, setDidedit] = useState({
  //   email: false,
  //   password: false,
  // })

  const {
    value: emailValue,
    handleInput: handleEmailInput,
    handleBlur: handleEmailBlur,
    hasError: handleError,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value))

  const {
    value: passwordValue,
    handleInput: handlePasswordInput,
    handleBlur: handlePasswordBlur,
    hasError: passwordError,
  } = useInput('', (value) => hasMinLength(value, 6))
  // const emailIsValid =
  //   didedit.email &&
  //   !isEmail(enterDetails.email) &&
  //   isNotEmpty(enterDetails.email)
  // const passwordIsValid =
  //   didedit.password && !hasMinLength(enterDetails.password, 6)

  function handleSubmit(event) {
    event.preventDefault()

    if (handleError || passwordError) {
      return
    }

    console.log(enterDetails)
    console.log('Form submitted')
    // enterDetails.email = ' '
    // enterDetails.password = ' '
  }

  // function handleInput(identifier, value) {
  //   setEnterDetail({
  //     ...enterDetails,
  //     [identifier]: value,
  //   })
  //   setDidedit((prevedit) => ({
  //     ...prevedit,
  //     [identifier]: false,
  //   }))
  // }

  // function handleBlur(identifier) {
  //   setDidedit((prevedit) => ({
  //     ...prevedit,
  //     [identifier]: true,
  //   }))
  // }
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
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          onChange={handleEmailInput}
          onBlur={handleEmailBlur}
          value={emailValue}
          error={handleError && 'email is not a valid email'}
        />

        <Input
          label='Password'
          id='password'
          type='password'
          name='password'
          onChange={handlePasswordInput}
          value={passwordValue}
          onBlur={handlePasswordBlur}
          error={passwordError && 'password must be at least 6 characters'}
        />

        {/* <Input
          label='Password'
          id='password'
          type='password'
          name='password'
          onChange={(event) => handleInput('password', event.target.value)}
          value={enterDetails.password}
          onBlur={() => handleBlur('password')}
          error={passwordIsValid && 'password must be at least 6 characters'}
        /> */}

        {/* <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            onBlur={() => handleBlur('password')}
            onChange={(event) => handleInput('password', event.target.value)}
            value={enterDetails.password}
          />
        </div> */}
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  )
}
