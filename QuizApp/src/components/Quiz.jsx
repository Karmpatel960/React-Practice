import { useState, useCallback } from 'react'
import questions from '../questions'
import quizComp from '../assets/quiz-complete.png'
import ProgressBar from './ProgressBar'

export default function Quiz() {
  const [answer, setAnswer] = useState([])
  const [answered, setAnswered] = useState(' ')

  const activeQuestion = ' ' ? answer.length : answer.length - 1

  const quizComplete = activeQuestion === questions.length

  const handlesetAnswer = useCallback(function handlesetAnswer(selectedAnswer) {
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
  }, [])

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

  const shuffedAnswer = [...questions[activeQuestion].answers].sort(
    () => Math.random() - 0.5
  )

  return (
    <div id='quiz'>
      <div id='question'>
        <ProgressBar
          key={activeQuestion}
          timeout={10000}
          onTimeout={handleskipanswer}
        />
        <h2>{questions[activeQuestion].text}</h2>
        <ul id='answers'>
          {shuffedAnswer.map((answer) => (
            <li key={answer} className='answer'>
              <button onClick={() => handlesetAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
