import { useEffect, useState, useRef } from "react"

export default function ExpenseForm({addExpense,updateExpense,editExpense,setEditExpense}){
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");
    const titleRef=useRef(null);

    useEffect(()=>{
        if(editExpense){
            setTitle(editExpense.title);
            setAmount(editExpense.amount);
        }
        else{
            setTitle("");
            setAmount("");
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

        titleRef.current?.focus();
    }
    

    return(
        <form className="card p-3 mb-4" onSubmit={handleSubmit}>
            <div className="mb-3">
        <label className="form-label">Title</label>
        <input ref={titleRef} className="form-control" type="text" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
        <label className="form-label">Amount</label>
        <input className="form-control" type="number" placeholder="Enter Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
        <button className="btn btn-primary" type="submit">{editExpense ? "Update Expense" : "Add Expense"}</button>
        {editExpense && (<button className="btn btn-outline-secondary" type="button" onClick={()=>setEditExpense(null)}>Cancel</button>)}
        </form>
    );
}