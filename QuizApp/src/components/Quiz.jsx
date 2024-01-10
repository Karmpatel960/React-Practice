import { useState, useCallback, useRef } from 'react'
import questions from '../questions'
import quizComp from '../assets/quiz-complete.png'
import Question from './Question'
import Summary from './Summary'

export default function Quiz() {
  
  const [answer, setAnswer] = useState([])

  const activeQuestion =answer.length

  const quizComplete = activeQuestion === questions.length

  const handlesetAnswer = useCallback(
    function handlesetAnswer(selectedAnswer) {
      setAnswer((prevAnswer) => {
        return [...prevAnswer, selectedAnswer]
      })
    },[])

  const handleskipanswer = useCallback(
    () => handlesetAnswer(null),
    [handlesetAnswer]
  )

  if (quizComplete) {
    return (
      <Summary userAnswers={answer} />
    )
  }


  return (
    <div id='quiz'>
      <Question 
      key={activeQuestion}
      index={activeQuestion}
      onSelectAnswer={handlesetAnswer}
      handleskipanswer={handleskipanswer}

      />
    </div>
  )
}
