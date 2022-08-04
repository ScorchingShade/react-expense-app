import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import expenses from "./mock";

function App() {
  return (
    <div>
      <NewExpense/>
     <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
