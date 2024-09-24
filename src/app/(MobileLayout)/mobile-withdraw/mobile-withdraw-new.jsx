'use client';
import React, { useState } from 'react';
import PageHeader from '@/app/components/mobile/PageHeader';
import { Box, Button, TextField, IconButton, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import InsetShadowButton from '@/app/components/customs/buttons/InsetShadowButton';
import paths from '@/paths';

const WithdrawPageNew = () => {
    const [selectedBank, setSelectedBank] = useState('Affin Bank');
    const banks = [
        { name: 'Affin Bank Berhad', account: '1004 6007 0169', logo: '/mobile_images/icons/withdraw/affin-bank.png' },
        { name: 'Public Bank', account: '2346 8421 8990', logo: '/mobile_images/icons/withdraw/public-bank.png' }
    ];

    return (
        <>
            <PageHeader backUrl={paths.home()} title="Withdraw" headerClass="blue-header" arrowColor="white" />
            <Box sx={{
                mt: '3.75rem',
                background: 'linear-gradient(80deg, #3457e9 20%, #359fea 100%)'
            }}>
                {/* Balance and Turnover */}
                <Box sx={{
                    color: 'white',
                    background: 'linear-gradient(80deg, #3457e9 20%, #359fea 100%)',
                    p: 2,
                    mb: 3,
                    border: 'none',
                    borderRadius: '0px'
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography variant="body1">Balance</Typography>
                            <img src="/mobile_images/icons/eye.png" alt="Eye" style={{ width: '1.5rem' }} />
                        </Box>
                        <FormControl sx={{ minWidth: 80 }}>
                            <Select
                                defaultValue="RM"
                                sx={{
                                    background: 'transparent',
                                    border: '1px solid #fff',
                                    color: 'white',
                                    fontSize: '0.9rem',
                                    width: '7rem',
                                    height: '3rem',
                                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
                                }}
                            >
                                <MenuItem value="RM">RM</MenuItem>
                                <MenuItem value="USDT">USDT</MenuItem>
                                <MenuItem value="YUAN">YUAN</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'baseline' }}>
                        <Typography variant="body1">RM</Typography>
                        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>199,900</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                        <Typography variant="caption">Turnover requirement</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>199,900/0.00</Typography>
                    </Box>
                </Box>

                {/* Bank Options */}
                <Box sx={{ backgroundColor: '#f3f4f4', p: 2, borderRadius: '2rem 2rem 0 0', mb: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="body1">Bank options</Typography>
                        <InsetShadowButton
                            text="Add new bank"
                            fontSize="1rem"
                            padding="0.6rem 2rem"
                            borderradius="30px"
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {banks.map((bank, index) => (
                            <Box
                                key={index}
                                sx={{
                                    flex: 1,
                                    minWidth: '45%',
                                    p: 2,
                                    border: `1px solid ${selectedBank === bank.name ? '#1c5cff' : '#ddd'}`,
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    boxShadow: selectedBank === bank.name ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
                                    transition: 'border-color 0.3s ease'
                                }}
                                onClick={() => setSelectedBank(bank.name)}
                            >
                                <img src={bank.logo} alt={bank.name} style={{ width: '50px', height: '50px', marginBottom: '0.5rem' }} />
                                <Typography variant="body2">{bank.name}</Typography>
                                <Typography variant="caption">{bank.account}</Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Withdraw Form */}
                    <Box sx={{ my: 3 }}>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2">Full Name</Typography>
                            <TextField fullWidth value="Crab Enterprise" disabled sx={{ mt: 1 }} />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2">Amount (RM)</Typography>
                            <Box sx={{ position: 'relative' }}>
                                <TextField fullWidth placeholder="0.00" type="number" sx={{ mt: 1 }} />
                                <IconButton
                                    sx={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}
                                >
                                    ✕
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>

                    {/* Withdraw Details */}
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="body2">Remaining withdraw times: <span style={{ color: 'red' }}>3</span></Typography>
                        <Typography variant="body2">Withdraw charges: <span style={{ color: 'red' }}>0.00</span></Typography>
                    </Box>

                    {/* Withdraw Button */}
                    <Button variant="contained" sx={{ width: '100%', py: 2, backgroundColor: '#1c5cff', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 'bold' }}>Withdraw</Button>
                </Box>
            </Box>
        </>
    );
};

export default WithdrawPageNew;
