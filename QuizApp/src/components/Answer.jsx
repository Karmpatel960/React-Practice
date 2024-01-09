import React, { useRef } from 'react'

export default function Answer({answer,selectedAnswer,answeredState , OnSelected}) {
    const shuffedAnswer = useRef()
    if (!shuffedAnswer.current) {
        shuffedAnswer.current = [...answer]
        shuffedAnswer.current.sort(() => Math.random() - 0.5)
      }

    return(
        <ul id='answers'>
          {shuffedAnswer.current.map((answer) => {
            const isselected = selectedAnswer === answer
            let cssclass = ''
            if (answeredState === 'answered' && isselected) {
              cssclass = 'selected'
            }

            if (answeredState === 'correct' || answeredState === 'wrong' && isselected) {
              cssclass = answeredState
            }
            return (
              <li key={answer} className='answer'>
                <button
                  onClick={() => OnSelected(answer)}
                  className={cssclass}
                >
                  {answer}
                </button>
              </li>
            )
          })}
        </ul>
    )
}