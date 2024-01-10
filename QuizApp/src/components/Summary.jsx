import quiz from '../assets/quiz-complete.png'
import questions from '../questions'
export default function Summary({userAnswers}){
    const skipped = userAnswers.filter((answer) => answer === null)
    const correct = userAnswers.filter((answer,index) => answer === questions[index].answers[0])

    const ss = Math.round(
        (skipped.length/userAnswers.length) *100
    );

    const cs = Math.round(
        (correct.length/userAnswers.length) *100
    );

    return (

        <div id='summary'>
            <img src={quiz} alt='trophy'/>
            <h2>Quiz Completed</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{ss}%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>{cs}%</span>
                    <span className='text'>Answered Correctly</span>
                </p>
                <p>
                    <span className='number'>{100-cs-ss}%</span>
                    <span className='text'>Answered Incorrectly</span>
                </p>
            </div>
            <ol>
                { userAnswers.map((answer,index) =>{
                    return(
                        <li key={index}>
                        <h3>{index +1}</h3>
                        <p className='question'>{questions[index].text}</p>
                        <p className='user-answer'>{answer ?? 'skipped'}</p>
                    </li>
                    )
                })

                }
               
            </ol>
        </div>
    )

}