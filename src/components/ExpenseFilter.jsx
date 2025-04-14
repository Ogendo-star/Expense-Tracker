import React from 'react'

const ExpenseFilter = ({ selectedCategory, onSelectCategory }) => {
    return (
      <select
        className="form-select mb-3"
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Toiletries">Toiletries</option>
        <option value="Savings">Savings</option>
        <option value="Personal Care">Personal Care</option>
        <option value="Transport">Transport</option>
        <option value="Food">Food</option>
      </select>
    );
  };
  
export default ExpenseFilter