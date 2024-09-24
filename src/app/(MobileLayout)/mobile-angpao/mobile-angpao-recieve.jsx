'use client';
import React from 'react';
import { Button, TextField } from '@mui/material';
import PageHeader from '@/app/components/mobile/PageHeader';
import paths from '@/paths';
import { IconShare, IconLink, IconQrcode, IconKey } from '@tabler/icons-react';
import Link from 'next/link';

const MobileRecieveAngPaoPage = () => {
    return (
        <>
            <div className="angpao-recipt-page">
                <h4 className="title">Recieve AngPao</h4>
                {/* Ang Pao Envelope Section */}
                <div className="angpao-envelope">
                    <div className="envelope-image-wrapper">
                        <img src="/mobile_images/background/angpao-recieve.png" alt="Ang Pao Envelope" className="envelope-image" />
                        <div className="angpao-recieve-content">
                            <span className="new-year-message">Enter Password to Claim</span>
                            <span className="new-year-message">AngPao</span>
                            <TextField type='password' placeholder='Enter Password' className="password" />
                            <Button className="btn-claim">CLAIM</Button>
                        </div>
                    </div>
                </div>

                {/* Share Options */}
                <div className="share-options">
                    <sapn className="share-to"></sapn>
                    <div className="share-icons">
                        <div className="share-icon">
                            <Link href={paths.angpao()}>
                                <img src="/mobile_images/icons/angpao/scan.png" alt="" />
                            </Link>
                            <span>Scan to Claim</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MobileRecieveAngPaoPage;
