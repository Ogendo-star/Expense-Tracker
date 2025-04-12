import { useState } from 'react'
import ExpenseList from './components/ExpenseList'


function App() {
  
  const [expense, setExpenses] = useState([
    {id:1, description:"A bale of tissue", category:"Toiletries", Date},
  ]);

  return (
    <>
      <ExpenseList/>
    </>
  )
}

export default App
