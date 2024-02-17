import { useEffect, useState } from 'react'

export function useFetch(fetchUserPlaces, initialvalue) {
  const [userPlaces, setUserPlaces] = useState(initialvalue)
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData() {
      setFetching(true)
      try {
        const places = await fetchUserPlaces()
        setUserPlaces(places)
      } catch (error) {
        setError({ message: error.message || 'Failed to Fetch Data !!!' })
      }

      setFetching(false)
    }
    fetchData()
  }, [fetchUserPlaces])

  return { userPlaces, fetching, setUserPlaces, error }
}
