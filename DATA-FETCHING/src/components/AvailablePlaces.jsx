import { useState, useEffect } from 'react'
import Places from './Places.jsx'
import Error from './Error.jsx'
import { sortPlacesByDistance } from '../loc.js'
import { fetchAvailablePlaces } from '../http.js'

// const place = localStorage.getItem('places')

export default function AvailablePlaces({ onSelectPlace }) {
  const [places, setPlaces] = useState([])
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchplace() {
      setFetching(true)

      try {
        const places = await fetchAvailablePlaces()

        navigator.geolocation.getCurrentPosition((pos) => {
          const sortPlace = sortPlacesByDistance(
            places,
            pos.coords.latitude,
            pos.coords.longitude
          )
          setPlaces(sortPlace)
          setFetching(false)
        })
      } catch (error) {
        setError({ message: error.message || 'Somthing gets Wrong !!!' })
        setFetching(false)
      }
    }
    fetchplace()
  }, [])

  if (error) {
    return <Error title='An error Occured' message={error.message} />
  }

  return (
    <Places
      title='Available Places'
      places={places}
      isLoading={fetching}
      loadingText='Fetching...'
      fallbackText='No places available.'
      onSelectPlace={onSelectPlace}
    />
  )
}
