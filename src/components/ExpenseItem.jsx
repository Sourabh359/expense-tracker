export default function ExpenseItem({expense,deleteExpense,editingExpense}){
    return(
        <div className="card mb-2 shadow-sm">
            <div className="card-body d-flex justify-content-between">
                <div className="d-flex justify-content-between w-50">
        <h5 className="text-capitalize">{expense.title}</h5>
        <strong>₹{expense.amount}</strong>
                </div>
        <div className="d-flex gap-3">
        <button className="btn btn-danger btn-sm" onClick={() => deleteExpense(expense.id)}>Delete</button>
        <button className="btn btn-warning btn-sm" onClick={() => editingExpense(expense)}>Edit</button>
        </div>
            </div>
        </div>
    );
}