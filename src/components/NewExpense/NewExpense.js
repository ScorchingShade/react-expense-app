import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

function NewExpense({expenseHandler}) {
  const onSubmitHandler=(data)=>{
    const expenseData={
      ...data,
      date: new Date(data.date),
      id:  Math.floor(Math.random() * 10000) + 1,
    }

    expenseHandler(expenseData);
    
  }
  return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSubmitHandler}/>
    </div>
  )
}

export default NewExpense