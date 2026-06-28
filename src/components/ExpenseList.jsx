import ExpenseItem from "./ExpenseItem"

export default function ExpenseList({expenses,deleteExpense,editingExpense}){
        
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