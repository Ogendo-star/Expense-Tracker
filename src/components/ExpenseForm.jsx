import React from 'react';
import { useForm } from 'react-hook-form';

const ExpenseForm = ({ addExpense }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  return (
    <div className="mb-3 w-70 w-md-50 d-flex align-items-center justify-content-center">
      <form
        className="border flex-column p-3 rounded"
        onSubmit={handleSubmit((data)=> {
            addExpense (data);
            reset()
        
    } )}>
        <h2 className="fw-bold fs-4">Expense Information</h2>

        <label htmlFor="description" className="form-label">Description</label>
        <input id="description" type="text" className="form-control" {...register("description", { minLength: 6, required: true })} />
        {errors.description?.type === "required" && <p className="text-danger">Field required</p>}
        {errors.description?.type === "minLength" && <p className="text-danger">At least 6 characters required</p>}

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input id="amount" type="number" className="form-control" {...register("amount", { required: true })} />
          {errors.amount?.type === "required" && <p className="text-danger">Field required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select id="category" className="form-control" {...register("category", { required: true })}>
            <option value="">Select category</option>
            <option value="Toiletries">Toiletries</option>
            <option value="Savings">Savings</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Transport">Transport</option>
            <option value="Food">Food</option>
            <option value="Groceries">Groceries</option>
            <option value="Datenights">Datenights</option>
          </select>
          {errors.category?.type === "required" && <p className="text-danger">Field required</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date of Purchase</label>
          <input id="date" type="date" className="form-control" {...register("date")} />
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
