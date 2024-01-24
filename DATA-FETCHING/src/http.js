export async function fetchAvailablePlaces() {
  const responce = await fetch('http://localhost:3000/places')
  const resData = await responce.json()

  if (!responce.ok) {
    throw new Error(responce.message)
  }

  return resData.places
}

export async function updateUserPlace(places) {
  const responce = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places: places }),
    headers: { 'Content-Type': 'application/json' },
  })

  const resData = await responce.json()

  if (!responce.ok) {
    throw new Error('Failed to fetch Data')
  }

  return resData.message
}

export async function fetchUserPlaces() {
  const responce = await fetch('http://localhost:3000/user-places')
  const resData = await responce.json()

  if (!responce.ok) {
    throw new Error(responce.message)
  }

  return resData.places
}
