'use client';
import React, { useState } from 'react';
import PageHeader from '@/app/components/mobile/PageHeader'; // Assuming you have this header component
import { Button } from '@mui/material';
import paths from '@/paths'; // Assuming paths are predefined

const MobileWithdraw = () => {
    const [selectedBank, setSelectedBank] = useState('Affin Bank Berhad');
    const [withdrawAmount, setWithdrawAmount] = useState(0);

    // Handle amount input clear
    const handleClearAmount = () => {
        setWithdrawAmount(0);
    };

    return (
        <>
            <PageHeader backUrl={paths.home()} title="Withdraw" />
            <div className="withdraw-page">
                {/* Balance Section */}
                <div className="balance-section">
                    <p>Balance</p>
                    <div className="balance-amount">
                        <span className="currency">RM</span>
                        <span className="amount">199,900</span>
                    </div>
                    <p className="turnover-info">Turnover requirement</p>
                    <div className="turnover-amount">199,900/0.00</div>
                </div>

                {/* Bank Options */}
                <div className="bank-options">
                    <h4>Bank options</h4>
                    <div className="banks-list">
                        <div className={`bank-item ${selectedBank === 'Affin Bank Berhad' ? 'active' : ''}`}
                            onClick={() => setSelectedBank('Affin Bank Berhad')}>
                            <img src="/affinbank-logo.png" alt="Affin Bank" />
                            <p className="bank-name">Affin Bank Berhad</p>
                            <p className="bank-number">1004 6007 0169</p>
                        </div>
                        <div className={`bank-item ${selectedBank === 'Public Bank' ? 'active' : ''}`}
                            onClick={() => setSelectedBank('Public Bank')}>
                            <img src="/publicbank-logo.png" alt="Public Bank" />
                            <p className="bank-name">Public Bank</p>
                            <p className="bank-number">2346 8421 8990</p>
                        </div>
                        <Button className="add-new-bank-btn">Add new bank</Button>
                    </div>
                </div>

                {/* Form Section */}
                <div className="form-section">
                    <div className="input-group">
                        <label>Full Name</label>
                        <input type="text" value="Crab Enterprise" disabled />
                    </div>

                    <div className="input-group">
                        <label>Amount (RM)</label>
                        <input
                            type="number"
                            value={withdrawAmount === 0 ? "" : withdrawAmount}
                            placeholder="0.00"
                            onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                        />
                        <button className="clear-btn" onClick={handleClearAmount}>✕</button>
                    </div>

                    <p className="withdraw-info">
                        <span>Remaining withdraw times: </span>
                        <span className="red-text">3</span>
                    </p>
                    <p className="withdraw-info">
                        <span>Withdraw charges: </span>
                        <span className="red-text">0.00</span>
                    </p>
                </div>

                {/* Withdraw Button */}
                <Button className="withdraw-btn">Withdraw</Button>
            </div>
        </>
    );
};

export default MobileWithdraw;
