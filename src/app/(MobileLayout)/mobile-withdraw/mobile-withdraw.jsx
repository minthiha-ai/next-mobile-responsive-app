'use client';
import React, { useState } from 'react';
import PageHeader from '@/app/components/mobile/PageHeader';
import Link from 'next/link';
import paths from '@/paths';
import InsetShadowButton from '@/app/components/customs/buttons/InsetShadowButton';
import { TextField, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const WithdrawPage = () => {
    const [selectedBank, setSelectedBank] = useState('Affin Bank');
    const banks = [
        { name: 'Affin Bank Berhad', account: '1004 6007 0169', logo: '/mobile_images/icons/withdraw/affin-bank.png' },
        { name: 'Public Bank', account: '2346 8421 8990', logo: '/mobile_images/icons/withdraw/public-bank.png' }
    ];

    return (
        <>
            <PageHeader backUrl={paths.home()} title="Withdraw" headerClass="blue-header" arrowColor="white" />
            <div className="withdraw-container">
                <div className="withdraw-page">
                    {/* Balance and Turnover */}
                    <div className="balance-info">
                        <div className="balance-header">
                            <div className="balance-title">
                                <span>Balance</span>
                                <img src="/mobile_images/icons/eye.png" alt="" />
                            </div>
                            <div className="balance-currency">
                                <select>
                                    <option value="RM">RM</option>
                                    <option value="RM">USDT</option>
                                    <option value="RM">YUAN</option>
                                </select>
                            </div>
                        </div>
                        <div className="balance-amount">
                            <span>RM</span>
                            <span>199,900</span>
                        </div>

                        <div className="balance-details">
                            <span>Turnover requirement</span>
                            <span>199,900/0.00</span>
                        </div>

                    </div>
                    <div className="bank-body">
                        {/* Bank Options */}
                        <div className="bank-options">
                            <div className="options-header">
                                <span>Bank options</span>
                                <Link href={paths.addBank()}>
                                    <InsetShadowButton
                                        text="Add new bank"
                                        fontSize="0.7rem"
                                        padding="0.2rem 2rem"
                                        borderradius="11px"
                                        fontWeight="light"
                                        inset
                                    />
                                </Link>
                            </div>
                            <div className="bank-list">
                                {banks.map((bank, index) => (
                                    <div key={index} className={`bank-card ${selectedBank === bank.name ? 'active' : ''}`} onClick={() => setSelectedBank(bank.name)}>
                                        <img src={bank.logo} alt={bank.name} className="bank-logo" />
                                        <div className="bank-details">
                                            <span>{bank.name}</span>
                                            <span>{bank.account}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Full Name and Amount */}
                        <div className="withdraw-form">
                            <div className="input-group">
                                <label>Full Name</label>
                                <TextField
                                    variant="outlined"
                                    value="Crab Enterprise"
                                    disabled
                                    fullWidth
                                    InputProps={{ style: { borderRadius: '8px' } }}
                                />
                            </div>
                            <div className="input-group">
                                <label>Amount (RM)</label>
                                <div className="input-container">
                                    <TextField
                                        variant="outlined"
                                        type="number"
                                        placeholder="0.00"
                                        fullWidth
                                        InputProps={{ style: { borderRadius: '8px' } }}
                                    />
                                    <IconButton className="clear-btn" onClick={() => {/* handle clear */ }}>
                                        <ClearIcon />
                                    </IconButton>
                                </div>
                            </div>
                        </div>


                        {/* Withdraw Details */}
                        <div className="withdraw-details">
                            <span>Remaining withdraw times:</span> <span className="red-text">3</span>
                        </div>
                        <div className="withdraw-details">
                            <span>Withdraw charges:</span> <span className="red-text">0.00</span>
                        </div>

                        <div className="withdraw-button">
                            {/* Withdraw Button */}
                            <InsetShadowButton
                                text="Withdraw"
                                fontSize="1rem"
                                padding="0.5rem 6rem"
                                borderRadius="10px"
                                inset
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WithdrawPage;
