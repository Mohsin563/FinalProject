import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import './Authorization.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        email: '',
        password: '',
        name: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo(prev => ({ ...prev, [name]: value }));
    };

const Navigate = useNavigate();
    const handleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
    if (!name.trim() || !email.trim() || !password.trim()) {
        return handleError('Name, email, and password must not be empty');
    }
        setLoading(true);
        axios.post('http://localhost:3000/signup', signupInfo)
        .then(result=>{
            console.log(result);
            setLoading(false);
        })
        .catch(err=>{
            console.log(err);
            setLoading(false);
        }); 
        Navigate('/login');
    };

    return (
        <div className="container">
           
            <h2 className="heading">Create your account</h2>
            <p className="subheading">
                to continue to Expense Tracker
            </p>
         
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='email' className="form-label">Email address</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Enter your email...'
                        value={signupInfo.email}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='name' className="form-label">Name</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Enter your name...'
                        value={signupInfo.name}
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
                        value={signupInfo.password}
                        className="form-input"
                        required
                    />
                    <span
                        onClick={handleShowPassword}
                        className="show-password"
                        title={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? '🙈' : '👁️'}
                    </span>
                </div>
                <button
                  type='submit'
                  className="sumbit-btn"
                  disabled={!signupInfo.name.trim() || !signupInfo.email.trim() || !signupInfo.password.trim() || loading}
                >
                  {loading ? 'Signing up...' : 'Signup'}
                </button>
                <div className="footer">
                    Have an account?{' '}
                    <a href="/login">
                        Sign in
                    </a>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Signup