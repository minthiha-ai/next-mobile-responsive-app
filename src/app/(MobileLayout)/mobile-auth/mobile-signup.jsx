'use client';
import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';

const MobileSignupPage = () => {
    return (
        <div className="signup-page">
            {/* Logo Section */}
            <div className="login-header">
                <Typography variant='h1' color="white">LOGO</Typography>
            </div>

            {/* Signup Form */}
            <div className="signup-form">
                <h2 className="login-title">SIGN UP</h2>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter Username" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter Email" />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="phone-input">

                        <select className="phone-country-code">
                            <option value="+60">+60</option>
                        </select>
                        <input type="text" id="phone" placeholder="123 456 789" />
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter Password" />
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" placeholder="Enter Confirm Password" />
                </div>
                <button className="login-btn">Sign Up</button>
                <div className="signup-section">
                    Already have an account? <a href="#" className="signup-link">Log In</a>
                </div>
            </div>
        </div>
    );
};

export default MobileSignupPage;
