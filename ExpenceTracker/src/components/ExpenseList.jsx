
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      {expenses.map((expense, index) => (
        <ExpenseItem 
          key={index}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date} 
        />
      ))}
    </div>
  );
}

export default ExpenseList;