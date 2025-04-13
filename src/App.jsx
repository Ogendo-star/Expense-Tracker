import { useState } from 'react'
import ExpenseList from './components/ExpenseList'


function App() {
  
  const [expenses, setExpenses] = useState([
    {id:1, description:"A bale of tissue", amount: 950,  category:"Toiletries", date:"2025-04-10"},
    {id:2, description:"25kg sack of rice", amount: 3500, category:"Food", date:"2025-04-10"},
    {id:3, description:"Bunch of washing soap", amount: 680, category:"Toiletries", date:"2025-04-10"},
    {id:4, description:"Hair retouch", amount:1500, category:"Personal Care", date:"2025-04-10"},
    {id:5, description:"Monthly Premium", amount:3000, category:"Savings", date:"2025-04-10"},
    {id:6, description:"Monthly Fare to work", amount:3000, category:"Transport", date:"2025-04-10"}
  ]);


  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      setExpenses(expenses.filter(expense => expense.id !== id));
    }
  };
  
  return (
    <>
       <ExpenseList items={expenses} onDelete={handleDelete} />
    </>
  );
}

export default App
