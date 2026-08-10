export default function ExpenseSummary({ expenses }) {

    const totalExpenses = expenses.length;

    const totalAmount = expenses.reduce(
        (total, expense) => total + expense.amount, 0)

    const highestExpense = expenses.length > 0 ? Math.max(...expenses.map((expense) => expense.amount)) : 0;

    const averageExpense = totalExpenses > 0 ? totalAmount / totalExpenses : 0;

    return (
        <div className="row g-3 mb-4">

            <div className="col-12 col-md-6 col-lg-3">
                <div className="card shadow-sm h-100">
                    <div className="card-body">
                        <h6 className="text-muted">Total Expenses</h6>
                        <h3>{totalExpenses}</h3>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
                <div className="card shadow-sm h-100">
                    <div className="card-body">
                        <h6 className="text-muted">Total Amount</h6>
                        <h3>₹{totalAmount.toFixed(2)}</h3>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
                <div className="card shadow-sm h-100">
                    <div className="card-body">
                        <h6 className="text-muted">Highest Expense</h6>
                        <h3>₹{highestExpense.toFixed(2)}</h3>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
                <div className="card shadow-sm h-100">
                    <div className="card-body">
                        <h6 className="text-muted">Average Expense</h6>
                        <h3>₹{averageExpense.toFixed(2)}</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}