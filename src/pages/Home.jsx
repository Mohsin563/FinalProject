import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ExpensiveTable from './ExpensiveTable';
import ExpensiveDetails from './ExpensiveDetails';
import ExpensiveForm from './ExpensiveForm';
import './Home.css';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [expenses, setExpenses] = useState([]);
    const [incomeAmt, setIncomeAmt] = useState(0);
    const [expenseAmt, setExpenseAmt] = useState(0);

    

    const handleLogout = () => {
        
    }
    useEffect(() => {
        const amounts = expenses.map(item => item.amount);
        const income = amounts.filter(item => item > 0)
            .reduce((acc, item) => (acc += item), 0);
        const exp = amounts.filter(item => item < 0)
            .reduce((acc, item) => (acc += item), 0) * -1;
        setIncomeAmt(income);
        setExpenseAmt(exp);
    }, [expenses])

    const deleteExpens = () => {
          }

    const fetchExpenses = () => {
        
    }



    const addTransaction =  () => {

    }

    useEffect(() => {
        fetchExpenses()
    }, [])

   return (
  <div className="home-container">
    <div className='user-section'>
      <h1>Welcome {loggedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
    <div className="expensive-details">
      <ExpensiveDetails incomeAmt={incomeAmt} expenseAmt={expenseAmt} />
    </div>
    <div className="expensive-form">
      <ExpensiveForm addTransaction={addTransaction} />
    </div>
    <div className="expensive-table">
      <ExpensiveTable expenses={expenses} deleteExpens={deleteExpens} />
    </div>
    <ToastContainer />
  </div>
)
}

export default Home