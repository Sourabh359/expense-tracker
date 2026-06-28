import { useEffect, useState } from "react"

export default function ExpenseForm({addExpense,updateExpense,editExpense,setEditExpense}){
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");

    useEffect(()=>{
        if(editExpense){
            setTitle(editExpense.title);
            setAmount(editExpense.amount);
        }
    },[editExpense])

    function handleSubmit(e){
        e.preventDefault();

        if(title.trim()===""){
            alert("please enter title");
            return;
        }
        if(amount==="" || Number(amount) <= 0){
            alert("please enter a valid amount");
            return;
        }

        const expense={
            id:editExpense ? editExpense.id :Date.now(),
            title:title,
            amount:Number(amount)
        };
        if(editExpense){
            updateExpense(expense);
        }
        else{
            addExpense(expense);
        }

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
        <button className="btn btn-primary" type="submit">{editExpense ? "Update Expense" : "Add Expense"}</button>
        </form>
    );
}