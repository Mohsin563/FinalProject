import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Authorization.css';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
       axios.post('http://localhost:3000/login', loginInfo)
       .then(response => {
            if (response.data.user) {
                localStorage.setItem('user', JSON.stringify(response.data.user));
               setTimeout=(navigate('/Dashboard'),1000);
            } else {
                alert('Invalid email or password');
            }
        }   )
    };

    return (
        <div className="container">
            <h2 className="heading">Sign In</h2>
            <p className="subheading">
                to continue to Expense Tracker
            </p>

            {/* Form */}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor='email' className="form-label">Email address</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Enter your email...'
                        value={loginInfo.email}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group-password">
                    <label htmlFor='password' className="form-label">Password</label>
                    <input
                        onChange={handleChange}
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        id='password'
                        placeholder='Password'
                        value={loginInfo.password}
                        className="form-input"
                        required
                    />
                    <span
                        onClick={() => setShowPassword(s => !s)}
                        className="show-password"
                        title={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? '🙈' : '👁️'}
                    </span>
                </div>
                <button type='submit' className="sumbit-btn">
                    Sign In
                </button>
                <div className="footer">
                    Does not have an account?{' '}
                    <a href="/signup">
                        Sign up
                    </a>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login