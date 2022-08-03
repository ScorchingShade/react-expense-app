import React from "react";
import "./ExpenseDate.css";

function ExpenseDate({date}) {
  const dateObject = {
    month: date.toLocaleString("en-us", { month: "long" }),
    day: date.toLocaleString("en-us", { day: "2-digit" }),
    year: date.getFullYear(),
  };
  return (
    <div className="expense-date">
      <div className="expense-date__month">{dateObject.month}</div>
      <div className="expense-date__year">{dateObject.day}</div>
      <div className="expense-date__day">{dateObject.year}</div>
    </div>
  );
}

export default ExpenseDate;
