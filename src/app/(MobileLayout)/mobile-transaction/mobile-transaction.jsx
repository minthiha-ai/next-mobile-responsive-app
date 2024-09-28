'use client';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';

const MobileTransactionPage = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isDateOpen, setIsDateOpen] = useState(false);

    const toggleCategory = () => {
        setIsCategoryOpen(!isCategoryOpen);
        if (isDateOpen) setIsDateOpen(false); // Close Date if Category is open
    };

    const toggleDate = () => {
        setIsDateOpen(!isDateOpen);
        if (isCategoryOpen) setIsCategoryOpen(false); // Close Category if Date is open
    };

    return (
        <>
            <PageHeader backUrl={paths.home()} title="Transaction" headerClass="header" arrowColor="black" />

            <div className="transaction-page">
                {/* Filter Section */}
                <div className="filter-section">
                    <Button className={`filter-btn ${isCategoryOpen ? 'selected' : ''}`} onClick={toggleCategory}>
                        Category
                    </Button>
                    <Button className={`filter-btn ${isDateOpen ? 'selected' : ''}`} onClick={toggleDate}>
                        Date
                    </Button>
                </div>

                {/* Overlay Layer for Filter Options */}
                <div className={`overlay ${isCategoryOpen || isDateOpen ? 'active' : ''}`}>
                    {isCategoryOpen && (
                        <div className="category-options">
                            <Button className="category-btn">Deposit</Button>
                            <Button className="category-btn">Withdraw</Button>
                            <Button className="category-btn">Transfer</Button>
                            <Button className="category-btn">Rebate</Button>
                            <Button className="category-btn">Loan</Button>
                            <Button className="category-btn">Promotion</Button>
                            <Button className="category-btn">Other</Button>
                        </div>
                    )}

                    {isDateOpen && (
                        <div className="date-options">
                            <Button className="date-btn">Today</Button>
                            <Button className="date-btn">Yesterday</Button>
                            <Button className="date-btn">Weekly</Button>
                            <Button className="date-btn">This Month</Button>
                            <div className="date-range">
                                <input type="date" className="date-input" />
                                <span className="date-separator">-</span>
                                <input type="date" className="date-input" />
                                <Button className="search-btn">Search</Button>
                            </div>
                        </div>
                    )}
                </div>

                {/* No Transaction Section */}
                <div className="no-transaction-section">
                    <img src="/mobile_images/transaction/no-transaction.png" alt="No Transaction" className="no-transaction-img" />
                    <p className="no-transaction-text">Currently No Any Transaction</p>
                    <Button className="deposit-btn">Deposit</Button>
                </div>
            </div>
        </>
    );
};

export default MobileTransactionPage;
