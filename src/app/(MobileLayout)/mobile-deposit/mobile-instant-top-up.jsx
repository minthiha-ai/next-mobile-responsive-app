'use client'
import React, { useState } from 'react';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import InsetShadowButton from '@/app/components/customs/buttons/InsetShadowButton';

const InstantTopUp = () => {
    const [selectedAmount, setSelectedAmount] = useState(0);

    // Preset amounts as numbers for easier processing
    const presetAmounts = [100, 500, 1000, 5000, 10000];

    const handleAmountClick = (amount) => {
        setSelectedAmount(amount);
    };

    const handleClearAmount = () => {
        setSelectedAmount(0);
    };

    return (
        <>
            <PageHeader backUrl={paths.deposit()} title="Instant Top Up" />
            <div className="instant-topup-page">
                {/* Payment Method Input */}
                <div className="input-group">
                    <label>Payment Method</label>
                    <div className="input-container">
                        <input type="text" value="99 Pay" disabled />
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

                {/* Deposit Button */}
                <InsetShadowButton
                    text="Deposit"
                    fontSize="1rem"
                    padding="18px, 32px, 18px, 32px"
                    borderradius="12px"
                    inset
                />
            </div>
        </>
    );
};

export default InstantTopUp;
