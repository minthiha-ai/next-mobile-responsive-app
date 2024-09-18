'use client';
import React, { useState } from 'react';
import PageHeader from '@/app/components/mobile/PageHeader';
import { Button } from '@mui/material';
import paths from '@/paths';
import InsetShadowButton from '@/app/components/customs/buttons/InsetShadowButton';
import { WidthFull } from '@mui/icons-material';

const LoanApply = () => {
    const [loanAmount, setLoanAmount] = useState(1000);
    const [loanTerm, setLoanTerm] = useState('1 week');

    // Handle loan amount increment/decrement
    const handleAmountChange = (delta) => {
        const newAmount = loanAmount + delta;
        if (newAmount >= 1000 && newAmount <= 10000) {
            setLoanAmount(newAmount);
        }
    };

    return (
        <>
            <PageHeader backUrl={paths.loan()} title="Loan Apply" headerClass="blue-header" arrowColor='white' />
            <div className="loan-page-bg"></div>
            <div className="loan-apply-page">
                <span className="loan-apply-page-title">You can loan up to MYR 1,000</span>
                <div className="loan-amount-card">
                    <p className="loan-limit">Select your loan amount</p>
                    <div className="loan-amount-selector">
                        <button onClick={() => handleAmountChange(-100)}>-</button>
                        <span>{loanAmount.toLocaleString()}</span>
                        <button onClick={() => handleAmountChange(100)}>+</button>
                    </div>
                    <div className="loan-term-section">
                        <span>Life of loan</span>
                        <div className="loan-term-options">
                            <button className={loanTerm === '1 week' ? 'active' : ''} onClick={() => setLoanTerm('1 week')}>1 week</button>
                            <button className={loanTerm === '2 week' ? 'active' : ''} onClick={() => setLoanTerm('2 week')}>2 week</button>
                            <button className={loanTerm === '3 week' ? 'active' : ''} onClick={() => setLoanTerm('3 week')}>3 week</button>
                            <button className={loanTerm === '1 month' ? 'active' : ''} onClick={() => setLoanTerm('1 month')}>1 month</button>
                        </div>
                    </div>
                </div>

                <div className="loan-details-card">
                    <h4>Loan details</h4>
                    <p><span>Loan amount</span><span>RM {loanAmount.toFixed(2)}</span></p>
                    <p><span>Loan term</span><span>{loanTerm}</span></p>
                    <p><span>Loan Interest</span><span>RM 100</span></p>
                    <p><span>Due date</span><span>27-07-2024</span></p>
                    <p><span>Total repayment</span><span>RM {loanAmount + 100}.00</span></p>
                    <div className="divider"></div>
                    <InsetShadowButton
                        text="Apply"
                        fontSize="1rem"
                        padding="18px, 32px, 18px, 32px"
                        borderRadius="12px"
                        width="100%"
                        inset
                    />
                </div>


            </div>
        </>
    );
};

export default LoanApply;
