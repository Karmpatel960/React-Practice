import { useState } from 'react'
export function useInput(defaultValue, validationFn) {
  const [enterDetails, setEnterDetail] = useState(defaultValue)

  const [didedit, setDidedit] = useState(false)

  const valueIsValid = validationFn(enterDetails)
  function handleInput(event) {
    setEnterDetail(event.target.value)
    setDidedit(false)
  }

  function handleBlur() {
    setDidedit(true)
  }
  return {
    value: enterDetails,
    handleInput,
    handleBlur,
    hasError: didedit && !valueIsValid,
  }
}
