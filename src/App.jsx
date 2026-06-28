import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default function App() {
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

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} updateExpense={updateExpense} editExpense={editExpense} setEditExpense={setEditExpense} />

      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} editingExpense={editingExpense}/>
    </div>
  );
}
