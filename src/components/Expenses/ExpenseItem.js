import React, { useState } from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


function ExpenseItem({title,amount,date}) {

  const[titleDynm,setTitleDynm]=useState(title);

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{titleDynm}</h2>
        <div className="expense-item__price">₹ {amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
