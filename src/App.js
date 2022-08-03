import Expenses from "./components/Expenses/Expenses";
import expenses from "./mock";

function App() {
  return (
    <div>
     <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
