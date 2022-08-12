import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import ExpensesFilter from './ExpensesFilter'

function Expenses({expenses}) {

  const [year,setYear] =useState('2019');

  const filteredExpenses=()=>{
    return expenses.filter((expense)=>expense.date.getFullYear().toString()===year);
  }

  const yearHandler=(data)=>{
    setYear(data)
  }

  return (
    <Card className="expenses">
    <ExpensesFilter yearHandler={yearHandler} selectedYear={year}/>
        {filteredExpenses().length >0&&filteredExpenses()?.map((expense)=>(
            <ExpenseItem key={expense.id} date={expense.date} title={expense.title}  amount={expense.amount}/>
        ))}
    </Card>)
  
}

export default Expenses