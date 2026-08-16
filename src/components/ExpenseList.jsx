import ExpenseItem from "./ExpenseItem"

export default function ExpenseList({expenses,deleteExpense,editingExpense}){

    if (expenses.length === 0) {
    return (
      <div className="card shadow-sm text-center p-5 mt-4">
        <h4>No Expenses Yet</h4>
        <p className="text-muted mb-0">
          Start tracking your expenses by adding your first expense.
        </p>
      </div>
    );}
        
    return(
        <div className="mt-4">
            {
                expenses.map((expense)=>(
                    <ExpenseItem
                    key={expense.id}
                    expense={expense}
                    deleteExpense={deleteExpense}
                    editingExpense={editingExpense}
                    />
                ))
            }
        </div>
    )
}