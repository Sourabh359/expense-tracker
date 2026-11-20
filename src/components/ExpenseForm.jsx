import { useEffect, useState, useRef } from "react"

export default function ExpenseForm({ addExpense, updateExpense, editExpense, setEditExpense }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const titleRef = useRef(null);

    useEffect(() => {
        if (editExpense) {
            setTitle(editExpense.title);
            setAmount(editExpense.amount);
        }
        else {
            setTitle("");
            setAmount("");
        }
        setError("");
    }, [editExpense]);

    function handleSubmit(e) {
        e.preventDefault();

        if (title.trim() === "") {
            setError("please enter expense title.");
            return;
        }
        if (amount === "" || Number(amount) <= 0) {
            setError("please enter a valid amount.");
            return;
        }

        setError("");

        const expense = {
            id: editExpense ? editExpense.id : Date.now(),
            title: title,
            amount: Number(amount)
        };
        if (editExpense) {
            updateExpense(expense);
        }
        else {
            addExpense(expense);
        }

        setTitle("");
        setAmount("");

        titleRef.current?.focus();
    }


    return (
        <form className="card p-3 mb-4" onSubmit={handleSubmit}>

            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            <div className="mb-3">
                <label className="form-label">Title</label>
                <input ref={titleRef} className="form-control" type="text" placeholder="Enter Title" value={title} onChange={(e) => { setTitle(e.target.value); setError(""); }} />
            </div>
            <div className="mb-3">
                <label className="form-label">Amount</label>
                <input className="form-control" type="number" placeholder="Enter Amount" value={amount} onChange={(e) => { setAmount(e.target.value); setError(""); }} />
            </div>
            <button className="btn btn-primary" type="submit">{editExpense ? "Update Expense" : "Add Expense"}</button>
            {editExpense && (<button className="btn btn-outline-secondary" type="button" onClick={() => setEditExpense(null)}>Cancel</button>)}
        </form>
    );
}