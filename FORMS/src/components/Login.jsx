import React, { useRef, useState } from 'react'

export default function Login() {
  const [emailidvalid, setEmailisValid] = useState(false)
  const email = useRef()
  const password = useRef()

  function handleSubmit(event) {
    event.preventDefault()

    const enterDetails = {
      email: email.current.value,
      password: password.current.value,
    }

    const emailvalid = enterDetails.email.includes('@')

    if (!emailvalid) {
      setEmailisValid(true)
      return
    }
    setEmailisValid(false)

    console.log(enterDetails)
    console.log('Form submitted')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' name='email' ref={email} />
          <div className='control-error'>
            {emailidvalid && <p>Email is not valid</p>}
          </div>
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' name='password' ref={password} />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  )
}
