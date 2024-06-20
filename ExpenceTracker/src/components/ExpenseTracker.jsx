
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default ExpenseTracker;