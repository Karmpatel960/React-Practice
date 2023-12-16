import { useState, useRef } from 'react'

export default function Player() {
  const player = useRef()
  const [playername, setPlayerName] = useState(null)
  // const [submitted, setSubmitted] = useState(false)

  // function handleChange(event) {
  //   // setSubmitted(false)
  //   setPlayerName(event.target.value)
  // }

  // function handleClick() {
  //   setSubmitted(true)
  // }

  function handleClick() {
    setPlayerName(player.current.value)
    player.current.value = ' '
  }

  return (
    <section id='player'>
      {/* <h2>Welcome {submitted ? playername : 'unknown entity'}</h2> */}
      <h2>Welcome {playername ?? 'Unkown Entity'}</h2>
      <p>
        {/* <input type='text' onChange={handleChange} value={playername} /> */}
        <input type='text' ref={player} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  )
}
