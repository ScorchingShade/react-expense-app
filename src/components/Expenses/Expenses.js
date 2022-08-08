import React, { useEffect, useState } from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import ExpensesFilter from './ExpensesFilter'

function Expenses({expenses}) {

  const [year,setYear] =useState('2019');

  const [exp,setExp]=useState(expenses);
  

  useEffect(()=>{
    expenses=[...expenses.filter((item)=>item.date.getFullYear().toString()===year)]

    console.log("before ",exp);
    setExp(()=>[...expenses])
    console.log("after ",exp);
    console.log(expenses)

  },[year])
  


  const yearHandler=(data)=>{
    
    setYear(data)
  }

  return exp.length > 0?(
    <Card className="expenses">
    <ExpensesFilter yearHandler={yearHandler} selectedYear={year}/>
        {exp?.map((expense)=>(
            <ExpenseItem key={expense.id} date={expense.date} title={expense.title}  amount={expense.amount}/>
        ))}
    </Card>):(<></>)
  
}

export default Expenses