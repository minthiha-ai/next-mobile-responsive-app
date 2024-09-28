'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PageHeader from '@/app/components/mobile/PageHeader'; // Assuming you have a PageHeader component
import paths from '@/paths';
import Image from 'next/image';
import Link from 'next/link';

const MobileAccountPage = () => {
    return (
        <>
            <PageHeader backUrl={paths.home()} title="My Account" headerClass="blue-header" arrowColor="white" icon={<img style={{ width: '32px' }} src="/mobile_images/icons/white-qr.png" alt="qr" />} />
            <div className="account-wrapper">
                <div className="account-header">
                    <Image src="/mobile_images/contacts/lisa.png" width={63} height={63} alt="alt" className="profile-image" />
                    <Typography className="profile-name">Lisa Morgan</Typography>
                    <div className="badges">
                        <span className="badge">VIP 2</span>
                        <span className="badge">Level 5</span>
                    </div>
                </div>

                <div className="account-overview">
                    {/* Overview Section */}
                    <div className="overview-section">
                        <Typography className="overview-title" variant='h4'>Overview</Typography>
                        <div className="overview-items">
                            <div className="overview-item">
                                <Typography className="overview-value">0</Typography>
                                <Typography className="overview-label">Registered</Typography>
                            </div>
                            <div className="overview-item">
                                <Typography className="overview-value">0</Typography>
                                <Typography className="overview-label">Active Player</Typography>
                            </div>
                            <div className="overview-item">
                                <Typography className="overview-value">0.00</Typography>
                                <Typography className="overview-label">Turnover</Typography>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <Link href={paths.profileDetails()} className="action-btn">
                            <Image src="/mobile_images/icons/user.png" alt="alt" width={25} height={25} />
                            <span>Personal</span>
                        </Link>
                        <Link href={paths.profilePassword()} className="action-btn">
                            <Image src="/mobile_images/icons/key.png" alt="alt" width={25} height={25} />
                            <span>Change Password</span>
                        </Link>
                        <Link href={paths.profileRecords()} className="action-btn">
                            <Image src="/mobile_images/icons/document.png" alt="alt" width={25} height={25} />
                            <span>Game Record</span>
                        </Link>
                    </div>

                    {/* Footer Links */}
                    <div className="footer-links">
                        <Button className="footer-link"><Image src="/mobile_images/icons/writing.png" alt="alt" width={20} height={20} /> Write Feedback</Button>
                        <Button className="footer-link"><Image src="/mobile_images/icons/terms.png" alt="alt" width={20} height={20} /> Terms and Conditions</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileAccountPage;
