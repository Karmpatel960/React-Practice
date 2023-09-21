import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expense";
import './components/Expense.css'

function App() {

  const item = [
    {
    id: 1,
    date: new Date(2021, 4, 28),
    title: 'Car Insurance',
    amount: 294.67,
    },
    {
    id: 2,
    date: new Date(2022, 4, 28),
    title: 'Bike Insurance',
    amount: 290.67,
    },
    {
    id: 3,
    date: new Date(2023, 4, 28),
    title: 'Home Insurance',
    amount: 294.67,
    },
    {
    id: 4,
    date: new Date(2024, 4, 28),
    title: 'Life Insurance',
    amount: 294.67,
    }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <div className="expenses">
      <Expense expense ={item}></Expense>
      </div>
      <p>This is Paragraph in React</p>
    </div>
  );
}

export default App;
