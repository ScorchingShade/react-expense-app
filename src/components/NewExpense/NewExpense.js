import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({ expenseHandler }) {
  const [addExpense, setAddExpense] = useState(false);

  const onSubmitHandler = (data) => {
    const expenseData = {
      ...data,
      date: new Date(data.date),
      id: Math.floor(Math.random() * 10000) + 1,
    };

    expenseHandler(expenseData);
  };

  const addHandler = () => {
    setAddExpense((prevState) => !prevState);
  };

  return (
    <div className="new-expense">
      {addExpense ? (
        <ExpenseForm onSaveExpenseData={onSubmitHandler} onCancelHandler={addHandler}/>
      ) : (
        <button onClick={addHandler}>Add Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
