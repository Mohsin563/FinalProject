import React from 'react'
import './ExpensiveDetails.css';

function ExpensiveDetails({ incomeAmt, expenseAmt }) {
    return (
        <div>
            <div className="details-balance">
                Your Balance is PKR {incomeAmt - expenseAmt}
            </div>
            {/* Show Income & Expense amount */}
            <div className="amounts-container">
                Income
                <span className="income-amount">PKR {incomeAmt}</span>
                Expense
                <span className="expense-amount">PKR {expenseAmt}</span>
            </div>
        </div>
    )
}

export default ExpensiveDetails