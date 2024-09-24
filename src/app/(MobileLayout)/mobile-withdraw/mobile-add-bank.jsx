'use client';
import React, { useState } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import InsetShadowButton from '@/app/components/customs/buttons/InsetShadowButton';

const AddBankPage = () => {
    const [bank, setBank] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [fullName, setFullName] = useState('');

    const banks = [
        { value: 'Affin Bank', label: 'Affin Bank' },
        { value: 'Public Bank', label: 'Public Bank' },
        { value: 'Maybank', label: 'Maybank' },
    ];

    return (
        <>
            <PageHeader backUrl={paths.withdraw()} title="Add Bank" headerClass="blue-header" arrowColor="white" />
            <div className="add-bank-bg"></div>
            <div className="add-bank-page">
                <form className="add-bank-form">
                    <TextField
                        select
                        label="Select Your Bank"
                        value={bank}
                        onChange={(e) => setBank(e.target.value)}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    >
                        {banks.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label="Bank Account Number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />

                    <div className="remainder-section">
                        <p>Remainder:</p>
                        <ol>
                            <li>Full Name must be the same as Bank Card holder Name.</li>
                            <li>Please add Bank Card before Withdraw.</li>
                        </ol>
                    </div>
                    <InsetShadowButton
                        text="Submit"
                        fontSize="1rem"
                        padding="0.5rem 6rem"
                        borderradius="11px"
                        fontWeight="bold"
                        inset
                    />
                </form >
            </div >
        </>
    );
};

export default AddBankPage;
