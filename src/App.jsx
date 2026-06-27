import { useState } from "react"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseList from "./components/ExpenseList"


export default function App() {

  const [expenses,setExpenses]=useState([]);

  const addExpense=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [...prevExpenses,expense]});
  }

  const deleteExpense=(id)=>{
    setExpenses((prevExpenses)=>{
     return prevExpenses.filter((expense)=>expense.id !== id);
    });
  };

  return (
    <div className="container mt-5">
    <h1 className="text-center mb-4">Expense Tracker</h1>
      
      <ExpenseForm addExpense={addExpense}/>

      <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>

    </div>
  )
}
