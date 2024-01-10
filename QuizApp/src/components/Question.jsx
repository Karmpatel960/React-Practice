import ProgressBar from "./ProgressBar"
import Answer from "./Answer"
import { useState } from "react"
import questions from "../questions"
export default function Question({
    index,
    onSelectAnswer,
    handleskipanswer
}) {

    const [answer,setAnswer] = useState({
        selectedAnswer: ' ',
        isCorrect: null
    })

    let  timer = 10000;

    if(answer.selectedAnswer){
        timer = 1000;
    }
    if(answer.isCorrect !== null){
        timer = 2000;
    }


    function handleSelectAnswer(selectedAnswer) {
        setAnswer({
            selectedAnswer,
            isCorrect: selectedAnswer === answer[0]
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: ' ',
                isCorrect: questions[index].answers[0] === answer[0]
            })

            setTimeout(() =>{
                onSelectAnswer(selectedAnswer)

            },2000)
        }, 1000)


    }

    let answeredState = ' ';

    if(answer.selectedAnswer && answer.isCorrect != null){
        answeredState = answer.isCorrect ? 'correct' : 'wrong'
    } else if(answer.selectedAnswer){
        answeredState = 'answered'
    }




    return(
        <>
        <div id='question'>
        <ProgressBar
          timeout={timer}
          onTimeout={handleskipanswer}
          mode={answeredState}
        />
        <h2>{questions[index].text}</h2>
        <Answer 
        answer={questions[index].answers}
         selectedAnswer={answer.selectedAnswer}
         answeredState={answeredState}
         OnSelected={handleSelectAnswer}/>
      </div>
      </>
    )
}