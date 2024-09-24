'use client';
import React, { useState, useEffect } from 'react';
import { Button, TextField, Tabs, Tab, LinearProgress } from '@mui/material';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import { IconCopy, IconDownload, IconRocket, IconShare3 } from '@tabler/icons-react';

const MobileInvitePage = () => {
    const [tabValue, setTabValue] = useState(0);
    const [pageTitle, setPageTitle] = useState('Invite friends'); // Dynamic title state
    const progress = 40;

    // Array to store marketing post image sources
    const marketingPosts = [
        '/mobile_images/marketing/1.png',
        '/mobile_images/marketing/2.png',
        '/mobile_images/marketing/3.png',
        '/mobile_images/marketing/4.png',
        '/mobile_images/marketing/5.png',
        '/mobile_images/marketing/6.png',
        '/mobile_images/marketing/7.png',
        '/mobile_images/marketing/8.png',
        '/mobile_images/marketing/9.png',
        '/mobile_images/marketing/1.png',
        '/mobile_images/marketing/2.png',
        '/mobile_images/marketing/3.png',
        '/mobile_images/marketing/4.png',
        '/mobile_images/marketing/5.png',
        '/mobile_images/marketing/6.png',
        '/mobile_images/marketing/7.png',
        '/mobile_images/marketing/8.png',
        '/mobile_images/marketing/9.png'
    ];

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    // Update the title when the tab changes
    useEffect(() => {
        switch (tabValue) {
            case 0:
                setPageTitle('Invite friends');
                break;
            case 1:
                setPageTitle('Marketing');
                break;
            case 2:
                setPageTitle('Rewards');
                break;
            case 3:
                setPageTitle('Leaderboard');
                break;
            default:
                setPageTitle('Invite friends');
        }
    }, [tabValue]);

    return (
        <>
            <PageHeader backUrl={paths.home()} title={pageTitle} headerClass="header" arrowColor="black" />

            <div className="invite-friends-page">
                {/* Tabs Section */}
                <div className="tab-buttons">
                    <Tabs value={tabValue} onChange={handleTabChange} centered>
                        <Tab label="Overview" />
                        <Tab label="Marketing" />
                        <Tab label="Rewards" />
                        <Tab label="Leaderboard" />
                    </Tabs>
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                    {tabValue === 0 && (
                        <div className="overview-section">
                            <span className="share-title">Share to your friends</span>
                            <TextField
                                fullWidth
                                variant="outlined"
                                value="https://www.example.com/?r=irg89078"
                                InputProps={{
                                    endAdornment: (
                                        <IconCopy />
                                    )
                                }}
                                className="invite-link-field"
                            />

                            {/* QR Section */}
                            <div className="qr-section">
                                <img src="/mobile_images/invite/qr-code.png" alt="QR Code" className="qr-code-img" />
                            </div>
                            <div className="qr-buttons">
                                <Button className="qr-button">
                                    <IconDownload />
                                    Download
                                </Button>
                                <Button className="qr-button">
                                    <IconShare3 />
                                    Share to your friends
                                </Button>
                            </div>

                            {/* Commission Section */}
                            <div className="commission-section">
                                <h4 className="commission-title">Commission</h4>
                                <img src="/mobile_images/invite/commission.png" alt="Commission" className="commission-img" />
                            </div>

                            {/* Income Calculator */}
                            <div className="income-calculator">
                                <h4 className="income-title">Income Calculator</h4>
                                <h3 className="income-value">RM 1,000</h3>
                                {/* Progress Bar */}
                                <div className="progress-container">
                                    <LinearProgress
                                        variant="determinate"
                                        value={progress} // Dynamically set progress
                                        className="progress-bar"
                                    />
                                </div>
                                <span className="income-description">
                                    <span>Invite 2 active users</span>
                                    <span>expected revenue</span>
                                </span>
                            </div>
                        </div>
                    )}

                    {tabValue === 1 && (
                        <div className="marketing-section">
                            <div className="marketing-title">
                                <IconRocket size={32} />
                                <span>Agent Posts</span>
                            </div>
                            {/* Marketing Grid - Loop through marketingPosts array */}
                            <div className="marketing-grid">
                                {marketingPosts.map((post, index) => (
                                    <img key={index} src={post} alt={`Post ${index + 1}`} className="marketing-post" />
                                ))}
                            </div>
                        </div>
                    )}

                    {tabValue === 2 && (
                        <div className="rewards-section">
                            <h4 className="stats-title">Stats</h4>
                            <div className="stats-grid">
                                <div className="stats-box green">
                                    <span>New Members (Today)</span>
                                    <span>3</span>
                                </div>
                                <div className="stats-box blue">
                                    <span>Total Rewards</span>
                                    <span>RM 1,000</span>
                                </div>
                                <div className="stats-box orange">
                                    <span>Total Invited Members</span>
                                    <span>10</span>
                                </div>
                                <div className="stats-box red">
                                    <span>Directed Downline</span>
                                    <span>8</span>
                                </div>
                            </div>
                            <h4 className="tasks-title">Tasks</h4>
                            <div className="tasks-list">
                                {[5, 10, 15, 20, 25].map((task, index) => (
                                    <div key={index} className="task-item">
                                        <img src="/mobile_images/icons/gift-box.png" alt="Task Icon" className="task-icon" />
                                        <div className="task-details">
                                            <span>Invite {task} Deposit users</span>
                                            <span>RM {task * 1000}</span>
                                        </div>
                                        <div className="claim">
                                            <span>0/{task}</span>
                                            <Button className="claim-btn">Claim</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {tabValue === 3 && (
                        <div className="leaderboard-section">
                            <h4 className="leaderboard-title">Leaderboard</h4>
                            {/* Top 3 Players */}
                            <div className="top-3-players">
                                <div className="player second">
                                    <img src="/mobile_images/leaderboard/no2.png" alt="Jackson" className="player-avatar" />
                                    <span>Jackson</span>
                                    <span className="chips">988</span>
                                    <span>chips</span>
                                </div>
                                <div className="player first">
                                    <img src="/mobile_images/icons/crown.png" alt="" className="crown" />
                                    <img src="/mobile_images/leaderboard/no1.png" alt="Eiden" className="player-avatar" />
                                    <span>Eiden</span>
                                    <span className="chips">1288</span>
                                    <span>chips</span>
                                </div>
                                <div className="player third">
                                    <img src="/mobile_images/leaderboard/no3.png" alt="Emma" className="player-avatar" />
                                    <span>Emma Aria</span>
                                    <span className="chips">788</span>
                                    <span>chips</span>
                                </div>
                            </div>
                            {/* Other Players */}
                            <div className="other-players">
                                <div className="player-row">
                                    <p>4</p>
                                    <img src="/mobile_images/contacts/jack.png" alt="Jack L. Gregory" className="player-avatar" />
                                    <span>Jack L. Gregory</span>
                                    <span className="chips">388 chips</span>
                                </div>
                                <div className="player-row">
                                    <p>5</p>
                                    <img src="/mobile_images/contacts/addai.png" alt="Mary R. Mercado" className="player-avatar" />
                                    <span>Mary R. Mercado</span>
                                    <span className="chips">350 chips</span>
                                </div>
                                <div className="player-row">
                                    <p>6</p>
                                    <img src="/mobile_images/contacts/jackson.png" alt="Theresa N. Maki" className="player-avatar" />
                                    <span>Theresa N. Maki</span>
                                    <span className="chips">288 chips</span>
                                </div>
                                <div className="player-row">
                                    <p>7</p>
                                    <img src="/mobile_images/contacts/jack.png" alt="Jack L. Gregory" className="player-avatar" />
                                    <span>Jack L. Gregory</span>
                                    <span className="chips">250 chips</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MobileInvitePage;
