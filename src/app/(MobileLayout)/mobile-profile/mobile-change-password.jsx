'use client';
import React, { useState } from 'react';
import { Box, Button, TextField, IconButton } from '@mui/material';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';

const MobileChangePasswordPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPin, setShowPin] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePinVisibility = () => {
        setShowPin(!showPin);
    };

    return (
        <>
            <PageHeader backUrl={paths.profile()} title="Change Password" headerClass="header" arrowColor="black" />
            <div className="change-password-page">
                {/* Change Password Section */}
                <Box className="password-section">
                    <div className="input-group">
                        <TextField
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            className="input-field"
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={togglePasswordVisibility}>
                                        {showPassword ? <IconEyeOff /> : <IconEye />}
                                    </IconButton>
                                ),
                            }}
                        />
                    </div>

                    <div className="input-group">
                        <TextField
                            label="New Password"
                            type={showPassword ? 'text' : 'password'}
                            className="input-field"
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={togglePasswordVisibility}>
                                        {showPassword ? <IconEyeOff /> : <IconEye />}
                                    </IconButton>
                                ),
                            }}
                        />
                    </div>

                    <div className="input-group">
                        <TextField
                            label="Confirm Password"
                            type={showPassword ? 'text' : 'password'}
                            className="input-field"
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={togglePasswordVisibility}>
                                        {showPassword ? <IconEyeOff /> : <IconEye />}
                                    </IconButton>
                                ),
                            }}
                        />
                    </div>

                    <Button className="otp-btn">Request OTP</Button>
                    <Button className="submit-btn">Set Password</Button>
                </Box>

                <Box className="divider" />

                {/* Change Withdraw Pin Section */}
                <Box className="pin-section">
                    <div className="input-group">
                        <TextField
                            label="Current Pin"
                            type={showPin ? 'text' : 'password'}
                            className="input-field"
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={togglePinVisibility}>
                                        {showPin ? <IconEyeOff /> : <IconEye />}
                                    </IconButton>
                                ),
                            }}
                        />
                    </div>

                    <div className="input-group">
                        <TextField
                            label="New Pin"
                            type={showPin ? 'text' : 'password'}
                            className="input-field"
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={togglePinVisibility}>
                                        {showPin ? <IconEyeOff /> : <IconEye />}
                                    </IconButton>
                                ),
                            }}
                        />
                    </div>

                    <Button className="otp-btn">Request OTP</Button>
                    <Button className="submit-btn">Change PIN</Button>
                </Box>
            </div>
        </>
    );
};

export default MobileChangePasswordPage;
