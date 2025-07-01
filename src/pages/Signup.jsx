import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import './Authorization.css';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo(prev => ({ ...prev, [name]: value }));
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
            <h2 className="heading">Create your account</h2>
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
                        value={signupInfo.email}
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
                <button type='submit' className="sumbit-btn">
                    CONTINUE
                </button>
                <div className="footer">
                    Have an account?{' '}
                    <a href="/signin">
                        Sign in
                    </a>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Signup