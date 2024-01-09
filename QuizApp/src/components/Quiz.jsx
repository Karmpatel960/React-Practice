import { useState, useCallback, useRef } from 'react'
import questions from '../questions'
import quizComp from '../assets/quiz-complete.png'
import Question from './Question'

export default function Quiz() {
  
  const [answer, setAnswer] = useState([])
  const [answeredState, setAnswered] = useState(' ')

  const activeQuestion =
    answeredState === ' ' ? answer.length :  answer.length - 1

  const quizComplete = activeQuestion === questions.length

  const handlesetAnswer = useCallback(
    function handlesetAnswer(selectedAnswer) {
      setAnswered('answered')
      setAnswer((prevAnswer) => {
        return [...prevAnswer, selectedAnswer]
      })

      setTimeout(() => {
        if (selectedAnswer === questions[activeQuestion].answers[0]) {
          setAnswered('correct')
        } else {
          setAnswered('wrong')
        }

        setTimeout(() => {
          setAnswered(' ')
        }, 2000)
      }, 1000)
    },
    [activeQuestion]
  )

  const handleskipanswer = useCallback(
    () => handlesetAnswer(null),
    [handlesetAnswer]
  )

  if (quizComplete) {
    return (
      <div id='summary'>
        <img src={quizComp} alt='Quiz Complete' />
        <h1>YOUR SCORE</h1>
        <h2>0</h2>
        <p>Quiz Completed!!</p>
      </div>
    )
  }


  return (
    <div id='quiz'>
      <Question 
      key={activeQuestion}
      questionText={questions[activeQuestion].text}
      answer={questions[activeQuestion].answers}
      answeredState={answeredState}
      onSelectAnswer={handlesetAnswer}
      selectedAnswer={answer[answer.length - 1]}
      handleskipanswer={handleskipanswer}

      />
    </div>
  )
}
