import React, { useReducer } from "react";
import "./ExpenseForm.css";


function ExpenseForm({onSaveExpenseData, onCancelHandler}) {

  const initialStates={
    title:'',
    amount: 0.01,
    date: '2019-01-01'
  }

  const reducer=(state, action)=>{
    const {type, payload} = action;
    return {...state, [type]: payload}
  }

  const [state,dispatch] =useReducer(reducer, initialStates)


  const titleHandler=(e)=>{
    dispatch({type:'title', payload:e.target.value})
  }

  const amountHandler=(e)=>{
    dispatch({type:'amount', payload:e.target.value})
  }

  const dateHandler=(e)=>{
    dispatch({type:'date', payload: e.target.value})
  }

  const submitHandler=(e)=>{
    e.preventDefault();

    onSaveExpenseData(state)

    dispatch({type:'title', payload:''})
    dispatch({type:'amount', payload:0.01})
    dispatch({type:'date', payload: ''})

  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={state.title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={state.amount} onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2100-12-31" value={state.date} onChange={dateHandler}/>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={onCancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
