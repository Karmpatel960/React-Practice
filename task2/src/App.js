import React from 'react'
import Adduser from './components/adduser/adduser'
import List from './components/list/list'
import ErrorModal from './components/error/error'

function App() {
  const [data, setData] = React.useState([])
  const [error, setError] = React.useState(false)

  const handleData = (newData) => {
    // Check if the name and age are entered
    if (newData.name.trim().length === 0 || newData.age.trim().length === 0) {
      setError('Please enter both name and age')
      return
    }

    // Check if age is within the range [0, 30]
    const ageValue = parseFloat(newData.age)
    // if (isNaN(ageValue) || ageValue < 0 || ageValue > 30) {
    //   setError('Age must be a number between 0 and 30 Or Age must be a number')
    //   return
    // }
    if (isNaN(ageValue)) {
      setError('Age must be a number')
      return
    }

    // Check if age is negative
    if (ageValue < 0) {
      setError('Age cannot be negative')
      return
    }

    // Reset error and add the user data if it passes the checks
    setError(false)
    setData([...data, newData])
  }

  return (
    <div>
      <Adduser handleData={handleData} />
      {data && <List items={data} />}
      {error && (
        <ErrorModal errorMessage={error} onClose={() => setError(false)} />
      )}
    </div>
  )
}

export default App
