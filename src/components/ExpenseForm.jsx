import React from 'react';

const ExpenseForm = () => {
  return (
    <div className="mb-3 w-100 w-md-50 d-flex align-items-center justify-content-center"> 
        <form className="border .flex-column p-3 rounded ">
            <h2 className = "font-bold text-2xl">Expense Information</h2>
        <label htmlFor="description" className="form-label">Description</label>
            <input id="description" type="text" className="form-control" />
          

          <div className= "mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input id="amount" type="number" className="form-control" />
            </div>

          <div className = "mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select id="category" name="category" className="form-control">
              <option value=""></option>
              <option value="Toiletries">Toiletries</option>
              <option value="Savings">Savings</option>
              <option value="Personal Care">Personal Care</option>
              <option value="Transport">Transport</option>
              <option value="Food">Food</option>
              <option value="Groceries">Groceries</option>
              <option value="Datenights">Datenights</option>
            </select>
            </div>
         

          <div className = "mb-3">
            <label htmlFor="date" className="form-label">Date of Purchase</label>
            <input id="date" type="date" className="form-control" />
            </div>

            <div className = "mb-3">
                <button  className="btn btn-primary">Submit</button>
          </div>
           </form>

      </div>
   
  )
}

export default ExpenseForm;
