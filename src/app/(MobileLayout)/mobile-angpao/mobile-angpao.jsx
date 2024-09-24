'use client';
import React, { useState } from 'react';
import { Button, Switch, TextField, MenuItem, Tabs, Tab, Dialog, DialogTitle, DialogContent } from '@mui/material';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import Link from 'next/link';

const MobileAngPaoPage = () => {
    const [amount, setAmount] = useState('');
    const [tabValue, setTabValue] = useState(0);
    const [subTabValue, setSubTabValue] = useState(0);
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

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleSubTabChange = (value) => {
        setSubTabValue(value);
    };

    return (
        <>
            <PageHeader backUrl={paths.home()} title="Ang Pao" headerClass="angpao-header" arrowColor="white" icon={<img style={{ width: '3rem' }} src="/mobile_images/icons/angpao/angpao.png" alt="Ang Pao Icon" />} />

            <div className="ang-pao-page">
                {/* Main Tabs: Issue & Receive */}
                <Tabs value={tabValue} onChange={handleTabChange} centered>
                    <Tab label="Issue" />
                    <Link href={paths.angpaoRecieve()}>
                        <Tab label="Receive" />
                    </Link>
                </Tabs>

                <div className="angpa-conent-wraper">
                    <div className="ang-pao-content">
                        {/* Sub Tabs: Lucky & Regular */}
                        <div className="tab-buttons">
                            <Button className={subTabValue === 0 ? 'active' : ''} onClick={() => handleSubTabChange(0)}>Lucky</Button>
                            <Button className={subTabValue === 1 ? 'active' : ''} onClick={() => handleSubTabChange(1)}>Regular</Button>
                        </div>

                        <div className="form-group">
                            <div className="input-title">
                                <span>Quantity (pcs)</span>
                            </div>
                            <TextField placeholder="Enter the quantity of Ang Pao" fullWidth variant="outlined" className="input-field" />
                        </div>

                        <div className="form-group">
                            <div className="input-title">
                                <span>{subTabValue === 0 ? "Amount" : "Single Amount"}</span>
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
                            <TextField placeholder="Minimum Payout 0.01" fullWidth variant="outlined" className="input-field" />
                        </div>

                        <div className="form-group">
                            <div className="input-title">
                                <span>Recipients</span>
                            </div>
                            <TextField fullWidth select variant="outlined" className="input-field">
                                <MenuItem value="Promotional User">Promotional User</MenuItem>
                                {/* Add more menu items as needed */}
                            </TextField>
                        </div>

                        <div className="form-group">
                            <div className="input-title">
                                <span>Message</span>
                            </div>
                            <TextField placeholder="2024 Happy New Year" fullWidth variant="outlined" className="input-field" />
                        </div>

                        <div className="claim-detail">
                            <span>Allow Viewing Claim Details</span>
                            <Switch />
                        </div>

                        <div className="amount-summary">
                            <span>{subTabValue === 0 ? 'RM 0.01' : 'RM 0.00'}</span>
                        </div>

                        <Button variant="contained" className="submit-btn" onClick={handleTransferClick}>
                            Send Ang Pao
                        </Button>
                    </div>
                    {/* Popup for PIN Entry */}
                    <Link href={paths.angpaoSend()}>
                        <Dialog open={showPINPopup} onClose={handleClosePopup} fullWidth maxWidth="xs" PaperProps={{ style: { borderRadius: '16px' } }}>
                            <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '2rem', marginBottom: '1rem' }}>Payment PIN</DialogTitle>
                            <DialogContent>
                                <div style={{ textAlign: 'center' }}>
                                    <p style={{ fontSize: '1rem', color: '#666' }}>Send Ang Pao (Cash)</p>
                                    <h1 style={{ color: '#D74A3F', fontSize: '2rem', marginBottom: '2.5rem' }}>RM {amount || '0.00'}</h1>

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
            </div>
        </>
    );
};

export default MobileAngPaoPage;
