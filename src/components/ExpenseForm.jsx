import React from 'react';
import { useForm } from 'react-hook-form';

const ExpenseForm = () => {

    const {register, handleSubmit}= useForm()

  return (
    <div className="mb-3 w-100 w-md-50 d-flex align-items-center justify-content-center"> 
        <form className="border .flex-column p-3 rounded" 
        onSubmit={handleSubmit(data => console.log(data))}>
            <h2 className = "font-bold text-2xl">Expense Information</h2>
        <label htmlFor="description" className="form-label">Description</label>
            <input id="description" type="text" className="form-control" {...register("description")}/>
          

          <div className= "mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input id="amount" type="number" className="form-control"{...register("amount")} />
            </div>

          <div className = "mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select id="category" name="category" className="form-control" {...register("category")}>
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
            <input id="date" type="date" className="form-control" {...register("date")}/>
            </div>

            <div className = "mb-3">
                <button  className="btn btn-primary">Submit</button>
          </div>
           </form>

      </div>
   
  )
}

export default ExpenseForm;
