'use client';
import React, { useState } from 'react';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import { TextField, IconButton } from '@mui/material';
import { IconScan, IconTrash } from '@tabler/icons-react';
import InsetShadowButton from '@/app/components/customs/buttons/InsetShadowButton';
import Link from 'next/link';

const MobileTransferPage = () => {
    const [activeTab, setActiveTab] = useState('Transfer');
    const [inputValue, setInputValue] = useState('');

    const tabs = [
        { name: 'Transfer', link: '#' },
        { name: 'Contacts', link: paths.contact() },
        { name: 'Ang Pao', link: paths.angpao() },
    ];

    const handleClearInput = () => {
        setInputValue('');
    };

    // Mock data for recent transfers
    const recentTransfers = [
        { name: 'Addai', avatar: '/mobile_images/contacts/addai.png' },
        { name: 'Paul C. Ramos', avatar: '/mobile_images/contacts/paul.png' },
        { name: 'Jack L. Gregory', avatar: '/mobile_images/contacts/jack.png' },
        { name: 'Jackson', avatar: '/mobile_images/contacts/jackson.png' }
    ];

    return (
        <div className="transfer-wraper">
            <PageHeader backUrl={paths.home()} title="Transfer" headerClass="header" arrowColor="black" />
            <div className="transfer-page">
                <div className="tab-header">
                    {tabs.map((tab, index) => (
                        <Link href={tab.link} key={index}>
                            <button
                                className={`tab-btn ${activeTab === tab.name ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.name)}
                            >
                                {tab.name}
                            </button>
                        </Link>
                    ))}
                </div>
                <div className="transfer-form">
                    <div className="input-group">
                        <label>Transfer to</label>
                        <div className="input-container">
                            <TextField
                                variant="outlined"
                                fullWidth
                                placeholder="Enter account or contact"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                sx={{
                                    backgroundColor: 'white', // Set the background to white
                                    borderRadius: '8px', // Optional: adds rounded corners
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={handleClearInput}>
                                            <IconScan />
                                        </IconButton>
                                    ),
                                }}
                            />
                        </div>
                    </div>
                    <div className="submit-container">
                        <Link href={paths.transferDetail()}>
                            <InsetShadowButton
                                text="Submit"
                                fontSize="1rem"
                                padding="0.5rem 6rem"
                                borderradius="11px"
                                fontWeight="bold"
                                inset
                            />
                        </Link>
                    </div>

                    {/* Recent Transfers */}
                    <div className="recent-transfers">
                        <div className="title">
                            <span>Recent Transfers</span>
                            <IconTrash color='#bdbdbd' />
                        </div>

                        <div className="avatars">
                            {recentTransfers.map((transfer, index) => (
                                <div className="avatar" key={index}>
                                    <img src={transfer.avatar} alt={transfer.name} />
                                    <span>{transfer.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileTransferPage;
