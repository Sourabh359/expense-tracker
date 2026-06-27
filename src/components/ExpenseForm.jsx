import { useState } from "react"

export default function ExpenseForm({addExpense}){
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");

    function handleSubmit(e){
        e.preventDefault();

        const expense={
            id:Date.now(),
            title:title,
            amount:Number(amount)
        };
        addExpense(expense);

        setTitle("");
        setAmount("");
    }
    

    return(
        <form className="card p-3 mb-4" onSubmit={handleSubmit}>
            <div className="mb-3">
        <label className="form-label">Title</label>
        <input className="form-control" type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
        <label className="form-label">Amount</label>
        <input className="form-control" type="number" placeholder="Enter Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
        <button className="btn btn-primary" type="submit">Add Expense</button>
        </form>
    );
}