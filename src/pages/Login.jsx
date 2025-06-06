import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import './Authorization.css';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle login logic
    };

    return (
        <div className="container">
            {/* Logo */}
            <div className="logo">
                <img src="" alt="Logo" />
            </div>
            {/* Heading */}
            <h2 className="heading">Sign In</h2>
            <p className="subheading">
                to continue to Expense Tracker
            </p>
            {/* Social Buttons */}
            <button className="social-btn">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" width={20} />
                Continue with Facebook
            </button>
            <button className="social-btn">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" width={20} />
                Continue with Google
            </button>
            {/* Divider */}
            <div className="divider">
                <div className="divider-line" />
                <span className="divider-text">or</span>
                <div className="divider-line" />
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit}>
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
                        onClick={handleShowPassword}
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