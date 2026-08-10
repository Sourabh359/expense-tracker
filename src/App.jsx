import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";

export default function App() {
  const [searchTerm,setSearchTerm]=useState("");

  const [sortBy,setSortBy]=useState("newest");

  const [editExpense, setEditExpense]=useState(null);
  const editingExpense=(expense)=>{
    setEditExpense(expense);
  }

  const [expenses, setExpenses] = useState(() => {
  const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  };

  const updateExpense = (updatedExpense)=>{
    setExpenses((prevExpenses)=>{
      return prevExpenses.map((expense)=>
      expense.id===updatedExpense.id ? updatedExpense : expense);
    })
    setEditExpense(null);
  }

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const filteredExpenses = expenses.filter((expense)=>
    expense.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const sortedExpenses = [...filteredExpenses];

  switch (sortBy) {
    case "oldest":
      sortedExpenses.sort((a,b)=>a.id-b.id);
      break;

    case "low-high":
      sortedExpenses.sort((a,b)=>a.amount-b.amount);
      break;

    case "high-low":
      sortedExpenses.sort((a,b)=>b.amount-a.amount);
      break;

    case "a-z":
      sortedExpenses.sort((a,b)=>a.title.localeCompare(b.title));
      break;

    case "z-a":
      sortedExpenses.sort((a,b)=>b.title.localeCompare(a.title));
      break;
  
    default:
      sortedExpenses.sort((a,b)=>b.id-a.id)
      break;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} updateExpense={updateExpense} editExpense={editExpense} setEditExpense={setEditExpense} />

      <ExpenseSummary expenses={expenses} />

      <div className="d-flex gap-3">
      <input type="text" className="form-control mb-3 w-75" placeholder="Search expenses..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />

      <div className="mb-3 w-25">
      <select className="form-select" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="low-high">Amount (Low → High)</option>
        <option value="high-low">Amount (High → Low)</option>
        <option value="a-z">Title (A → Z)</option>
        <option value="z-a">Title (Z → A)</option>
      </select>
      </div>
      </div>

      <ExpenseList expenses={sortedExpenses} deleteExpense={deleteExpense} editingExpense={editingExpense}/>
    </div>
  );
}
