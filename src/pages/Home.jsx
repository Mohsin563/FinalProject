import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ExpensiveTable from './ExpensiveTable';
import ExpensiveDetails from './ExpensiveDetails';
import ExpensiveForm from './ExpensiveForm';
import ExpensiveBarChart from './ExpensiveBarChart';
import './Home.css';
import axios from 'axios';
function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [expenses, setExpenses] = useState([]);
    const [incomeAmt, setIncomeAmt] = useState(0);
    const [expenseAmt, setExpenseAmt] = useState(0);

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    useEffect(() => {
        const amounts = expenses.map(item => item.amount);
        const income = amounts.filter(item => item > 0)
            .reduce((acc, item) => (acc += item), 0);
        const exp = amounts.filter(item => item < 0)
            .reduce((acc, item) => (acc += item), 0) * -1;
        setIncomeAmt(income);
        setExpenseAmt(exp);
    }, [expenses]);

    const deleteExpens = (id) => {
        axios.delete(`http://localhost:3000/expenses/${id}`)
            .then(() => {
                setExpenses(prev => prev.filter(expense => expense._id !== id));
            })
            .catch(err => console.error(err));
    };

    const fetchExpenses = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/');
            return;
        }
        axios.get(`http://localhost:3000/expenses?userId=${user._id}`)
            .then(response => {
                // If response.data is the user object
                const userData = response.data;
                setLoggedInUser(userData.name);
                setExpenses(userData.expenses || []);
            })
            .catch(err => console.error(err));
    };

    const addTransaction = (e) => {
        e.preventDefault();
        const form = e.target;
        const expenseData = {
            text: form.text.value,
            amount: parseFloat(form.amount.value),
            userName: loggedInUser
        };

        if (expenseData.text.trim() === '' || isNaN(expenseData.amount)) {
            alert('Please fill in all fields correctly.');
            return;
        }
      axios.post('http://localhost:3000/expenses', expenseData)
      .then(response => {
          setExpenses(prev => [...prev, response.data]);
          fetchExpenses(); // Refresh expenses after adding a new one
      })
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

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
                <ExpensiveForm addTransaction={addTransaction} loggedInUser={loggedInUser} />
            </div>
            <div className="expensive-table">
                <ExpensiveTable expenses={expenses} deleteExpens={deleteExpens} />
            </div>
            <div className="expensive-chart">
                <ExpensiveBarChart expenses={expenses} />
            </div>
            <ToastContainer />
        </div>
    );
}

export default Home;