import React from 'react'

const ExpenseList = ({items, onDelete}) => {
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
    <td>{item.description}</td>
    <td>Ksh {item.amount}</td>
    <td>{item.category}</td>
    <td>{item.date}</td>
    <td>
      <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(item.id)}>Delete
      </button>
    </td>
  </tr>

))}
<tr>
    
<td><h4>TOTAL</h4></td>
    <td><h4>Ksh{items.reduce((total, item) => total + parseInt(item.amount), 0).toFixed(2)}</h4></td>

  </tr>

      
    </tbody>

  </table>
  )
}

export default ExpenseList