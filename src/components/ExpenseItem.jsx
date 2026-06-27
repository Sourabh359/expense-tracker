export default function ExpenseItem({expense,deleteExpense}){
    return(
        <div className="card mb-2 shadow-sm">
            <div className="card-body d-flex justify-content-between">
        <h5>{expense.title}</h5>
        <strong>₹{expense.amount}</strong>
        <button className="btn btn-danger btn-sm" onClick={() => deleteExpense(expense.id)}>Delete</button>
            </div>
        </div>
    );
}