'use client';
import React from 'react';
import PageHeader from '@/app/components/mobile/PageHeader';
import { Button } from '@mui/material';
import paths from '@/paths';
import Link from 'next/link';

const MobileLoanPage = () => {
    const loans = [
        {
            amount: 600,
            repayableAmount: 600,
            interest: 100,
            dueDate: '27-07-2024',
            status: 'overdue',
        },
        {
            amount: 600,
            repayableAmount: 600,
            interest: 100,
            dueDate: '27-08-2024',
            status: 'pending',
        },
        {
            amount: 363,
            repayableAmount: 363,
            interest: 100,
            dueDate: '27-08-2024',
            status: 'pending',
        },
    ];

    return (
        <>
            <PageHeader backUrl={paths.home()} title="Loan" />
            <div className="loan-page">
                {/* Loan Card */}
                <div className="loan-card">
                    <span className="card-title">Total Loan Amount</span>
                    <div className="loan-details">
                        <span className="currency">RM</span>
                        <span className="amount">1,200</span>
                    </div>
                    <div className="loan-info">
                        <div className="loan-content">
                            <span>Total Interest Payable</span>
                            <span className="amount">200</span>
                        </div>
                        <div className="loan-content">
                            <span >Total Repayable Amount</span>
                            <span className="amount">1,000</span>
                        </div>
                    </div>
                </div>

                {/* Loan Actions */}
                <div className="loan-actions">
                    <Link href={paths.loanApply()}>
                        <div className="action">
                            <img src="/mobile_images/icons/loan/check.png" alt="Apply Loan Icon" />
                            <p>Apply loan</p>
                        </div>
                    </Link>
                    <div className="action">
                        <img src="/mobile_images/icons/loan/coin.png" alt="Deposit Icon" />
                        <p>Deposit</p>
                    </div>
                    <div className="action">
                        <img src="/mobile_images/icons/loan/history.png" alt="History Icon" />
                        <p>History</p>
                    </div>
                </div>

                {/* Applied Loan Cards (Scrollable) */}
                <div className="applied-loans">
                    <h3 className="applied-loans-title">Applied Loan</h3>
                    <div className="loan-card-list">
                        {loans.map((loan, index) => (
                            <div className="applied-loan-card" key={index}>
                                <div className="loan-card-header">
                                    <div className="loan-card-header-content">
                                        <span className={`repayable-amount ${loan.status === 'overdue' ? 'overdue' : ''}`}>
                                            RM {loan.repayableAmount}.00
                                        </span>
                                        <span className="repayable-label">
                                            Repayable Amount {loan.status === 'overdue' ? '(Overdue)' : ''}
                                        </span>
                                    </div>
                                    <div className="loan-card-header-button">
                                        <Button variant="contained" className="repayment-btn">Repayment</Button>
                                    </div>
                                </div>

                                {/* Loan Progress Timeline */}
                                <div className="loan-progress">
                                    <div className={`loan-step ${loan.status === 'overdue' ? 'active' : ''}`}>Apply</div>
                                    <div className="loan-connector"></div> {/* Connector between steps */}
                                    <div className={`loan-step ${loan.status === 'overdue' ? 'active' : ''}`}>Review</div>
                                    <div className="loan-connector"></div> {/* Connector between steps */}
                                    <div className={`loan-step ${loan.status === 'overdue' ? 'active' : ''}`}>Approval</div>
                                </div>

                                {/* Loan Details */}
                                <div className="loan-details">
                                    <div className="loan-detail-content">
                                        <span className="loan-title">Loan Amount</span>
                                        <span className={`loan-value ${loan.status === 'overdue' ? 'overdue' : ''}`}>RM {loan.amount}</span>
                                    </div>
                                    <div className="loan-detail-content">
                                        <span className="loan-title">Interest Payable</span>
                                        <span className="loan-value">RM {loan.interest}</span>
                                    </div>
                                    <div className="loan-detail-content">
                                        <span className="loan-title">Due Date</span>
                                        <span className={`loan-value ${loan.status === 'overdue' ? 'overdue' : ''}`}>{loan.dueDate}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default MobileLoanPage;
