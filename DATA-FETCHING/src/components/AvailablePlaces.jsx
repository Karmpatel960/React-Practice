import Places from './Places.jsx'
import Error from './Error.jsx'
import { sortPlacesByDistance } from '../loc.js'
import { fetchAvailablePlaces } from '../http.js'
import { useFetch } from '../hooks/useFetch.js'
// const place = localStorage.getItem('places')

async function fetchUserPlaces() {
  const places = await fetchAvailablePlaces()

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const sortPlace = sortPlacesByDistance(
        places,
        pos.coords.latitude,
        pos.coords.longitude
      )
      resolve(sortPlace)
    })
  })
}
export default function AvailablePlaces({ onSelectPlace }) {
  // const [places, setPlaces] = useState([])
  // const [fetching, setFetching] = useState(false)
  // const [error, setError] = useState()

  const { userPlaces: places, fetching, error } = useFetch(fetchUserPlaces, [])

  //  navigator.geolocation.getCurrentPosition((pos) => {
  //    const sortPlace = sortPlacesByDistance(
  //      places,
  //      pos.coords.latitude,
  //      pos.coords.longitude
  //    )
  //    setPlaces(sortPlace)
  //    setFetching(false)
  //  })

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
