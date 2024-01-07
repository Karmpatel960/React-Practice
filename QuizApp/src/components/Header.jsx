import quizlogo from '../assets/quiz-logo.png'
export default function Header() {
  return (
    <header>
      <img src={quizlogo} alt='Quiz Logo' />
      <h1>Quizzer</h1>
    </header>
  )
}
