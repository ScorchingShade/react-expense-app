import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses({ expenses }) {
  const [year, setYear] = useState("2019");

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  const yearHandler = (data) => {
    setYear(data);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter yearHandler={yearHandler} selectedYear={year} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
