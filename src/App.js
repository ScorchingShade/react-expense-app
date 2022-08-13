import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expense, setExpense] = useState([])
  const expenseHandler=(data)=>{
    setExpense((current)=>[ data,...current])
  }
  return (
    <div>
      <div className="title">
        TrackSense
      </div>
      <NewExpense expenseHandler={expenseHandler}/>
      <Expenses expenses={expense}/>
    </div>
  );
}

export default App;
