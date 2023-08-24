import React, { useState } from 'react'
import axios from 'axios'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      })
      const token = response.data.token
      // You can handle the token as needed (e.g., storing in localStorage)
      console.log('Token:', token)
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='w-96 p-6 bg-white rounded-lg shadow-md border border-gray-300'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>Login</h2>
        <div className='mb-4'>
          <label htmlFor='username' className='block font-medium mb-1'>
            Username
          </label>
          <input
            type='text'
            id='username'
            className='w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block font-medium mb-1'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
