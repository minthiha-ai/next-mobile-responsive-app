'use client';
import React, { useState } from 'react';
import PageHeader from '@/app/components/mobile/PageHeader';
import { Button } from '@mui/material';
import paths from '@/paths';

const BankTransfer = () => {
    const [selectedAmount, setSelectedAmount] = useState(0);

    // Convert 'k' values to numbers for better handling
    const presetAmounts = [100, 500, 1000, 5000, 10000];

    // Handle click on preset amount buttons
    const handleAmountClick = (amount) => {
        setSelectedAmount(amount);
    };

    // Clear amount input
    const handleClearAmount = () => {
        setSelectedAmount(0);
    };

    return (
        <>
            <PageHeader backUrl={paths.deposit()} title="Bank Transfer" />
            <div className="bank-transfer-page">

                {/* Bank Name */}
                <div className="input-group">
                    <label>Bank Name</label>
                    <div className="input-container">
                        <input type="text" value="Public Bank" disabled />
                    </div>
                </div>

                {/* Bank Account No */}
                <div className="input-group">
                    <label>Bank Account No</label>
                    <div className="input-container">
                        <input type="text" value="2346 8421 8990" disabled />
                    </div>
                </div>

                {/* Full Name */}
                <div className="input-group">
                    <label>Full Name</label>
                    <div className="input-container">
                        <input type="text" value="Crab Enterprise" disabled />
                    </div>
                </div>

                {/* Amount Input */}
                <div className="input-group">
                    <label>Amount (RM)</label>
                    <div className="input-container">
                        <input
                            type="number"
                            value={selectedAmount === 0 ? "" : selectedAmount}
                            placeholder="0.00"
                            disabled
                        />
                        {/* Show clear button only when amount is greater than 0 */}
                        {selectedAmount > 0 && (
                            <button className="clear-btn" onClick={handleClearAmount}>✕</button>
                        )}
                    </div>
                </div>

                {/* Preset Amounts */}
                <div className="preset-amounts">
                    {presetAmounts.map((amount, index) => (
                        <button
                            key={index}
                            className={`preset-btn ${selectedAmount === amount ? 'active' : ''}`}
                            onClick={() => handleAmountClick(amount)}
                        >
                            {amount >= 1000 ? `${amount / 1000}k` : amount}
                        </button>
                    ))}
                </div>

                {/* Min and Max Amount Info */}
                <div className="min-max-amounts">
                    <p className="min-amount">. Min top up amount: <span className="red-text">20.00</span></p>
                    <p className="max-amount">. Single maximum amount: <span className="red-text">30,000.00</span></p>
                </div>

                {/* File Upload */}
                <div className="file-upload">
                    <Button variant="contained" component="label" className="upload-btn">
                        Choose File
                        <input hidden type="file" />
                    </Button>
                    <span>Upload Image</span>
                </div>

                {/* Deposit Button */}
                <Button variant="contained" color="primary" className="deposit-btn">
                    Deposit
                </Button>
            </div>
        </>
    );
};

export default BankTransfer;
