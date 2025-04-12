import { useState } from 'react'
import ExpenseList from './components/ExpenseList'


function App() {
  
  const [expense, setExpenses] = useState([
    {id:1, description:"A bale of tissue", Amount: 950,  category:"Toiletries", Date},
    {id:2, description:"25kg sack of rice", Amount: 3500, category:"Food", Date},
    {id:3, description:"Bunch of washing soap", Amount: 680, category:"Toiletries", Date},
    {id:4, description:"Hair retouch", Amount:1500, category:"Personal Care", Date},
    {id:5, description:"Monthly Premium", Amount:3000, category:"Savings", Date},
    {id:6, description:"Monthly Fare to work", Amount:3000, category:"Transport", Date},
  ]);

  return (
    <>
      <ExpenseList/>
    </>
  )
}

export default App
