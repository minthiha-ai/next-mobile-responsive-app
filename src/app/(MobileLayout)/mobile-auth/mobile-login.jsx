'use client';
import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';

const MobileLoginPage = () => {
    return (
        <div className="login-page">
            {/* Logo Section */}
            <div className="login-header">
                <Typography variant='h1' color="white">LOGO</Typography>
            </div>

            {/* Login Form */}
            <div className="login-form">
                <h2 className="login-title">LOG IN</h2>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter Email" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter Password" />
                </div>
                <div className="form-actions">
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                    <a href="#" className="forgot-password">Forgot your password?</a>
                </div>
                <button className="login-btn">Log In</button>
                <div className="signup-section">
                    Don’t have an account? <a href="#" className="signup-link">Sign Up</a>
                </div>
                <div className="or-login-with">Or Login With</div>
                <div className="social-login">
                    <button className="social-btn">
                        <Image src="/mobile_images/icons/mail.png" alt="Mail" width={40} height={40} />
                    </button>
                    <button className="social-btn">
                        <Image src="/mobile_images/icons/facebook.png" alt="Facebook" width={40} height={40} />
                    </button>
                    <button className="social-btn">
                        <Image src="/mobile_images/icons/user1.png" alt="User" width={40} height={40} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileLoginPage;
