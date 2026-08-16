import React from "react";

function ExpenseItem({expense,deleteExpense,editingExpense}){
    return(
        <div className="card mb-3 shadow-sm border-0">
            <div className="card-body d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
                <div className="d-flex justify-content-between align-items-center flex-grow-1">
        <h5 className="text-capitalize mb-0">{expense.title}</h5>
        <strong className="fs-5">₹{expense.amount}</strong>
                </div>
        <div className="d-flex gap-2">
        <button className="btn btn-danger btn-sm" onClick={() => deleteExpense(expense.id)}>Delete</button>
        <button className="btn btn-warning btn-sm" onClick={() => editingExpense(expense)}>Edit</button>
        </div>
            </div>
        </div>
    );
}

export default React.memo(ExpenseItem)