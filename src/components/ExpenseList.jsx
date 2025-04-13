import React from 'react'

const ExpenseList = ({items}) => {
  return (

    <table className ="table">
    <thead>
      <tr>
        <th scope="col">Description</th>
        <th scope="col">Amount</th>
        <th scope="col">Category</th>
        <th scope="col">Date</th>
      </tr>
    </thead>
 <tbody>

 {items.map((item) => (
  <tr key={item.id}>
    <th>{item.description}</th>
    <td>Ksh {item.amount}</td>
    <td>{item.category}</td>
    <td>{item.date}</td>
  </tr>
))}
      
    </tbody>

  </table>
  )
}

export default ExpenseList