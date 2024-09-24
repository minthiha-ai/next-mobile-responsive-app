'use client';
import React, { useState } from 'react';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import { TextField, MenuItem, IconButton, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import InsetShadowButton from '@/app/components/customs/buttons/InsetShadowButton';
import ClearIcon from '@mui/icons-material/Clear';
import Link from 'next/link';

const MobileTransferDetail = () => {
    const [amount, setAmount] = useState('');
    const [showPINPopup, setShowPINPopup] = useState(false);

    const handleClearAmount = () => {
        setAmount(''); // Clear the amount
    };

    const handleTransferClick = () => {
        setShowPINPopup(true); // Show the popup when "Transfer" button is clicked
    };

    const handleClosePopup = () => {
        setShowPINPopup(false); // Close the popup
    };

    return (
        <div className="transfer-details-wraper">
            <PageHeader backUrl={paths.transfer()} title="Transfer" headerClass="header" arrowColor="black" />
            <div className="transfer-details-page">
                {/* User Info */}
                <div className="user-info">
                    <img src="/mobile_images/contacts/paul.png" alt="Paul C. Ramos" className="user-avatar" />
                    <h2>Paul C. Ramos</h2>
                    <p>UID: ZY**Y68</p>
                </div>

                {/* Amount Input */}
                <div className="amount-input-section">
                    <div className="input-title">
                        <span>Amount (RM)</span>
                        <div className="currency-selector">
                            <TextField
                                select
                                value="RM"
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        backgroundColor: '#f3f8fe',
                                    },
                                    '& .MuiSelect-icon': {
                                        right: '8px',
                                    },
                                }}
                            >
                                <MenuItem value="RM">
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="/images/flag/malaysia.png" alt="RM" style={{ width: '18px', marginRight: '8px' }} />
                                        <span>RM</span>
                                    </div>
                                </MenuItem>
                            </TextField>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-container">
                            <TextField
                                variant="outlined"
                                type="number"
                                value={amount} // Bind the value to the state
                                onChange={(e) => setAmount(e.target.value)} // Update the state on input change
                                placeholder="0.00"
                                fullWidth
                                InputProps={{ style: { borderRadius: '8px' } }}
                            />
                            <IconButton className="clear-btn" onClick={handleClearAmount}>
                                <ClearIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className="fee-details">
                        <span>Fee Charged:</span>
                        <span className="red-text">0.00</span>
                    </div>
                </div>

                <div className="transfer-btn">
                    <InsetShadowButton
                        text="Transfer"
                        fontSize="1rem"
                        padding="0.8rem 7rem"
                        borderRadius="10px"
                        fontWeight="bold"
                        inset
                        onClick={handleTransferClick}
                    />
                </div>
                {/* Popup for PIN Entry */}
                <Link href={paths.transferRecipt()}>
                    <Dialog open={showPINPopup} onClose={handleClosePopup} fullWidth maxWidth="xs" PaperProps={{ style: { borderRadius: '16px' } }}>
                        <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Payment PIN</DialogTitle>
                        <DialogContent>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '1rem', color: '#666' }}>Transfer Amount</p>
                                <h1 style={{ color: '#2694E5', fontSize: '2rem', marginBottom: '2.5rem' }}>RM {amount || '0.00'}</h1>

                                {/* PIN Input Field */}
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '4rem' }}>
                                    {/* Placeholder for individual PIN inputs */}
                                    {[...Array(6)].map((_, index) => (
                                        <TextField
                                            key={index}
                                            variant="outlined"
                                            inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: '1.5rem' } }}
                                            style={{ width: '50px', height: '50px', borderRadius: '8px' }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </Link>

            </div>
        </div >
    );
};

export default MobileTransferDetail;
