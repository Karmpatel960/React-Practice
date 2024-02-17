import { useRef, useState, useCallback } from 'react'

import { useFetch } from './hooks/useFetch.js'
import Places from './components/Places.jsx'
import Modal from './components/Modal.jsx'
import DeleteConfirmation from './components/DeleteConfirmation.jsx'
import logoImg from './assets/logo.png'
import AvailablePlaces from './components/AvailablePlaces.jsx'
import { updateUserPlace, fetchUserPlaces } from './http.js'
import Error from './components/Error.jsx'

function App() {
  const selectedPlace = useRef()

  const {
    userPlaces: userPlaces,
    fetching,
    setUserPlaces: setUserPlaces,
    error,
  } = useFetch(fetchUserPlaces, [])

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [errorupdate, setErrorUpdate] = useState()

  function handleStartRemovePlace(place) {
    setModalIsOpen(true)
    selectedPlace.current = place
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false)
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = []
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces
      }
      return [selectedPlace, ...prevPickedPlaces]
    })

    try {
      await updateUserPlace([selectedPlace, ...userPlaces])
    } catch (error) {
      setUserPlaces(userPlaces)
      setErrorUpdate({ message: error.message || 'Something gets Wrong !!!' })
    }
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter(
          (place) => place.id !== selectedPlace.current.id
        )
      )

      try {
        await updateUserPlace(
          userPlaces.filter((place) => place.id !== selectedPlace.current.id)
        )
      } catch (error) {
        setUserPlaces(userPlaces)
        setErrorUpdate({ message: error.message || 'Something gets Wrong !!!' })
      }

      setModalIsOpen(false)
    },
    [userPlaces, setUserPlaces]
  )

  function handleError() {
    setErrorUpdate(null)
  }
  return (
    <>
      <Modal open={errorupdate} onClose={handleError}>
        {errorupdate && (
          <Error
            title='An error Occured'
            message={errorupdate.message}
            onConfirm={handleError}
          ></Error>
        )}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
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
        {error && <Error title='An Error Occured ' message={error.message} />}
        {!error && (
          <Places
            title="I'd like to visit ..."
            fallbackText='Select the places you would like to visit below.'
            isLoading={fetching}
            loadingText='Fetching...'
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  )
}

export default App
