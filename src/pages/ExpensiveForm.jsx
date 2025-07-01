import React, { useState } from 'react'
import './ExpensiveForm.css';

function ExpensiveForm({ addTransaction }) {

    const [expenseInfo, setExpenseInfo] = useState({
        amount: '',
        text: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyExpenseInfo = { ...expenseInfo };
        copyExpenseInfo[name] = value;
        setExpenseInfo(copyExpenseInfo);
    }

    const addExpenses = (e) => {
        e.preventDefault();
        const { amount, text } = expenseInfo;
        if (!amount || !text) {
            return;
        }
        addTransaction(expenseInfo);
        setExpenseInfo({ amount: '', text: '' })
    }

    return (
        <div className='expense-form-container'>
            <h1>Expensive Tracker</h1>
            <form className="expense-form" onSubmit={addExpenses}>
                <div>
                    <label htmlFor='text'>Expensive Detail</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='text'
                        placeholder='Enter your Expensive Detail...'
                        value={expenseInfo.text}
                    />
                </div>
                <div>
                    <label htmlFor='amount'>Amount</label>
                    <input
                        onChange={handleChange}
                        type='number'
                        name='amount'
                        placeholder='Enter your Amount...'
                        value={expenseInfo.amount}
                    />
                </div>
                <button type='submit'>Add Expense</button>
            </form>
        </div>
    )
}

export default ExpensiveForm