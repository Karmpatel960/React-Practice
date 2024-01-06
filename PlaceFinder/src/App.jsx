import { useRef, useState, useEffect, useCallback } from 'react'

import Places from './components/Places.jsx'
import { AVAILABLE_PLACES } from './data.js'
import Modal from './components/Modal.jsx'
import DeleteConfirmation from './components/DeleteConfirmation.jsx'
import logoImg from './assets/logo.png'
import { sortPlacesByDistance } from './loc.js'

function App() {
  const [avp, setavp] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const selectedPlace = useRef()
  const [pickedPlaces, setPickedPlaces] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      )
      setavp(sortedPlaces)
    })
  }, [])

  useEffect(() => {
    const storageIds = JSON.parse(localStorage.getItem('selectedPlaces')) || []
    const pickedPlaces = AVAILABLE_PLACES.filter((place) =>
      storageIds.includes(place.id)
    )
    setPickedPlaces(pickedPlaces)
  }, [setPickedPlaces])

  function handleStartRemovePlace(id) {
    setIsOpen(true)
    selectedPlace.current = id
  }

  function handleStopRemovePlace() {
    setIsOpen(false)
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id)
      return [place, ...prevPickedPlaces]
    })

    const stid = JSON.parse(localStorage.getItem('selectedPlaces')) || []
    if (stid.indexOf(id) !== -1) {
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...stid]))
    }
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    )
    setIsOpen(false)
  }, [])

  return (
    <>
      <Modal open={isOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt='Stylized globe' />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title='Available Places'
          places={avp}
          fallbackText={'Sorting Places...'}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  )
}

export default App
