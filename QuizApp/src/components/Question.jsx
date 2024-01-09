import ProgressBar from "./ProgressBar"
import Answer from "./Answer"
import { useState } from "react"
import questions from "../questions"
export default function Question({
    key,
    questionText,
    // answer,
    // onSelectAnswer,
    answeredState,
    handleskipanswer,
    selectedAnswer
     
}) {

    const [answer,setAnswer] = useState({
        selectedAnswer: ' ',
        isCorrect: null
    })

    function handleSelectAnswer(selectedAnswer) {
        setAnswer({
            selectedAnswer,
            isCorrect: selectedAnswer === answer[0]
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: ' ',
                isCorrect: questions[key].answers[0] === answer[0]
            })
        }, 1000)


    }




    return(
        <>
        <div id='question'>
        <ProgressBar
          timeout={10000}
          onTimeout={handleskipanswer}
        />
        <h2>{questions[key].text}</h2>
        <Answer 
        answer={answer}
         selectedAnswer={selectedAnswer}
         answeredState={answeredState}
         OnSelected={handleSelectAnswer}/>
      </div>
      </>
    )
}